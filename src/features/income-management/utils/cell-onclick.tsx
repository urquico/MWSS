/**
 * @file cell-onclick.tsx
 * @description
 * Central location for all custom table cell renderers with onClick logic
 * for the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Import the desired cell renderer and assign it to the `cell` property in your column config.
 * - Example:
 *   { accessorKey: 'nameOfLessee', header: 'Name of Lessee', cell: renderLesseeNameCell }
 *
 * @example
 * // In your column config:
 * import { renderLesseeNameCell } from '@/features/income-management/utils/cell-onclick';
 * ...
 * { accessorKey: 'nameOfLessee', header: 'Name of Lessee', cell: renderLesseeNameCell }
 *
 * @see
 * Add new cell renderers here for any clickable or interactive table cell.
 */

import { Text } from '@mantine/core';
import { useModalStore } from '../stores/useModalStore';
import { CellContext } from '@tanstack/react-table';

// Example: Clickable "Name of Lessee" cell that opens the generate modal
export const renderLesseeNameCell = ({ row }: CellContext<any, unknown>) => {
  const lesseeData = row.original;

  return (
    <Text
      c="blue.7"
      fw={500}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
      onClick={() =>
        useModalStore.getState().openModal('generate', lesseeData, 'lessee-information')
      }
    >
      {lesseeData.nameOfLessee}
    </Text>
  );
};