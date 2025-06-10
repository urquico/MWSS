import { Text } from '@mantine/core';
import { useModalStore } from '../stores/useModalStore';
import { CellContext } from '@tanstack/react-table';

// Assuming 'any' for now. Replace 'any' with your actual row type if known.
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
