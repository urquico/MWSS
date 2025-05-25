import { Paper, Text } from '@mantine/core';

interface BarChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
}

export function BarChartTooltip({ label, payload }: BarChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px='md' py='sm' withBorder shadow='md' radius='md'>
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz='sm'>
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}
