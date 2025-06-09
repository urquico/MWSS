import DashboardSummary from '@/features/dashboard/components/DashboardSummary';
import { QuadrantClassificationCard } from '@/features/dashboard/chart/QuadrantClassification';
import { Box, Flex } from '@mantine/core';

/**
 * InvoiceToolbar
 *
 * Displays a summary dashboard at the top of the invoice page using reusable DashboardSummary.
 * This includes statistics like Total Lessees, Active Contracts, Expiring Soon, etc.
 */

const LesseeInformationToolbar = () => {
  const quadrantData = [
    { label: 'Quadrant 1', value: 10, color: '#e5b4f2' },
    { label: 'Quadrant 2', value: 2, color: '#b5ccfa' },
    { label: 'Quadrant 3', value: 6, color: '#a4e4f5' },
    { label: 'Quadrant 4', value: 7, color: '#ffcb94' },
  ];

  const dashboardSummaryItems = [
    {
      label: 'RIGHT OF WAY',
      value: 25,
      color: '#E3F2FD',
      textColor: '#0D47A1',
       showHalfCircle: true,
    },
    {
      label: 'LESSEE SPACE',
      value: 87,
      color: '#E8F5E9',
      textColor: '#1B5E20',
       showHalfCircle: true,
    },
    {
      label: 'LESSEE PARKING',
      value: 15,
      color: '#FFF3E0',
      textColor: '#E65100',
       showHalfCircle: true,
    },
    {
      label: 'LESSEE BUILDING',
      value: 10,
      color: '#FCE4EC',
      textColor: '#880E4F',
       showHalfCircle: true,
    },
    {
      label: 'TOTAL TENANT',
      value: '435',
      color: '#EDE7F6',
      textColor: '#4A148C',
       showHalfCircle: true,
    }
  ];

  return (
    <Box p="md" >
      <Flex gap="lg" align="flex-start" justify="space-between">
        <Box w="60%">

          <DashboardSummary
            items={dashboardSummaryItems}
            showHeader={false}
            cardHeight="180px"
          />

        </Box>
        <Box w="40%">
          <QuadrantClassificationCard data={quadrantData} />
        </Box>
      </Flex>
    </Box>
  );
};

export { LesseeInformationToolbar };
