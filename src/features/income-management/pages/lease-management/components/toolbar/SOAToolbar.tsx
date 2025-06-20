
import React from 'react';
import { Group, Button, Menu } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useModalStore } from '@/features/income-management/stores/useModalStore';
/**
 * `soaToolbar` component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the `renderRowActionMenuItems` function.
 * - Supplying the text label for the row actions button through the `actionBtnText` property.
 */

interface SOAToolbarProps {
  onCreate: () => void;
  onGenerateRow: (row: any) => void;
}

{/* Top toolbar with a Create button */ }
export const SOAToolbar: React.FC<SOAToolbarProps> = ({
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


export function getSOARowActions(viewType: string) {

  const openModal = useModalStore.getState().openModal;

  return (row: any) => (
    <>
      <Menu.Item
        onClick={() => {
          console.log('ViewType passed to menu item:', viewType);
          openModal('generate', row, viewType);
        }}
      >
        View SOA
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
      <Menu.Item
        onClick={() => {
          const billingData = {
            date: row.date,
            name: row.companyName || row.name,
            controlNo: row.controlNumber || row.controlNo,
            address: row.address,
            subject: row.subject,
            attention: row.attention,
            reviewer1: row.reviewer1,
            reviewer2: row.reviewer2,
            reviewer3: row.reviewer3,
            reviewer4: row.reviewer4,
            approver1: row.approver1,
            approver2: row.approver2,
          };
          openModal('create', billingData, 'billing-statement');
        }}
      >
        Generate Billing Statement
      </Menu.Item>
    </>
  );
}
