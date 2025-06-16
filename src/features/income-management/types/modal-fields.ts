import { ColumnDef } from "@tanstack/react-table";

export type FieldType =
  | 'text'
  | 'date'
  | 'number'
  | 'select'
  | 'textarea'
  | 'dateRange'
  | 'checkbox'
  | 'switch';

export interface BaseFieldConfig {
  name: string;
  label: string;
  description?: string;
  span?: number;  
  cols?: number;   
}

// Unified FieldConfig for all use-cases
export interface FieldConfig extends BaseFieldConfig {
  type: FieldType;
  value?: string | number;
  required?: boolean;
  options?: { value: string; label: string }[];
  disabled?: boolean;
  computed?: boolean;
  defaultValue?: string | number | Date | boolean ;
  placeholder?: string;
  displayIn?: string | string[];
  withSwitch?: boolean;
  autoFillCurrentDate?: boolean;
}

// For grouping fields in sections
export interface TableSectionConfig {
  columns: ColumnDef<any, any>[]; // Now required
  data?: any[];
}

export interface SectionConfig<TField extends FieldConfig = FieldConfig> {
  title: string;
  fields?: TField[]; // Make fields optional for table-only sections
  table?: TableSectionConfig;
}
// Modal config, unified
export interface ModalConfig {
  fields?: FieldConfig[];
  sections?: SectionConfig[];
  tableData?: any;
  columns?: ColumnDef<any, any>[];
}

// Table types for Invoice Tracking views (unchanged)
export type MainTableItem = {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
};

export type LabelValueItem = {
  label: string;
  value: string;
  isBold?: boolean;
};

export type TableDataItem = MainTableItem | LabelValueItem;