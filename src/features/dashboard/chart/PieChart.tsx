// components/chart/LesseeTypePieChart.tsx
import { Card, Group, Text, Stack, Box, Table,SimpleGrid } from '@mantine/core';
import { PieChart } from '@mantine/charts';

type LesseeItem = {
  type: string;
  value: number;
  color: string;
};

type Props = {
  data: LesseeItem[];
};

const LesseeTypePieChart = ({ data }: Props) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const chartData = data.map((item) => ({
    name: item.type,
    value: item.value,
    color: item.color,
  }));

  const rows = data.map((item) => (
    <Table.Tr key={item.type}>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>{item.value}%</Table.Td>
    </Table.Tr>
  ));

  return (
    <Card withBorder radius="md">
      <Text fz={20} fw={600} mb="md" c='#0E3687'>
        Percentage Per Lessee Type
      </Text>
      <SimpleGrid cols={{ base: 1, md: 2 }} mt="md" spacing="xl">
        <Table withColumnBorders={false} withRowBorders={false}>
          <Table.Thead>
            <Table.Tr style={{ borderBottom: '2px solid #e9ecef' }} className='text-neutral'>
              <Table.Th>Lessee Type</Table.Th>
              <Table.Th>Value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className='text-neutral'>{rows}</Table.Tbody>
        </Table>

        <Stack gap="xs" align="center">
          <PieChart
            data={chartData}
            withLabelsLine
            withTooltip
            labelsPosition="inside"
            labelsType="percent"
            withLabels
             size={200}
            strokeWidth={0}
         />

          {/* Custom Legend */}
          <Group wrap="wrap" justify="center" gap="xs" mt="sm" className='text-neutral'>
            {data.map((item) => (
              <Group key={item.type} gap={6}>
                <Box
                  w={12}
                  h={12}
                  style={{ backgroundColor: item.color, borderRadius: 2 }}
                />
                <Text size="sm">{item.type}</Text>
              </Group>
            ))}
          </Group>
        </Stack>
      </SimpleGrid>
    </Card>
  );
};

export default LesseeTypePieChart;
