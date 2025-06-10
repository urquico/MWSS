import { Card, Grid, Select, Text, Divider } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

interface Props {
  fields: any[];
  form: UseFormReturnType<any>;
}

function BillingStatementExtras({ fields, form }: Props) {
  const reviewerFields = fields.filter((field) =>
    ['reviewer1', 'reviewer2', 'reviewer3', 'reviewer4'].includes(field.name)
  );
  const approverFields = fields.filter((field) =>
    ['approver1', 'approver2'].includes(field.name)
  );

  return (
    <Card withBorder radius="md" mt="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Text fw={600} size="lg">Reviewers and Approvers</Text>
      </Card.Section>

      <Grid p="md">
        <Grid.Col span={12}>
          <Text fw={500} size="md" mb="xs">Reviewers</Text>
        </Grid.Col>
        {reviewerFields.map((field) => (
          <Grid.Col key={field.name} span={field.cols || 6}>
            <Select
              label={field.label}
              placeholder="Select"
              data={field.options || []}
              {...form.getInputProps(field.name)}
            />
          </Grid.Col>
        ))}

        <Grid.Col span={12} mt="md">
          <Divider my="sm" />
          <Text fw={500} size="md" mb="xs">Approvers</Text>
        </Grid.Col>
        {approverFields.map((field) => (
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

export default BillingStatementExtras;
