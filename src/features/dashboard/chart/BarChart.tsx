import { Card, Group, Text, Stack, Box, Table, SimpleGrid } from '@mantine/core';
import { BarChart, BarChartProps } from '@mantine/charts';
import { formatPrice } from '@/utils/price-formatter';

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
    showTable?: boolean;
    h?: number;
    w?: number;
    barProps?: BarChartProps['barProps'];
    barChartProps?: BarChartProps['barChartProps'];
};

const LesseeTypeBarChart = ({
    data,
    title = "Percentage Per Lessee Type",
    description,
    showTable = true,
    h = 300,
    w = 300,
    barProps,
    barChartProps,
}: Props) => {
    const chartData = data.map((item) => ({
        type: item.type,
        value: item.value,
        color: item.color,
    }));

    const rows = data.map((item) => (
        <Table.Tr key={item.type}>
            <Table.Td>{item.type}</Table.Td>
            <Table.Td>{formatPrice(item.value)}</Table.Td>
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

            <SimpleGrid
                cols={showTable ? { base: 1, md: 2 } : 1}
                mt="md"
                spacing=""
                className='text-neutral'
            >
                {showTable && (
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
                )}

                <Box>
                    <Stack gap="xs" align="center">
                        <BarChart
                            h={h}
                            w={w}
                            data={chartData}
                            dataKey="type"
                            series={[{ name: 'value', color: 'color' }]}
                            tickLine="y"
                            gridAxis="xy"
                            orientation="horizontal"
                            yAxisProps={{ domain: [0, 40] }}
                            xAxisProps={{ interval: 0 }}
                            withTooltip
                            {...(barProps ? { barProps } : {})}
                            {...(barChartProps ? { barChartProps } : {})}
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