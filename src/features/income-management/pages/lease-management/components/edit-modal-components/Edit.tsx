import { useEffect, useRef, useState } from 'react';
import { useForm } from '@mantine/form';
import BaseModal from '@/features/income-management/components/BaseModal';
import { getComputedFields, formConfigs } from "../../config/create-modal-config";
import { getTitle } from '../../config/create-modal-config';
import FormExtras from '../create-modal-components/FormExtras';
import CurrentDate from '@/utils/CurrentDate';
import { FieldConfig, SectionConfig } from '@/features/income-management/types/modal-fields';
import { FieldGrid } from '@/features/income-management/components/FieldGrid';

interface EditProps {
  viewType: string | undefined;
  /**
 * Dynamic data object used to pre-fill form values.
 * Structure depends on the viewType and its field definitions.
 */
  data?: Record<string, any>;
  onSubmit: (values: { remarks: string }) => void;
  onClose: () => void;
}

function Edit({ data, viewType, onSubmit, onClose }: EditProps) {
  const [enableRentalAdjustment, setEnableRentalAdjustment] = useState(false);
  const { currentDate } = CurrentDate();
  const formRef = useRef<HTMLFormElement>(null);

  // Section-based rendering support
  const config = viewType && formConfigs[viewType]
    ? formConfigs[viewType]
    : null;
  const sections: SectionConfig[] | undefined = config?.sections;
  const fields: FieldConfig[] = sections
    ? sections.flatMap(section => section.fields ?? []).filter(Boolean)
    : config?.fields ?? [];

  const form = useForm({
    initialValues: fields.reduce((acc, field) => {
      // 1. Use API data if available
      if (data && data[field.name] !== undefined && data[field.name] !== null) {
        acc[field.name] = data[field.name];
      }
      // 2. Else, auto-fill current date for date fields
      else if (field.type === 'date' && field.autoFillCurrentDate) {
        acc[field.name] = currentDate;
      }
      // 3. Else, withSwitch logic
      else if (field.withSwitch) {
        acc[field.name] = null;
      }
      // 4. Else, dateRange logic
      else if (field.type === 'dateRange') {
        acc[field.name] = [null, null];
      }
      // 5. Else, default to empty string
      else {
        acc[field.name] = '';
      }
      return acc;
    }, {} as Record<string, any>),

    validate: (values) => {
      const errors: Record<string, string> = {};
      fields.forEach((field: FieldConfig) => {
        if (field.required && !values[field.name]) {
          errors[field.name] = 'This field is required';
        }
        if (field.name === 'retailAdjustment' && enableRentalAdjustment && !values[field.name]) {
          errors[field.name] = 'Please enter rental adjustment details';
        }
      });
      return errors;
    }
  });

  useEffect(() => {
    const computedValues = getComputedFields(viewType ?? '', form.values);
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
    };
    onSubmit(finalValues);
    form.reset();
  };

  return (
    <BaseModal
      opened={true}
      onClose={onClose}
      title={`Update ${getTitle(viewType ?? '')}`}
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
      <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)}>
        <FieldGrid
          sections={sections?.map(section => ({
            ...section,
            fields: section.fields ?? [],
          }))} fields={fields}
          form={form}
          enableRentalAdjustment={enableRentalAdjustment}
          setEnableRentalAdjustment={setEnableRentalAdjustment}
        />
        <button type="submit" style={{ display: 'none' }} />
      </form>
      <FormExtras
        viewType={viewType ?? ''}
        fields={fields.filter((f: FieldConfig) => f.displayIn === 'formExtra')}
        form={form}
      />
    </BaseModal>
  );
}

export default Edit;