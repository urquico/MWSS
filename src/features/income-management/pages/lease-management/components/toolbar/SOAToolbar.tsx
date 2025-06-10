
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

{/* Top toolbar with a Create button */}
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


{/*Export this function to render the button per row */}
// function renderSOARowButton(viewType: string) {
//   const openModal = useModalStore.getState().openModal;

//   return {
//     renderButton: (row: any) => (
//       <Button
//         variant="outline"
//         color="gray"
//         onClick={() => openModal('generate', row, viewType)}
//       >
//         View
//       </Button>
//     ),
//     renderMenu: undefined
//   };
// }

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
    </>
  );
}
