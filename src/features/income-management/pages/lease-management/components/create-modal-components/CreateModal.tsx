import { Grid, Select, Textarea, NumberInput, Checkbox, Switch, Input, Text } from '@mantine/core';
import { DateInput, DatePickerInput } from '@mantine/dates';
import TextInput from "@/components/ui/TextInput";
import formConfigs, { getComputedFields } from "../../config/create-modal-config";
import { useForm } from '@mantine/form';
import { useEffect, useRef, useState } from 'react';
import { IconCalendarWeek, IconCheck, IconX } from '@tabler/icons-react';
import { getTitle } from '../../config/create-modal-config';
import BaseModal from '@/features/income-management/components/BaseModal';
import FormExtras from './FormExtras';
import CurrentDate from '@/utils/CurrentDate';

/**
 * PLEASE NOTE, the submit logic is passed to the parent component LeaseManagement.tsx
 * 
 * 
 * 
 * 
 */
interface CreateModalProps {
  viewType: string;
  data?: Record<string, any>; 
  onSubmit: (values: any) => void;
  onClose: () => void;
}

function CreateModal({ viewType, onSubmit, onClose,data  }: CreateModalProps) {
  const { currentDate } = CurrentDate();

  const formRef = useRef<HTMLFormElement>(null);
  const fields = formConfigs[viewType] || [];
  const [enableRentalAdjustment, setEnableRentalAdjustment] = useState(false);

   // Determine the context for filtering fields
  const filterContext = viewType === 'journal-entry' ? data?.jevType || 'general' : 'createModal';

  // Filter fields based on the context
  const modalFields = fields.filter(field => {
    if (!field.displayIn) return true;
    
    if (Array.isArray(field.displayIn)) {
      return field.displayIn.includes(filterContext);
    }
    
    return field.displayIn === filterContext;
  });

   const form = useForm({
    initialValues: fields.reduce((acc, field) => {
      // Set initial values based on field type
      if (field.type === 'date' && field.autoFillCurrentDate) {
        acc[field.name] = currentDate;
      } else {
        acc[field.name] = field.type === 'dateRange' ? [null, null] : field.defaultValue || '';
      }
      
      // Handle switch fields
      if (field.withSwitch) {
        acc[field.name] = null;
      }
      
      // Apply external data if available
      if (data && data[field.name]) {
        acc[field.name] = data[field.name];
      }

      return acc;
    }, {} as Record<string, any>),

    validate: (values) => {
      const errors: Record<string, string> = {};
      fields.forEach(field => {
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
    disabled: field.disabled || (field.type === 'date' && field.autoFillCurrentDate),
      description: field.description,
      ...form.getInputProps(field.name, { type: field.type === 'checkbox' ? 'checkbox' : 'input' }),
    };
    // Special case for retailAdjustment with switch
    if (field.name === 'retailAdjustment' && field.withSwitch) {
      return (
        <div>
          {enableRentalAdjustment ? (
            <TextInput
              {...commonProps}
              type="text"
              disabled={false}

            />
          ) : (
            <NumberInput
              {...commonProps}
              disabled

            />
          )}
          <Switch
            size="sm"
            color="teal"
            checked={enableRentalAdjustment}
            onChange={(event) => {
              setEnableRentalAdjustment(event.currentTarget.checked);
              form.setFieldValue('retailAdjustment', event.currentTarget.checked ? '' : null);
            }}
            label={<Text fz={13}>Enable rental adjustment</Text>}
            thumbIcon={
              enableRentalAdjustment ? (
                <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
              ) : (
                <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
              )
            }
            mt="xs"
            styles={{
              root: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              },
              label: {
                marginLeft: 0,
                order: 1, // Makes label appear after the switch
              },
              body: {
                order: 2, // Makes switch appear before the label
              }
            }}
          />
        </div>
      );
    }
    switch (field.type) {
      case 'text':
        return <TextInput {...commonProps} />;
      case 'date':
        return <DateInput {...commonProps} rightSection={<IconCalendarWeek size={18} />} />;
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
        ); case 'checkbox':
        return (
          <Checkbox
            label={field.label}
            disabled={field.disabled}
            description={field.description}
            checked={form.values[field.name]}
            onChange={(event) => form.setFieldValue(field.name, event.currentTarget.checked)}
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
      title={`Create ${getTitle(viewType)}`}
      size="55rem"
      showSaveButton={true}
      showExportButton={false}
      showPrintButton={false}
      onSave={() => {
        if (formRef.current) {
          formRef.current.requestSubmit();
        }
      }}
    >
      <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          {modalFields.map(field => (
            <Grid.Col key={field.name} span={field.cols || 12}>
              {renderField(field)}
            </Grid.Col>
          ))}
          <button type="submit" style={{ display: 'none' }} />
        </Grid>
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