import { Paper,Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { ViewConfig } from '../../types/view-types.ts';
import { getColumnConfig } from '@/features/income-management/types/column-types';
import { getRowActionsConfig } from './config/row-action-config.ts';
import { useDataView } from '../../hooks/useDataView.tsx';
import { ConcessionaireFeeToolbar } from './components/toolbar';
import { useModalStore } from '../../stores/useModalStore.ts';
import { useFormActionStore } from '../../stores/useFormActionStore.ts';
import { ModalType } from '../../types/modal-types.ts';
import FormAction from '@/components/ui/FormAction.tsx';
import Table from '@/components/ui/table/components/Table'
import { viewTypeModalMap } from '../../types/redirect-types';
import GenerateModal from './components/generate-modal-components/GenerateModal.tsx';
import GenerateTemplate from './components/template-modal-components/GenerateTemplate.tsx';
import ViewHistory from './components/view-history/ViewHistory.tsx';
import CreateModal from './components/create-modal-components/CreateModal.tsx';
import Edit from './components/edit-modal-components/Edit.tsx';
import AddRemarks from './components/add-remarks-modal-components/AddRemarks.tsx';

interface DataViewProps {
  config: ViewConfig;
}

function ConcessionManagement({ config }: DataViewProps) {

   const { data, isLoading, error } = useDataView(config.viewType);
    const { isOpen, type, data: modalData, closeModal, pendingModal, setPendingModal, openModal } = useModalStore();
  
    const {
      open: faOpen,
      type: faType,
      text: faText,
      confirmText: faConfirmText,
      cancelText: faCancelText,
      onConfirm: faOnConfirm,
      close: faClose,
    } = useFormActionStore();
  
  const columns = getColumnConfig(config.viewType, config.customColumns);
  const [filteredData, setFilteredData] = useState(data || []);
  useEffect(() => {
    setFilteredData(data || []);
  }, [data]);

  
  const handleCreate = () => {
      useModalStore.getState().openModal('create', null, config.viewType);
    };
  
    const handleCreateSubmit = async (values: any, nextModalType?: ModalType) => {
      const modalType = nextModalType || viewTypeModalMap[config.viewType];
      useFormActionStore.getState().show({
        type: "confirmation",
        text: "Are you sure you want to save this record?",
        confirmText: "Yes",
        cancelText: "No",
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
              type: "success",
              text: "Record saved successfully!",
              confirmText: "Close"
            });
          } catch (error) {
            useFormActionStore.getState().show({
              type: "error",
              text: "Error saving record.",
              confirmText: "Close"
            });
          }
        }
      });
    };
  
    const handleAddRemarks = async (values: any) => {
      useFormActionStore.getState().show({
        type: "confirmation",
        text: "Are you sure you want to add these remarks?",
        confirmText: "Yes",
        cancelText: "No",
        onConfirm: async () => {
          try {
            // ...your update logic here...
            useModalStore.getState().closeModal();
            useFormActionStore.getState().show({
              type: "success",
              text: "Remarks added successfully!",
              confirmText: "Close"
            });
          } catch (error) {
            useFormActionStore.getState().show({
              type: "error",
              text: "Error adding remarks.",
              confirmText: "Close"
            });
          }
        }
      });
    };
  
    // EDIT handler with global confirmation and message
    const handleEdit = async (values: any) => {
      useFormActionStore.getState().show({
        type: "confirmation",
        text: "Are you sure you want to update this record?",
        confirmText: "Yes",
        cancelText: "No",
        onConfirm: async () => {
          try {
            // ...your update logic here...
            useModalStore.getState().closeModal();
            useFormActionStore.getState().show({
              type: "success",
              text: "Record updated successfully!",
              confirmText: "Close"
            });
          } catch (error) {
            useFormActionStore.getState().show({
              type: "error",
              text: "Error updating record.",
              confirmText: "Close"
            });
          }
        }
      });
    };
  
    const handleGenerateRow = (row: any) => {
      useModalStore.getState().openModal('generate', row, config.viewType);
    };
  

  const toolbarMap: Record<string, React.ReactNode> = {
      'concession-fee': (
        <ConcessionaireFeeToolbar onCreate={handleCreate} onGenerateRow={handleGenerateRow} />
      ),

    };
  
    const topToolbarSlot = toolbarMap[config.viewType] || null;
    const rowActionsConfig = getRowActionsConfig(config.viewType, handleGenerateRow);



  if (error) {
    return (
      <Paper radius={20} p="xl">
        <div>Error loading data: {error.message}</div>
      </Paper>
    );
  }


  
  return (
    <> {faType && (
            <FormAction
              open={faOpen}
              type={faType}
              text={faText || ""}
              confirmText={faConfirmText}
              cancelText={faCancelText}
              onConfirm={faOnConfirm}
              onClose={() => {
                faClose();
                if (pendingModal) {
                  openModal(pendingModal.type, pendingModal.data, pendingModal.viewType);
                  setPendingModal(null);
                }
              }}
            />
          )}
      <Paper radius={20} p="xl">

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
      
      <Box className={`flex mb-4 justify-end`}>
        {topToolbarSlot}
        </Box>
      <Table
        data={config.viewType === 'concession-fee' ? filteredData : data || []}
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

export default ConcessionManagement;