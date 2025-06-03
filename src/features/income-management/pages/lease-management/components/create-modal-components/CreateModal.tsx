import { Grid, Select, Textarea, NumberInput } from '@mantine/core';
import { DateInput, DatePickerInput } from '@mantine/dates';
import TextInput from "@/components/ui/TextInput";
import formConfigs, { getComputedFields } from "../../config/create-modal-config";
import { useForm } from '@mantine/form';
import { useEffect, useRef } from 'react';
import { IconCalendarWeek } from '@tabler/icons-react';
import BaseModal from '@/features/income-management/components/BaseModal';
import FormExtras from './FormExtras';

interface CreateModalProps {
  viewType: string;
  onSubmit: (values: any) => void;
  onClose: () => void;
}
function CreateModal({ viewType, onSubmit, onClose }: CreateModalProps) {

  const formRef = useRef<HTMLFormElement>(null);


  const fields = formConfigs[viewType] || [];

  const form = useForm({
    initialValues: fields.reduce((acc, field) => {
      acc[field.name] = field.type === 'dateRange' ? [null, null] : field.defaultValue || '';
      return acc;
    }, {} as Record<string, any>),

    validate: (values) => {
      const errors: Record<string, string> = {};
      fields.forEach(field => {
        if (field.required && !values[field.name]) {
          errors[field.name] = 'This field is required';
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
    };
    onSubmit(finalValues);
    form.reset();
  };


  const renderField = (field: typeof fields[0]) => {
    const commonProps = {
      label: field.label,
      placeholder: field.placeholder,
      disabled: field.disabled,
      description: field.description,
      ...form.getInputProps(field.name),
    };

    switch (field.type) {
      case 'text':
        return <TextInput {...commonProps} />;
      case 'date':
        return <DateInput {...commonProps} rightSection={<IconCalendarWeek size={18} />}
        />;
      case 'number':
        return <NumberInput {...commonProps} />;
      case 'select':
        return <Select data={field.options || []} {...commonProps} />;
      case 'textarea':
        return <Textarea {...commonProps} />;
      case 'dateRange':
        return (
          <DatePickerInput
            type="range"
            rightSection={<IconCalendarWeek size={18} />}
            {...commonProps}
            value={form.values[field.name]}
            onChange={(value) => form.setFieldValue(field.name, value)}
          />
        );
      default:
        return null;
    }
  };


  return (
    <BaseModal
      opened={true}
      onClose={onClose}
      title={`Create ${viewType.replace(/-/g, ' ')}`}
      size="55rem"
      showSaveButton={true}
      showExportButton={false}
      showPrintButton={false}
      onSave={() => {
        // Programmatically submit the form
        if (formRef.current) {
          formRef.current.requestSubmit();
        }
      }}
    >
      <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          {fields
            .filter(field =>
              viewType !== 'billing-statement' ||
              !['reviewer1', 'reviewer2', 'reviewer3', 'reviewer4', 'approver1', 'approver2'].includes(field.name)
            )
            .map(field => (
              <Grid.Col key={field.name} span={field.cols || 12}>
                {renderField(field)}
              </Grid.Col>
            ))}
          {/* Hidden submit button to allow programmatic submission */}
        <button type="submit" style={{ display: 'none' }} />
        </Grid>
      </form>
      <FormExtras viewType={viewType} fields={fields} form={form} />

    </BaseModal>
  );
}

export default CreateModal;