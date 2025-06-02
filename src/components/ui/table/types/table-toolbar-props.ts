import { TableFeatures } from './table-types';
export type ToolbarProps = {
  onGlobalFilterChange?: (value: string) => void;
  onExport?: () => void;
  onResetFilters?: () => void;
  globalFilter?: string;
  exportFilename?: string;
  features: TableFeatures;
  isColumnFilterActive?: boolean;
  onToggleColumnFilter?: () => void;
};

export type FilterToggleProps = {
  isActive: boolean;
  onToggle: () => void;
};