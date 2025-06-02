import { ColumnDef } from '@tanstack/react-table';
import { TableFeatures, TableLoadingState } from './table-types';

export type AdvancedTableProps<TData extends Record<string, any>> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  features?: TableFeatures;
  loading?: TableLoadingState;
  className?: string;
  style?: React.CSSProperties;
};