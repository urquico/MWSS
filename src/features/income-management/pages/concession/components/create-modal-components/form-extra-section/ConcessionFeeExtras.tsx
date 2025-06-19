import { Card, Grid, Select, Text, Divider, Box } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FieldConfig } from '@/features/income-management/types/modal-fields';
import { formConfigs, getTitle } from '../../../config/create-modal-config';
import Table from '@/components/ui/table/components/Table';

interface Props {
  viewType: string;
  fields: FieldConfig[];
  form: UseFormReturnType<any>;
  onClose: () => void;
}

function ConcessionFeeExtras({ viewType, fields, form, onClose }: Props) {
  const config = formConfigs[viewType] || {};
  const tableData = config.tableData || [];
  const columns = config.columns || [];

  return (
    <Card>
      <Text fw={500} size="lg" style={{ marginBottom: 16 }}>
        {getTitle(viewType)}
      </Text>
      <Box mb={16}>
        <Divider />
      </Box>
      <Grid>
        {fields.map((field) => (
          <Grid.Col span={6} key={field.name}>
            {field.type === 'select' ? (
              <Select
                label={field.label}
                data={
                
                  (field.options || []).map((opt: any) =>
                    typeof opt === 'string'
                      ? { label: opt, value: opt }
                      : opt
                  )
                }
                {...form.getInputProps(field.name)}
              />
            ) : (
              <Text>{field.label}</Text>
            )}
          </Grid.Col>
        ))}
      </Grid>
      <Box my={16}>
        <Divider />
      </Box>
      {columns.length > 0 && tableData.length > 0 ? (
        <Table data={tableData} columns={columns} />
      ) : (
        <Text c="dimmed" ta="center" mt="md">
          No data available for this section.
        </Text>
      )}
    </Card>
  );
}

export default ConcessionFeeExtras;
