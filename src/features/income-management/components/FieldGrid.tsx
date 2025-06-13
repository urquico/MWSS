import React from 'react';
import { Grid, Title } from '@mantine/core';
import { FieldConfig } from '@/features/income-management/types/modal-fields';
import TextInput from "@/components/ui/TextInput";
import { DateInput, DatePickerInput } from '@mantine/dates';
import { NumberInput, Select, Switch, Checkbox, Textarea, Text } from '@mantine/core';
import { IconCalendarWeek, IconCheck, IconX } from '@tabler/icons-react';

interface FieldGridProps {
  sections?: { title?: string; fields: FieldConfig[] }[];
  fields: FieldConfig[];
  form: any;
  enableRentalAdjustment?: boolean;
  setEnableRentalAdjustment?: (val: boolean) => void;
}

export function FieldGrid({
  sections,
  fields,
  form,
  enableRentalAdjustment,
  setEnableRentalAdjustment,
}: FieldGridProps) {
  const renderField = (field: FieldConfig) => {
    const commonProps = {
      label: field.label,
      placeholder: field.placeholder,
      disabled: field.disabled || (field.type === 'date' && field.autoFillCurrentDate),
      description: field.description,
      ...form.getInputProps(field.name, { type: field.type === 'checkbox' ? 'checkbox' : 'input' }),
    };
    if (field.name === 'retailAdjustment' && field.withSwitch && enableRentalAdjustment !== undefined && setEnableRentalAdjustment) {
      return (
        <div>
          {enableRentalAdjustment ? (
            <TextInput {...commonProps} type="text" disabled={false} />
          ) : (
            <NumberInput {...commonProps} disabled />
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
              root: { display: 'flex', alignItems: 'center', gap: '8px' },
              label: { marginLeft: 0, order: 1 },
              body: { order: 2 }
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
        return <Textarea resize="vertical" {...commonProps} />;
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
      case 'checkbox':
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

  if (sections && sections.length > 0) {
    return (
      <Grid>
        {sections.map((section, i) => (
          <React.Fragment key={section.title || i}>
            {section.title && (
              <Grid.Col span={12}>
                <Title order={5} mt="md" mb="xs">{section.title}</Title>
              </Grid.Col>
            )}
            {section.fields.map((field: FieldConfig) => (
              <Grid.Col key={field.name} span={field.cols || field.span || 12}>
                {renderField(field)}
              </Grid.Col>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    );
  }
  // fallback: flat fields
  return (
    <Grid>
      {fields.map((field: FieldConfig) => (
        <Grid.Col key={field.name} span={field.cols || field.span || 12}>
          {renderField(field)}
        </Grid.Col>
      ))}
    </Grid>
  );
}