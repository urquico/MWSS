// components/FormExtras.tsx
import { Box, Text, Divider, Card, Select, Grid } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

interface FormExtrasProps {
  viewType: string;
  fields: any[];
  form: UseFormReturnType<any>; // Adjust type if your form is typed
}

function FormExtras({ viewType, fields, form }: FormExtrasProps) {
  if (viewType === 'billing-statement') {
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

//   if (viewType === 'statement-of-account') {
//     return (
//       <Box mt="lg">
//         <Divider my="sm" label="Statement of Account Extras" />
//         <Text size="sm" c="dimmed">
//           You can include tables or summaries here relevant to the SOA.
//         </Text>
//       </Box>
//     );
//   }

  return null;
}

export default FormExtras;
