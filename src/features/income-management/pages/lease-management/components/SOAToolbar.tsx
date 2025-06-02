
import React from 'react';
import { Group, Button } from '@mantine/core';
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
const SOAToolbar: React.FC<SOAToolbarProps> = ({
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
function renderSOARowButton() {
  const openModal = useModalStore.getState().openModal;

  return {
    renderButton: (row: any) => (
      <Button
        variant="outline"
        color="gray"
        onClick={() => openModal(row)}
      >
        Generate
      </Button>
    ),
    renderMenu: undefined // Explicitly undefined instead of () => null
  };
}

export { SOAToolbar, renderSOARowButton };