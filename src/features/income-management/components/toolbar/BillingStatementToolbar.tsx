
import React from 'react';
import {  Group, Menu, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

/**
 * `BillingStatementToolbar` component is responsible for:
 * 
 * - Rendering the top toolbar UI, including buttons such as "Create" and "Generate All".
 * - Providing the menu items for row-specific actions via the `renderRowActionMenuItems` function.
 * - Supplying the text label for the row actions button through the `actionBtnText` property.
 */

interface BillingStatementToolbarProps {
  onCreate: () => void;
  onGenerateRow: (row: any) => void;
}

const BillingStatementToolbar: React.FC<BillingStatementToolbarProps> = ({
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
  const actionBtnText = 'Generate';

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
export function getBillingStatementRowActions(onGenerateRow: (row: any) => void) {
  return (row: any) => (
    <Menu.Item onClick={() => onGenerateRow(row)}>Generate</Menu.Item>
  );
}

export const billingStatementActionBtnText = 'Generate';

export default BillingStatementToolbar;
