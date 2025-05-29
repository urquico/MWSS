import { ActionIcon } from '@mantine/core';
import { IconFilter, IconFilterOff } from '@tabler/icons-react';

interface IconFilterProps {
  isActive: boolean;
  onToggle: () => void;
  size?: number;
  color?: string;
}

export function FilterToggleIcon({ isActive, onToggle, size = 24, color = '#1E40AF'}: IconFilterProps) {
  return (
    <ActionIcon
      variant="subtle"
      color={color}
      onClick={onToggle}
      aria-label={isActive ? 'Disable filter' : 'Enable filter'}
    >
      {isActive ? <IconFilter size={size} /> : <IconFilterOff size={size} />}
    </ActionIcon>
  );
}