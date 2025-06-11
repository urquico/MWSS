import React, { useEffect, useState } from 'react';
import { useDataView } from '../../hooks/useDataView';
import { useModalStore } from '../../stores/useModalStore';
import { Box, Paper, Text } from '@mantine/core';
import { ViewConfig } from '../../types/view-types.ts';
import { getColumnConfig } from '@/features/income-management/types/column-types';
import { getRowActionsConfig } from './config/row-action-config';
import { viewTypeModalMap } from '../../types/redirect-types';
import Table from '@/components/ui/table/components/Table';
import {
  SOAToolbar,
  DPToolbar,
  PHToolbar,
  BSToolbar,
  InvoiceToolbar,
  LesseeInformationToolbar,
  JEVToolbar
} from './components/toolbar/index';
import CreateModal from './components/create-modal-components/CreateModal';
import Edit from './components/edit-modal-components/Edit';
import AddRemarks from './components/add-remarks-modal-components/AddRemarks';
import GenerateModal from './components/generate-modal-components/GenerateModal';
import GenerateTemplate from './components/template-modal-components/GenerateTemplate';
import ViewHistory from './components/view-history/ViewHistory';



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
  
  const [filteredData, setFilteredData] = useState(data || []);
  useEffect(() => {
    if (config.viewType === 'payment-history' && data) {
      setFilteredData(data);
    }
  }, [config.viewType, data]);

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
  const handleAddRemarks = async (values: any) => {
    try {
      console.log('Adding remarks:', values);
      useModalStore.getState().closeModal();
    } catch (error) {
      console.error('Error adding remarks:', error);
    }
  };

  const handleEdit = async (values: any) => {
    try {
      console.log('Update succesfull:', values);
      useModalStore.getState().closeModal();
    } catch (error) {
      console.error('Error updateing:', error);
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
    'demand-to-pay': (<DPToolbar onCreate={handleCreate} />
    ),
    'payment-history': (
      <PHToolbar
        originalData={data || []}
        onFilteredData={(filtered) => setFilteredData(filtered)}
      />
    ),
    'invoice-tracking': (<InvoiceToolbar onCreate={handleCreate} />),
    'lessee-information': (<LesseeInformationToolbar />),
    'journal-entry': (<JEVToolbar  onGenerateRow={handleGenerateRow} viewType={config.viewType}/>),

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
        <GenerateModal data={modalData} onClose={closeModal} viewType={config.viewType} />
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
          data={modalData}
          onClose={closeModal}
        />
      )}
      {isOpen && type === 'addRemarks' && (
        <AddRemarks
          viewType={config.viewType}
          onSubmit={handleAddRemarks}
          onClose={closeModal}
        />
      )}
      {isOpen && type === 'edit' && (
        <Edit
          viewType={config.viewType}
          onSubmit={handleEdit}
          onClose={closeModal}
        />
      )}


      <Box className={`flex mb-4 ${config.viewType !== 'lessee-information' ? 'justify-end' : ''}`}>
        {topToolbarSlot}
      </Box>



      <Table
        data={config.viewType === 'payment-history' ? filteredData : data || []}
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
