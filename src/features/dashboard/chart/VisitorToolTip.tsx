import { getFilteredChartTooltipPayload } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';

interface ChartTooltipProps {
  label?: string;
  payload: Record<string, any>[] | undefined;
}

/**
 * @description - This component renders the tooltip content for the Visitor Chart.
 * It displays the label (if provided) and a list of data items from the payload.
 * @param {ChartTooltipProps} props - The props for the VisitorChartTooltip component.
 * @param {string} [props.label] - The label to be displayed at the top of the tooltip (e.g., the category or time period).
 * @param {Record<string, any>[]} [props.payload] - The data payload containing tooltip information.
 * This is usually passed automatically by the chart library.
 * @returns {JSX.Element | null} - A React element displaying the tooltip content or null if no payload is provided.
 */

export function VisitorChartTooltip({ payload, label }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper
      px='md'
      py='sm'
      withBorder
      shadow='md'
      radius='md'
      className='bg-white'
    >
      {label && (
        <Text mb={5} className='text-wrap text-center text-xs font-semibold'>
          {label}
        </Text>
      )}
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <Text key={item.name} c={item.color} fz='sm'>
          <span className='text-center text-black'> {item.value} visitors</span>
        </Text>
      ))}
    </Paper>
  );
}
