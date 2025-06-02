// src/features/income-management/components/CreateModal.tsx
import {  Grid, Title, Button, Select, Textarea,NumberInput} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import TextInput from "@/components/ui/TextInput";
import formConfigs, { getComputedFields, getSubmitButtonLabel } from "../config/create-modal-config";
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import Modal from '@/components/ui/Modal';
interface CreateModalProps {
  viewType: string;
  onSubmit: (values: any) => void;
  onClose: () => void;
  opened: boolean;
}

function CreateModal({ viewType, onSubmit, onClose, opened }: CreateModalProps) {
  const fields = formConfigs[viewType] || [];
  
// In your CreateModal component
const form = useForm({
  initialValues: fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || '';
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

// Add this effect to handle field computations
useEffect(() => {
  const computedValues = getComputedFields(viewType, form.values);
  form.setValues({
    ...form.values,
    ...computedValues
  });
}, [form.values.principal, form.values.interestRate, form.values.retailAdjustment]);

  const handleSubmit = (values: any) => {
    onSubmit(values);
    form.reset();
    onClose();
  };

  const renderField = (field: typeof fields[0]) => {
    switch (field.type) {
      case 'text':
        return (
          <TextInput
            label={field.label}
            placeholder={field.placeholder}
            {...form.getInputProps(field.name)}
          />
        );
      case 'date':
        return (
          <DateInput
            label={field.label}
            {...form.getInputProps(field.name)}
          />
        );
      case 'number':
        return (
          <NumberInput
            label={field.label}
            {...form.getInputProps(field.name)}
          />
        );
      case 'select':
        return (
          <Select
            label={field.label}
            data={field.options || []}
            {...form.getInputProps(field.name)}
          />
        );
      case 'textarea':
        return (
          <Textarea
            label={field.label}
            {...form.getInputProps(field.name)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={3}>Create New {viewType.replace(/-/g, ' ')}</Title>}
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          {fields.map(field => (
            <Grid.Col key={field.name} span={field.cols || 12}>
              {renderField(field)}
            </Grid.Col>
          ))}
        </Grid>

        <Button type="submit" fullWidth mt="md">
          {getSubmitButtonLabel(viewType)}
        </Button>
      </form>
    </Modal>
  );
}

export default CreateModal;