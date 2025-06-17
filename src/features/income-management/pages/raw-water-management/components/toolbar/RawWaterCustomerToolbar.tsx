import DashboardSummary from '@/features/dashboard/chart/DashboardSummary';
import { QuadrantClassificationCard } from '@/features/dashboard/chart/QuadrantClassification';
import { Box, Flex } from '@mantine/core';
import { dashboardSummaryItems, quadrantData } from '../../config/view-history-config';
/**
 * InvoiceToolbar
 *
 * Displays a summary dashboard at the top of the invoice page using reusable DashboardSummary.
 * This includes statistics like Total Lessees, Active Contracts, Expiring Soon, etc.
 */

export const RawWaterCustomerToolbar = () => {

  return (
    <Box p="md" >
      <Flex gap="lg" align="flex-start" justify="space-between">
        <Box w="60%">

          <DashboardSummary
            items={dashboardSummaryItems}
            showHeader={false}
            cardHeight="12rem"
          />

        </Box>
        <Box w="40%">
          <QuadrantClassificationCard data={quadrantData} />
        </Box>
      </Flex>
    </Box>
  );
};



