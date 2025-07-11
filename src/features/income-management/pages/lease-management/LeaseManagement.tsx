import FormAction from '@/components/ui/FormAction.tsx';
import Table from '@/components/ui/table/components/Table';
import { getColumnConfig } from '@/features/income-management/types/column-types';
import { Box, Paper, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { useDataView } from '../../hooks/useDataView';
import { useFormActionStore } from '../../stores/useFormActionStore.ts';
import { useModalStore } from '../../stores/useModalStore';
import { ModalType } from '../../types/modal-types.ts';
import { viewTypeModalMap } from '../../types/redirect-types';
import { ViewConfig } from '../../types/view-types.ts';
import AddRemarks from './components/add-remarks-modal-components/AddRemarks';
import CreateModal from './components/create-modal-components/CreateModal';
import Edit from './components/edit-modal-components/Edit';
import GenerateModal from './components/generate-modal-components/GenerateModal';
import GenerateTemplate from './components/template-modal-components/GenerateTemplate';
import {
  BSToolbar,
  DPToolbar,
  InvoiceToolbar,
  JEVToolbar,
  LesseeInformationToolbar,
  PHToolbar,
  SOAToolbar,
} from './components/toolbar/index';
import ViewHistory from './components/view-history/ViewHistory';
import { getRowActionsConfig } from './config/row-action-config';

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
  const {
    isOpen,
    type,
    data: modalData,
    closeModal,
    pendingModal,
    setPendingModal,
    openModal,
    viewType,
  } = useModalStore();

  const {
    open: faOpen,
    type: faType,
    text: faText,
    confirmText: faConfirmText,
    cancelText: faCancelText,
    onConfirm: faOnConfirm,
    close: faClose,
  } = useFormActionStore();
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

  const handleCreateSubmit = async (values: any, nextModalType?: ModalType) => {
    const modalType = nextModalType || viewTypeModalMap[config.viewType];
    useFormActionStore.getState().show({
      type: 'confirmation',
      text: 'Are you sure you want to save this record?',
      confirmText: 'Yes',
      cancelText: 'No',
      onConfirm: async () => {
        try {
          const newData = { ...values, id: Date.now() };
          setPendingModal({
            type: modalType,
            data: newData,
            viewType: config.viewType,
          });
          useModalStore.getState().closeModal();
          useFormActionStore.getState().show({
            type: 'success',
            text: 'Record saved successfully!',
            confirmText: 'Close',
          });
        } catch (error) {
          useFormActionStore.getState().show({
            type: 'error',
            text: 'Error saving record.',
            confirmText: 'Close',
          });
        }
      },
    });
  };
  const handleAddRemarks = async (values: any) => {
    useFormActionStore.getState().show({
      type: 'confirmation',
      text: 'Are you sure you want to add these remarks?',
      confirmText: 'Yes',
      cancelText: 'No',
      onConfirm: async () => {
        try {
          // ...your update logic here...
          useModalStore.getState().closeModal();
          useFormActionStore.getState().show({
            type: 'success',
            text: 'Remarks added successfully!',
            confirmText: 'Close',
          });
        } catch (error) {
          useFormActionStore.getState().show({
            type: 'error',
            text: 'Error adding remarks.',
            confirmText: 'Close',
          });
        }
      },
    });
  };

  // EDIT handler with global confirmation and message
  const handleEdit = async (values: any) => {
    useFormActionStore.getState().show({
      type: 'confirmation',
      text: 'Are you sure you want to update this record?',
      confirmText: 'Yes',
      cancelText: 'No',
      onConfirm: async () => {
        try {
          // ...your update logic here...
          useModalStore.getState().closeModal();
          useFormActionStore.getState().show({
            type: 'success',
            text: 'Record updated successfully!',
            confirmText: 'Close',
          });
        } catch (error) {
          useFormActionStore.getState().show({
            type: 'error',
            text: 'Error updating record.',
            confirmText: 'Close',
          });
        }
      },
    });
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
    'demand-to-pay': <DPToolbar onCreate={handleCreate} />,
    'payment-history': (
      <PHToolbar
        originalData={data || []}
        onFilteredData={(filtered) => setFilteredData(filtered)}
      />
    ),
    'invoice-tracking': <InvoiceToolbar onCreate={handleCreate} />,
    'lessee-information': <LesseeInformationToolbar />,
    'journal-entry': (
      <JEVToolbar
        onGenerateRow={handleGenerateRow}
        viewType={config.viewType}
      />
    ),
  };

  const topToolbarSlot = toolbarMap[config.viewType] || null;
  const rowActionsConfig = getRowActionsConfig(
    config.viewType,
    handleGenerateRow,
  );

  if (error) {
    return <Text color='red'>Error loading data: {error.message}</Text>;
  }

  return (
    <>
      {' '}
      {faType && (
        // In LeaseManagement component
        <FormAction
          open={faOpen}
          type={faType}
          text={faText || ''}
          confirmText={faConfirmText}
          cancelText={faCancelText}
          onConfirm={faOnConfirm}
          onClose={() => {
            faClose();
            // Open the pending modal if set
            if (pendingModal) {
              openModal(
                pendingModal.type,
                pendingModal.data,
                pendingModal.viewType,
              );
              setPendingModal(null);
            }
          }}
        />
      )}
      <Paper radius={20} p='xl'>
        {/* Conditionally render modals */}
        {isOpen && type === 'generate' && (
          <GenerateModal
            data={modalData}
            onClose={closeModal}
            viewType={viewType}
          />
        )}
        {isOpen && type === 'template' && (
          <GenerateTemplate
            data={modalData}
            onClose={closeModal}
            viewType={viewType}
          />
        )}
        {isOpen && type === 'viewHistory' && (
          <ViewHistory
            data={modalData}
            onClose={closeModal}
            viewType={viewType}
          />
        )}
        {isOpen && type === 'create' && (
          <CreateModal
            viewType={viewType}
            onSubmit={handleCreateSubmit}
            data={modalData}
            onClose={closeModal}
          />
        )}
        {isOpen && type === 'addRemarks' && (
          <AddRemarks
            viewType={viewType}
            onSubmit={handleAddRemarks}
            onClose={closeModal}
          />
        )}
        {isOpen && type === 'edit' && (
          <Edit
            viewType={viewType}
            onSubmit={handleEdit}
            onClose={closeModal}
          />
        )}

        <Box
          className={`mb-4 flex ${config.viewType !== 'lessee-information' ? 'justify-end' : ''}`}
        >
          {topToolbarSlot}
        </Box>
        <Table
          data={data?.data || []}
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
    </>
  );
}

export default LeaseManagement;
