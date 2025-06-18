import { Card, Text, Stack } from '@mantine/core';
import { BarChart, BarChartProps } from '@mantine/charts';

type MonthlyBarChartProps = {
  data: any[];
  title?: string;
  description?: string;
  h?: number;
  w?: number;
  dataKey: string;
  series: BarChartProps['series'];
  barProps?: BarChartProps['barProps'];
  barChartProps?: BarChartProps['barChartProps'];
};

const MonthlyBarChart = ({
  data,
  title,
  description,
  h = 300,
  w = 500,
  dataKey,
  series,
  barProps,
  barChartProps,
}: MonthlyBarChartProps) => (
  <Card withBorder radius="md">
    <Stack gap="xs">
      {title && (
        <Text fz={20} fw={600} mb="md" c="#0E3687">
          {title}
        </Text>
      )}
      {description && (
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      )}
    </Stack>
    <BarChart
      h={h}
      w={w}
      data={data}
      dataKey={dataKey}
      series={series}
      barProps={{ radius: 8, ...barProps }}
      withTooltip
      {...(barChartProps ? { barChartProps } : {})}
    />
  </Card>
);

export default MonthlyBarChart;