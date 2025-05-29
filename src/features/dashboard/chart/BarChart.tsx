// components/chart/LesseeTypeBarChart.tsx
import { Card, Group, Text, Stack, Box, Table, SimpleGrid } from '@mantine/core';
import { BarChart } from '@mantine/charts';

type LesseeItem = {
    type: string;
    value: number;
    color: string;
    description?: string;
};

type Props = {
    data: LesseeItem[];
    title?: string;
    description?: string;
};

const LesseeTypeBarChart = ({ data, title = "Percentage Per Lessee Type", description }: Props) => {
    const chartData = data.map((item) => ({
        type: item.type,  // Keep original property name
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
            <Stack gap="xs">
                <Text fz={20} fw={600} mb="md" c='#0E3687'>
                    {title}
                </Text>
                {description && (
                    <Text size="sm" c="dimmed">
                        {description}
                    </Text>
                )}
            </Stack>

            <SimpleGrid cols={{ base: 1, md: 2 }} mt="md" spacing="" className='text-neutral'>
                {/* Table - takes 50% width */}
                <Box>
                    <Table withColumnBorders={false} withRowBorders={false}>
                        <Table.Thead>
                            <Table.Tr style={{ borderBottom: '2px solid #e9ecef' }}>
                                <Table.Th>Lessee Type</Table.Th>
                                <Table.Th>Value</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </Box>

                {/* Chart - takes 50% width */}
                <Box>
                    <Stack gap="xs" align="center">
                        <BarChart
                            h={300}
                            data={chartData}
                            dataKey="type"
                            series={[{ name: 'value', color: 'color' }]}
                            tickLine="y"
                            gridAxis="xy"
                            orientation="horizontal"
                            yAxisProps={{ domain: [0, 40] }}
                            xAxisProps={{ interval: 0 }}
                            withTooltip
                            barChartProps={{
                                barSize: 30,
                            }}
                        />

                        {/* Legend */}
                        <Group justify="center" className='text-neutral'>
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
                </Box>
            </SimpleGrid>
        </Card>
    );
};

export default LesseeTypeBarChart;