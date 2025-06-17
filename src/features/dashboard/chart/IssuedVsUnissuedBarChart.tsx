import { Card, Text, Stack } from '@mantine/core';
import { BarChart, BarChartProps } from '@mantine/charts';

type RawWaterMonthlyBar = {
  month: string;
  issued: number;
  unissued: number;
};

type Props = {
  data: RawWaterMonthlyBar[];
  title?: string;
  description?: string;
  h?: number;
  w?: number;
  barProps?: BarChartProps['barProps'];
  barChartProps?: BarChartProps['barChartProps'];
};

const IssuedVsUnissuedBarChart = ({
  data,
  title = "Issued vs Unissued Billings",
  description,
  h = 300,
  w = 500,
  barProps,
  barChartProps,
}: Props) => (
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
    <BarChart
      h={h}
      w={w}
      data={data}
      dataKey="month"
      series={[
        { name: 'issued', color: '#76A9F9', label: 'Issued' },
        { name: 'unissued', color: '#FE7D78', label: 'Unissued' },
      ]}
        barProps={{ radius: 8, ...barProps }}
      withTooltip
      {...(barChartProps ? { barChartProps } : {})}
    />
  </Card>
);

export default IssuedVsUnissuedBarChart;