import React, { useState } from 'react';
import { useDataView } from '../../hooks/useDataView';
import { ViewConfig } from '@/features/income-management/types/view-types.ts';
import { getColumnConfig } from '@/features/income-management/types/column-types.ts';
import { Box, LoadingOverlay, Paper, Text } from '@mantine/core';
import Table from '@/components/ui/table/components/Table';
import { SOAToolbar } from './components/toolbar/SOAToolbar';
import { useModalStore } from '../../stores/useModalStore';
import { getRowActionsConfig } from './config/row-action-config';
import GenerateModal from './components/generate-modal-components/GenerateModal';
import BSToolbar from './components/toolbar/BSToolbar';
import CreateModal from './components/create-modal-components/CreateModal';
import GenerateTemplate from './components/generate-modal-components/GenerateTemplate';
import  ViewHistory  from './components/view-history/ViewHistory';
import { viewTypeModalMap } from '../../types/redirect-types';
import { DPToolbar } from './components/toolbar/DPToolbar';
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
  const { isOpen, type, data: modalData, closeModal } = useModalStore();

  const columns = getColumnConfig(config.viewType, config.customColumns);

  const handleCreate = () => {
    useModalStore.getState().openModal('create', null, config.viewType);
  };

 const handleCreateSubmit = async (values: any) => {
    try {
      console.log('Saving to backend:', values);
      const newData = { ...values, id: Date.now() };
      
      const modalType = viewTypeModalMap[config.viewType];
      useModalStore.getState().openModal(modalType, newData, config.viewType);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  
  const handleGenerateRow = (row: any) => {
    console.log('Generating billing statement for row:', row);
    useModalStore.getState().openModal('generate', row, config.viewType);
  };

  const toolbarMap: Record<string, React.ReactNode> = {
    'statement-of-account': (
      <SOAToolbar onCreate={handleCreate} onGenerateRow={handleGenerateRow} />
    ),
    'billing-statement': (
      <BSToolbar onCreate={handleCreate} onGenerateRow={handleGenerateRow} />
    ),
    'demand-to-pay':(<DPToolbar onCreate={handleCreate} />),
  };

  const topToolbarSlot = toolbarMap[config.viewType] || null;
  const rowActionsConfig = getRowActionsConfig(config.viewType, handleGenerateRow);

  if (error) {
    return <Text color="red">Error loading data: {error.message}</Text>;
  }

  return (
    <Paper radius={20} p="xl">
      
      {/* Conditionally render modals */}
      {isOpen && type === 'generate' && (
        <GenerateModal data={modalData} onClose={closeModal} config={config} />
      )}
      {isOpen && type === 'template' && (
        <GenerateTemplate data={modalData} onClose={closeModal} viewType={config.viewType} />
      )}
      {isOpen && type === 'viewHistory' && (
        <ViewHistory data={modalData} onClose={closeModal} viewType={config.viewType} />
      )}
      {isOpen && type === 'create' && (
        <CreateModal
          viewType={config.viewType}
          onSubmit={handleCreateSubmit}
          onClose={closeModal}
        />
      )}
      
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
