import { useRef, useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
import BaseModal from '@/features/income-management/components/BaseModal';
import { getComputedFields, formConfigs } from "../../config/create-modal-config";
import { getTitle } from '../../config/create-modal-config';
import FormExtras from './FormExtras';
import CurrentDate from '@/utils/CurrentDate';
import { FieldConfig } from '@/features/income-management/types/modal-fields';
import { FieldGrid } from '@/features/income-management/components/FieldGrid';

interface CreateModalProps {
  viewType: string;
  data?: Record<string, any>;
  onSubmit: (values: any) => void;
  onClose: () => void;
}

function CreateModal({ viewType, onSubmit, onClose, data }: CreateModalProps) {
  const { currentDate } = CurrentDate();
  const formRef = useRef<HTMLFormElement>(null);
  const config = formConfigs[viewType];
  const fields: FieldConfig[] = config?.fields ?? [];
  const sections = config?.sections?.map(section => ({
    ...section,
    fields: section.fields ?? []
  }));
  const [enableRentalAdjustment, setEnableRentalAdjustment] = useState(false);
  console.log('CreateModal data:', data);
  // Determine filtering context
  const filterContext = viewType === 'journal-entry' ? data?.jevType || 'general' : 'createModal';

  // Filter fields for non-sectioned configs
  const modalFields = fields.filter(field => {
    if (!field.displayIn) return true;
    if (Array.isArray(field.displayIn)) {
      return field.displayIn.includes(filterContext);
    }
    return field.displayIn === filterContext;
  });

  // Form logic
  const form = useForm({
    initialValues: fields.reduce((acc, field) => {
      if (field.type === 'date' && field.autoFillCurrentDate) {
        acc[field.name] = currentDate;
      } else {
        acc[field.name] = field.type === 'dateRange'
          ? [null, null]
          : field.defaultValue ?? field.value ?? '';
      }
      if (field.withSwitch) acc[field.name] = null;
      if (data && data[field.name]) acc[field.name] = data[field.name];
      return acc;
    }, {} as Record<string, any>),

    validate: (values) => {
      const errors: Record<string, string> = {};
      fields.forEach(field => {
        if (field.required && !values[field.name]) {
          errors[field.name] = 'This field is required';
        }
        if (Object.keys(errors).length > 0) {
          console.log('FORM VALIDATION ERRORS:', errors, values);
        }
        if (
          field.name === 'retailAdjustment' &&
          enableRentalAdjustment &&
          !values[field.name]
        ) {
          errors[field.name] = 'Please enter rental adjustment details';
        }
      });
      return errors;
    }
  });

  useEffect(() => {
    const computedValues = getComputedFields(viewType, form.values);
    form.setValues({
      ...form.values,
      ...computedValues
    });
  }, [form.values.principal, form.values.interestRate, form.values.retailAdjustment]);

  const handleSubmit = (values: any) => {
    const [periodFrom, periodTo] = values.periodFromTo || [null, null];
    const finalValues = {
      ...values,
      periodFrom,
      periodTo,
      ...(data?.jevType ? { jevType: data.jevType } : {})

    };
    console.log('CreateModal handleSubmit finalValues:', finalValues);

    onSubmit(finalValues);
    form.reset();
  };

  return (
    <BaseModal
      opened={true}
      onClose={onClose}
      title={`Create ${getTitle(viewType)}`}
      size="55rem"
      showSaveButton={true}
      showExportButton={false}
      showPrintButton={false}
      withHeader={false}
      onSave={() => {
        if (formRef.current) {
          formRef.current.requestSubmit();
        }
      }}
    >
      <form ref={formRef} onSubmit={e => {
        console.log('FORM SUBMIT RAW EVENT', e);
        form.onSubmit(handleSubmit)(e);
      }}>
        <FieldGrid
          fields={modalFields}
          form={form}
          enableRentalAdjustment={enableRentalAdjustment}
          setEnableRentalAdjustment={setEnableRentalAdjustment}
          sections={sections}
        />
        <button type="submit" style={{ display: 'none' }} />
      </form>
      <FormExtras
        viewType={viewType}
        fields={fields.filter(f => f.displayIn === 'formExtra')}
        form={form}
      />
    </BaseModal>
  );
}

export default CreateModal;