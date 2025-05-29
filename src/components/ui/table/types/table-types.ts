import { Button } from '@mantine/core';
import { ColumnDef, RowData, FilterFn, Row } from '@tanstack/react-table';

export type AdvancedTableProps<TData extends RowData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  enableGlobalFilter?: boolean;
  enableColumnFilters?: boolean;
  enableExport?: boolean;
  showFooter?: boolean;
  enableFuzzySearch?: boolean;
  showColumnSearch?: Record<string, boolean>;
  globalFilterColumns?: string[];
  exportFilename?: string;
  loadingText?: string;
  isLoading?: boolean;
  renderRowActionMenuItems?: (row: TData) => React.ReactNode;
  renderRowActionButton?: (row: TData) => React.ReactNode;
  menuTargetProps?: React.ComponentProps<typeof Button>;
  actionBtnText?: string; 
};