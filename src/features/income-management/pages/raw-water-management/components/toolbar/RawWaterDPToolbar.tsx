
import { Group, Button, Menu, Select } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useModalStore } from '@/features/income-management/stores/useModalStore';
import { useState } from 'react';
/**
 * `DBTOOLBAR` component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the `renderRowActionMenuItems` function.
 * - Supplying the text label for the row actions button through the `actionBtnText` property.
 */

interface RawWaterDPToolbarProps {
  onCreate: () => void;
}

{/* Top toolbar with a Create button */}
export const RawWaterDPToolbar: React.FC<RawWaterDPToolbarProps> = ({
  onCreate,
}) => {

   const [demandType, setDemandType] = useState<string | null>('1st demand to pay');
 
   return (
     <>
       {/* Top toolbar with a Create button */}
       <Group justify="sm" mb="md">
         {/* <Select
           data={[
             { value: '1st demand to pay', label: '1st demand to pay' },
             { value: '2nd demand to pay', label: '2nd demand to pay' },
             { value: '3rd demand to pay', label: '3rd demand to pay' },
           ]}
           value={demandType}
           onChange={setDemandType}
           placeholder="Demand to Pay"
           w={200}
         /> */}
         <Button onClick={onCreate} color='#1E40AF' variant="filled" leftSection={<IconPlus size={14} />} >
           Create
         </Button>
 
       </Group>
 
       {/* We export these handlers for DataView to use */}
       {/* But note this component returns only the toolbar UI, the rest will be props */}
     </>
   );
 };
 

export function getDPRowActions(viewType: string) {
  const openModal = useModalStore.getState().openModal;

  return (row: any) => (
    <>
      <Menu.Item
        onClick={() => {
          console.log('ViewType passed to menu item:', viewType);
          openModal('template', row, viewType);
        }}
      >
        View Demand to Pay
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
        Edit Demand to Pay
      </Menu.Item>
    </>
  );
}
