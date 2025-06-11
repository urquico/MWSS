import React from 'react';
import { Group, Button, Menu } from '@mantine/core';
import { IconChevronDown, IconFileText, IconPlus, IconReceipt } from '@tabler/icons-react';
import { useModalStore } from '@/features/income-management/stores/useModalStore';
/**
 * `JEVToolbar` component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the `renderRowActionMenuItems` function.
 * - Supplying the text label for the row actions button through the `actionBtnText` property.
 */

interface JEVToolbarProps {
//   onCreate: () => void;
  onGenerateRow: (row: any) => void;
  viewType: string; 

}

{/* Top toolbar with a Create button */}
export const JEVToolbar: React.FC<JEVToolbarProps> = ({ viewType }) => {
  const openModal = useModalStore.getState().openModal;

  return (
    <Group justify="sm" mb="md">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            color="#1E40AF"
            variant="filled"
            leftSection={<IconPlus size={14} />}
            rightSection={<IconChevronDown size={16} />}
          >
            Create
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            onClick={() => {
              openModal('create', { jevType: 'general' }, 'journal-entry');
            }}
          >
            General JEV
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              openModal('create', { jevType: 'subsidiary' }, 'journal-entry');
            }}
          >
            Subsidiary JEV
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};


export function getJEVRowActions(viewType: string) {
 
  const openModal = useModalStore.getState().openModal;

  return (row: any) => (
    <>
      <Menu.Item
        onClick={() => {
          console.log('ViewType passed to menu item:', viewType);
          openModal('generate', row, viewType);
        }}
      >
        View JEV
      </Menu.Item>
       <Menu.Item onClick={() => {
        console.log('ViewType passed to menu item:', viewType);
        openModal('edit', row, viewType);
      }}>
        Edit JEV
      </Menu.Item>
    </>
  );
}
