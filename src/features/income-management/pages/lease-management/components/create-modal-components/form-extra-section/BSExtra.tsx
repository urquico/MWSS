// components/FormExtrasSections/BillingStatementExtras.tsx
import { Card, Grid, Select, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

interface Props {
  fields: any[];
  form: UseFormReturnType<any>;
}

  function BillingStatementExtras({ fields, form }: Props) {
  const reviewerApproverFields = fields.filter((field) =>
    ['reviewer1', 'reviewer2', 'reviewer3', 'reviewer4', 'approver1', 'approver2'].includes(field.name)
  );

  return (
    <Card withBorder radius="md" mt="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Text fw={500}>Reviewers and Approvers</Text>
      </Card.Section>

      <Grid p="md">
        {reviewerApproverFields.map((field) => (
          <Grid.Col key={field.name} span={field.cols || 6}>
            <Select
              label={field.label}
              placeholder="Select"
              data={field.options || []}
              {...form.getInputProps(field.name)}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
}

export default BillingStatementExtras