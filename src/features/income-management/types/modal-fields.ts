import { ColumnDef } from "@tanstack/react-table";
/**
 * @file modal-fields.ts
 * @description
 * Central type definitions for modal field configs, sections, and table data
 * in the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Use `FieldConfig` to define fields for create/edit modals and forms.
 * - Use `SectionConfig` and `TableSectionConfig` for grouping fields and table sections in modals.
 * - Use `ModalConfig` as the unified config shape for modal dialogs.
 *
 * @example
 * import { FieldConfig, ModalConfig } from '@/features/income-management/types/modal-fields';
 * const fields: FieldConfig[] = [{ name: 'date', label: 'Date', type: 'date' }, ...];
 * const modalConfig: ModalConfig = { fields, sections: [...] };
 *
 * @see
 * - Extend `FieldType` for new input types.
 * - Use `TableDataItem` for table-driven modal sections.
 */

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
export type RawWaterMainTableItem = {
  unpaidBalance: string;
  penalty: string;
  totalCurrentDue: string;
  dueDate: string;
  totalAmountDue: string;
};
export type LabelValueItem = {
  label: string;
  value: string;
  isBold?: boolean;
};

export type TableDataItem = MainTableItem | LabelValueItem | RawWaterMainTableItem;