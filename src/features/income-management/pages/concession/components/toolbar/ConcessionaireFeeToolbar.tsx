import React from 'react';
import { Group, Menu, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useModalStore } from '@/features/income-management/stores/useModalStore';

/**
 *  component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the renderRowActionMenuItems function.
 * - Supplying the text label for the row actions button through the actionBtnText property.
 */

interface ConcessionaireFeeToolbarProps {
  onCreate: () => void;
  onGenerateRow: (row: any) => void;
}

export const ConcessionaireFeeToolbar: React.FC<ConcessionaireFeeToolbarProps> = ({
  onCreate,
}) => {


  return (
    <>
      {/* Top toolbar with a Create button */}
      <Group justify="sm" mb="md">
        <Button onClick={onCreate} color='#1E40AF' variant="filled" leftSection={<IconPlus size={14} />} >
          Create
        </Button>
      </Group>

      {/* We export these handlers for DataView to use */}
      {/* But note this component returns only the toolbar UI, the rest will be props */}
    </>
  );
};

// To export helpers outside the component (optional)
export function getBSRowActions(viewType: string) {
  const openModal = useModalStore.getState().openModal;

  return (row: any) => (
    <>
      <Menu.Item
        onClick={() => {
          console.log('ViewType passed to menu item:', viewType);
          openModal('template', row, viewType);
        }}
      >
        View Billing
      </Menu.Item>
      <Menu.Item onClick={() => {
        console.log('ViewType passed to menu item:', viewType);
        openModal('viewHistory', row, viewType);
      }}>
        View Billing History
      </Menu.Item>
      <Menu.Item onClick={() => {
        console.log('ViewType passed to menu item:', viewType);
        openModal('addRemarks', row, viewType);
      }}>
        Add Remarks
      </Menu.Item>
      <Menu.Item onClick={() => {
        console.log('ViewType passed to menu item:', viewType);
        openModal('edit', row, viewType);
      }}>
        Edit SOA
      </Menu.Item>
    </>
  );
}



