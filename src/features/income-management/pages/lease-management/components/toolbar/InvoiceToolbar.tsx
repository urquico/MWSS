
import React from 'react';
import { Group, Button, Menu} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useModalStore } from '@/features/income-management/stores/useModalStore';

/**
 * `DBTOOLBAR` component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the `renderRowActionMenuItems` function.
 * - Supplying the text label for the row actions button through the `actionBtnText` property.
 */

interface InvoiceToolbarProps {
  onCreate: () => void;
}

{/* Top toolbar with a Create button */}
export const InvoiceToolbar: React.FC<InvoiceToolbarProps> = ({
  onCreate,
}) => {
  return (
    <>
      <Group justify="sm" mb="md">
        <Button onClick={onCreate} color='#1E40AF' variant="filled" leftSection={<IconPlus size={14} />} >
          Create
        </Button>
      </Group>
    </>
  );
};
export function getInvoiceRowActions(viewType: string) {
  const openModal = useModalStore.getState().openModal;

  return (row: any) => (
    <>
      <Menu.Item
        onClick={() => {
          console.log('ViewType passed to menu item:', viewType);
          openModal('generate', row, viewType);
        }}
      >
        View Invoice
      </Menu.Item>
      <Menu.Item onClick={() => {
        console.log('ViewType passed to menu item:', viewType);
        openModal('addRemarks', row, viewType);
      }}>
        Add Remarks
      </Menu.Item>
    </>
  );
}
