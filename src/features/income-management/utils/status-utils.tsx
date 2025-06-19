import { IconCheck, IconX, IconAlertCircle, IconCircleCheck, IconCircleFilled } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { Badge } from '@mantine/core';

/**
 * @file status-utils.tsx
 * @description
 * Central utility for status badge rendering and status config mapping in the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Import and use `renderStatusCell(status)` in your table column configs to render a status badge.
 * - Use `getStatusConfig(status)` if you need the icon/color/label for custom UI.
 *
 * @example
 * import { renderStatusCell } from '@/features/income-management/utils/status-utils';
 * ...
 * { accessorKey: 'status', header: 'Status', cell: ({ row }) => renderStatusCell(row.original.status) }
 *
 * @see
 * - Add or update status types in `statusConfigMap` for new or custom statuses.
 * - Handles fuzzy status matching for "for review", "returned", and "settled" prefixes.
 */

export type StatusType = 
  | 'active' | 'inactive' | 'for review'| 'returned' | 'pending' 
  | 'warning' | 'completed' | 'failed' 
  | 'paid' | 'unpaid' | 'overdue' 
  | 'approved' | 'rejected' | 'settled' | 'expired'| string;

export interface StatusConfig {
  icon: ReactNode;
  color: string;
  label: string;
}

export const statusConfigMap: Record<StatusType, StatusConfig> = {
  approved: {
    icon: <IconCircleFilled size={16} />,
    color: 'green',
    label: 'Approved'
  },
  'for review': {
    icon: <IconCircleFilled size={16} />,
    color: 'blue',
    label: 'For Review'
  },
  returned: {
    icon: <IconCircleFilled size={16} />,
    color: 'orange',
    label: 'Returned'
  },
  warning: {
    icon: <IconAlertCircle size={16} />,
    color: 'orange',
    label: 'Warning'
  },
  completed: {
    icon: <IconCheck size={16} />,
    color: 'teal',
    label: 'Completed'
  },
  failed: {
    icon: <IconX size={16} />,
    color: 'red',
    label: 'Failed'
  },
  paid: {
    icon: <IconCheck size={16} />,
    color: 'green',
    label: 'Paid'
  },
  unpaid: {
    icon: <IconX size={16} />,
    color: 'red',
    label: 'Unpaid'
  },
  overdue: {
    icon: <IconAlertCircle size={16} />,
    color: 'orange',
    label: 'Overdue'
  },

  rejected: {
    icon: <IconX size={16} />,
    color: 'red',
    label: 'Rejected'
  },
  // Add to statusConfigMap
settled: {
  icon: <IconCircleCheck size={16} />,
  color: 'green',
  label: 'Settled'
},
active: {
  icon: <IconCircleCheck size={16} />,
  color: 'green',
  label: 'Active'
},

  expired: {
    icon: <IconX size={16} />,
    color: 'red',
    label: 'Expired'
  },
  // Default fallback
  default: {
    icon: <IconAlertCircle size={16} />,
    color: 'gray',
    label: 'Unknown'
  }
};

export const getStatusConfig = (status?: string): StatusConfig => {
  if (!status) return statusConfigMap.default;
  const normalizedStatus = status.toLowerCase().trim();

  if (normalizedStatus.startsWith('for review')) {
    return statusConfigMap['for review'];
  }
  if (normalizedStatus.startsWith('returned')) {
    return statusConfigMap['returned'];
  }
  if (normalizedStatus.startsWith('settled')) {
    return statusConfigMap['settled'];
  }

  return statusConfigMap[normalizedStatus as StatusType] || statusConfigMap.default;
};

export const renderStatusCell = (status?: string) => {
  const { icon, color, label } = getStatusConfig(status);
  let displayLabel = label;

  // If status starts with "for review", show the original status (preserve [1/4], etc.)
  if (status && status.toLowerCase().trim().startsWith('for review')) {
    displayLabel = status;
  }
  // If status starts with "returned", show the original status (optional, for consistency)
  if (status && status.toLowerCase().trim().startsWith('returned')) {
    displayLabel = status;
  }

  return (
    <Badge 
      leftSection={icon} 
      color={color}
      variant="transparent"
      size="sm"
    >
      {displayLabel}
    </Badge>
  );
};