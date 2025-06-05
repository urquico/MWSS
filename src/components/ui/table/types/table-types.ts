import { ColumnDef } from '@tanstack/react-table';
import { ButtonProps } from '@mantine/core';

export type TableFiltering = {
  global?: boolean;
  column?: boolean | Record<string, boolean>;
  fuzzy?: boolean;
};

export type TableExportConfig = {
  filename?: string;
  format?: 'csv' | 'json';
};

export type TableRowActions = {
  renderMenu?: (row: any) => React.ReactNode;
  renderButton?: (row: any) => React.ReactNode;
  buttonProps?: ButtonProps;
  buttonText?: string;
};

export type TableFeatures = {
  filtering?: TableFiltering;
  sorting?: boolean;
  pagination?: boolean;
  export?: boolean | TableExportConfig;
  rowActions?: boolean | TableRowActions;
  statusColumn?: boolean;
};

export type TableLoadingState = {
  isLoading?: boolean;
  text?: string;
};

export type StatusItem = {
  icon: React.ReactNode;
  text: string;
};
