import { Card, Group, Text, Stack, Box, Table, SimpleGrid, Center } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { useState } from 'react';

type DonutItem = {
  label: string;
  value: number;
  color: string;
};

type Props = {
  data: DonutItem[];
};

const BillingDonutChart = ({ data }: Props) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const [hoveredItem, setHoveredItem] = useState<DonutItem | null>(null);

  // Format data for DonutChart
  const chartData = data.map((item) => ({
    name: item.label,
    value: item.value,
    color: item.color,
  }));

  // Table rows
  const rows = data.map((item) => (
    <Table.Tr key={item.label}>
      <Table.Td>{item.label}</Table.Td>
      <Table.Td>{item.value}</Table.Td>
    </Table.Tr>
  ));



  return (
    <Card withBorder radius="md">
      <Text fz={20} fw={600} mb="md" c='#0E3687'>
        Billing Summary (Issued vs. Unissued)
      </Text>
      <SimpleGrid cols={{ base: 1, md: 2 }} mt="md" spacing="xl" className='text-neutral'>
        <Table withColumnBorders={false} withRowBorders={false}>
          <Table.Thead>
            <Table.Tr style={{ borderBottom: '2px solid #e9ecef' }}>
              <Table.Th>Status</Table.Th>
              <Table.Th>Value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

        <Stack gap="xs" align="center" justify="center" style={{ position: 'relative' }} className='text-neutral'>
          <DonutChart
            data={chartData}
            size={220}
            thickness={40}
            withTooltip
            strokeWidth={0}
            chartLabel='Billing Summary'
          />

        {/* Custom Legend */}
        <Group wrap="wrap" justify="center" gap="xs" mt="sm" className="text-neutral">
          {data.map((item) => (
            <Group key={item.label} gap={6}>
              <Box
                w={12}
                h={12}
                style={{ backgroundColor: item.color, borderRadius: 2 }}
              />
              <Text size="sm">{item.label}</Text>
            </Group>
          ))}
        </Group>
   
        </Stack>
      </SimpleGrid>
    
    </Card>
  );
};

export default BillingDonutChart;