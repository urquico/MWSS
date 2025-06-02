import React from 'react';
import {  Group, Menu, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

/**
 *  component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the renderRowActionMenuItems function.
 * - Supplying the text label for the row actions button through the actionBtnText property.
 */

interface BSToolbarProps {
  onCreate: () => void;
  onGenerateRow: (row: any) => void;
}

const BSToolbar: React.FC<BSToolbarProps> = ({
  onCreate,
  onGenerateRow,
}) => {
  // row action menu items
  const renderRowActionMenuItems = (row: any) => (
    <Menu.Item onClick={() => onGenerateRow(row)}>
      Generate
    </Menu.Item>
  );

  // text for the action button on each row
  const actionBtnText = 'GeneratSe';

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
export function getBSRowActions(onGenerateRow: (row: any) => void) {
  return (row: any) => (
    <Menu.Item onClick={() => onGenerateRow(row)}>Generate</Menu.Item>
  );
}

export const BSBtnText = 'Generate';

export default BSToolbar;