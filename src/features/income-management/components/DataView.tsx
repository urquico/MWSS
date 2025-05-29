
import React from 'react';
import { useDataView } from '../hooks/useDataView';
import { ViewConfig } from '@/features/income-management/types/view-types.ts';
import { getColumnConfig } from '@/features/income-management/types/column-types.ts';
import { Box, LoadingOverlay, Paper, Text } from '@mantine/core';
import AdvancedTable from '@/components/ui/table/AdvancedTable';

import BillingStatementToolbar, {
  getBillingStatementRowActions,
  billingStatementActionBtnText,
} from './toolbar/BillingStatementToolbar';

interface DataViewProps {
  config: ViewConfig;
}

function DataView({ config }: DataViewProps) {
  const { data, isLoading, error } = useDataView(config.viewType);
  const columns = getColumnConfig(config.viewType, config.customColumns);

  // Handlers for billing statement logic
  const handleCreate = () => {
    console.log('Creating a new billing statement...');
    // your create logic here
  };

  const handleGenerateRow = (row: any) => {
    console.log('Generating billing statement for row:', row);
    // your generate logic here
  };

  // Use toolbar map
  const toolbarMap: Record<string, React.ReactNode> = {
    'billing-statement': (
      <BillingStatementToolbar
        onCreate={handleCreate}
        onGenerateRow={handleGenerateRow}
      />
    ),
  };

  // For rows' action menus and button text based on view type
  const renderRowActionMenuItems =
    config.viewType === 'billing-statement'
      ? getBillingStatementRowActions(handleGenerateRow)
      : () => null;

  const actionBtnText =
    config.viewType === 'billing-statement' ? billingStatementActionBtnText : 'Options';

  const topToolbarSlot = toolbarMap[config.viewType] || null;

  if (error) {
    return <Text color="red">Error loading data: {error.message}</Text>;
  }

  return (
    <Paper radius={20}  p="xl">
      <LoadingOverlay visible={isLoading} />
      <Box className='flex justify-end '>
        {topToolbarSlot}

      </Box>
      
      <AdvancedTable
        data={data || []}
        columns={columns}
        enableExport={config.enableExport}
        enableColumnFilters={config.enableFilters}
        exportFilename={`${config.viewType}-export`}
        renderRowActionMenuItems={renderRowActionMenuItems}
        actionBtnText={actionBtnText}
        enableFuzzySearch={true}
      />
    </Paper>
  );
}

export default DataView;
