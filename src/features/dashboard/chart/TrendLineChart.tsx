import { useState } from 'react';
import { Card, Title, Text, Group, Select } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { TrendData, SeriesItem } from '../types/dashboard-types';

interface TrendLineChartProps {
  title?: string;
  periodOptions?: string[];
  data?: TrendData[];
  height?: number;
  series: SeriesItem[];
  onPeriodChange?: (period: string) => void; // Optional callback
}

function TrendLineChart({
  title = 'Total Actual vs Projected trend',
  periodOptions = ['Last 3 Months', 'Last 6 Months', 'Last 12 Months'],
  data,
  height = 300,
  series,
  onPeriodChange,
}: TrendLineChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState(periodOptions[0]);

  const handlePeriodChange = (value: string | null) => {
    if (!value) return;
    setSelectedPeriod(value);
    onPeriodChange?.(value); // Call parent handler if passed
  };

const getFilteredData = () => {
  if (!data) return [];

  let monthsToShow = 3;
  if (selectedPeriod === 'Last 6 Months') monthsToShow = 6;
  if (selectedPeriod === 'Last 12 Months') monthsToShow = 12;

  return data.slice(-monthsToShow).map((item) => ({
    month: item.month,
    Projected: item.projected,
    Actual: item.actual,
  }));
};

const chartData = getFilteredData();

 const filteredRawData = data?.slice(-(
  selectedPeriod === 'Last 12 Months' ? 12 :
  selectedPeriod === 'Last 6 Months' ? 6 : 3
)) ?? [];

const totalProjected = filteredRawData.reduce((sum, item) => sum + item.projected, 0);
const totalActual = filteredRawData.reduce((sum, item) => sum + item.actual, 0);

  return (
    <Card withBorder radius="md">
      <Group justify="space-between" mb="xs">
        <Title order={3}>{title}</Title>
        <Select
          data={periodOptions}
          value={selectedPeriod}
          onChange={handlePeriodChange}
          size="xs"
          w={160}
        />
      </Group>

      <LineChart
        h={height}
        data={chartData}
        dataKey="month"
        withLegend
        series={series}
        curveType="natural"
        tickLine="y"
        withYAxis={false}
        yAxisProps={{ domain: [0, 'auto'] }}
        xAxisProps={{
          tickMargin: 10,
          padding: { left: 10, right: 10 },
        }}
        valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
        legendProps={{
          verticalAlign: 'bottom',
          layout: 'horizontal',
          wrapperStyle: { display: 'flex', justifyContent: 'center' },
          height: 50,
        }}
      />

      <Group justify="center" mt="md">
        {series.map((item) => (
          <div key={item.name}>
            <Text size="sm" c={item.color} fw={500}>
              {item.label}:{' '}
              {new Intl.NumberFormat('en-US').format(
                item.name === 'Projected' ? totalProjected : totalActual
              )}
            </Text>
          </div>
        ))}
      </Group>
    </Card>
  );
}

export default TrendLineChart;
