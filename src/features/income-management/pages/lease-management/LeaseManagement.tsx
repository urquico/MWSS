import React from 'react';
import { useDataView } from '../../hooks/useDataView';
import { ViewConfig } from '@/features/income-management/types/view-types.ts';
import { getColumnConfig } from '@/features/income-management/types/column-types.ts';
import { Box, LoadingOverlay, Paper, Text } from '@mantine/core';
import Table from '@/components/ui/table/components/Table';
import { SOAToolbar } from './components/SOAToolbar';
import { useModalStore } from '../../stores/useModalStore';
import { getRowActionsConfig } from './config/row-action-config';
import GenerateSOA from './components/GenerateSOA';
interface DataViewProps {
  config: ViewConfig;
}

/**
 * Renders a data view component with configurable columns, toolbars, and row actions
 * based on the provided configuration. Supports loading, error handling, and advanced
 * table features such as export, column filters, and fuzzy search.
 *
 * @param config - Configuration object specifying the view type, custom columns,
 *   and feature toggles for export and filters.
 */
function LeaseManagement({ config }: DataViewProps) {
  const { data, isLoading, error } = useDataView(config.viewType);
  const columns = getColumnConfig(config.viewType, config.customColumns);

  const handleCreate = () => {
    console.log('Creating a new billing statement...');
    // your create logic here
  };

  const handleGenerateRow = (row: any) => {
    console.log('Generating billing statement for row:', row);
    useModalStore.getState().openModal(row); // Open modal with row data
  };

  const toolbarMap: Record<string, React.ReactNode> = {
    'statement-of-account': (
      <SOAToolbar
        onCreate={handleCreate}
        onGenerateRow={handleGenerateRow}
      />
    ),
  };


  const topToolbarSlot = toolbarMap[config.viewType] || null;
  const rowActionsConfig = getRowActionsConfig(config.viewType, handleGenerateRow);


  if (error) {
    return <Text color="red">Error loading data: {error.message}</Text>;
  }

  return (
    <Paper radius={20} p="xl">
      <GenerateSOA />
      <LoadingOverlay visible={isLoading} />

      <Box className="flex justify-end mb-4">
        {topToolbarSlot}
      </Box>

      <Table
        data={data || []}
        columns={columns}
        features={{
          filtering: { fuzzy: true, global: true },
          export: { filename: `${config.viewType}-export` },
           rowActions: rowActionsConfig,
          sorting: true,
          pagination: true,
        }}
        loading={{
          isLoading,
          text: 'Loading data...',
        }}
      />
    </Paper>
  );
}

export default LeaseManagement;
