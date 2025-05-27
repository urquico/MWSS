import { Card, Title, Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';
interface TrendData {
  month: string;
  projected: number;
  actual: number;
}

interface TrendLineChartProps {
  title?: string;
  period?: string;
  data?: TrendData[];
  height?: number;
}

function TrendLineChart({
  title = 'Total Actual vs Projected trend',
  period = 'Last 7 Months',
  data,
  height = 300,
}: TrendLineChartProps) {

  // Transform data to match the expected format
const chartData = data?.map((item) => ({
  month: item.month,
  Projected: item.projected,
  Actual: item.actual,
})) ?? [];

  return (
    <Card withBorder radius="md" p="md">
      <Title order={3} mb="xs">
        {title}
      </Title>
      <Text size="sm" color="dimmed" mb="md">
        {period}
      </Text>

      <LineChart
        h={height}
        data={chartData}
        dataKey="month"
        withLegend
        legendProps={{ verticalAlign: 'top' }}
        series={[
          { name: 'Projected', color: 'blue.6', label: 'Projected' },
          { name: 'Actual', color: 'orange.6', label: 'Actual' },
        ]}
        curveType="linear"
        tickLine="y"
        withYAxis={false}
        yAxisProps={{ domain: [0, 'auto'] }}
        xAxisProps={{
          tickMargin: 10,
          padding: { left: 10, right: 10 },
        }}
        valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      />
    </Card>
  );
}

export default TrendLineChart;