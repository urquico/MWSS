import { rankItem } from '@tanstack/match-sorter-utils';
import { FilterFn, ColumnDef, Row } from '@tanstack/react-table';
import { mkConfig, generateCsv, download } from 'export-to-csv';

/**
 * Fuzzy filter function for TanStack Table
 * @param row - Table row
 * @param columnId - Column ID to filter
 * @param value - Filter value
 * @param addMeta - Metadata adder function
 * @returns Whether the row passes the filter
 */
export const fuzzyFilter: FilterFn<any> = (row: Row<any>, columnId: string, value: any, addMeta?: (meta: any) => void) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta?.({
    itemRank,
  });
  return itemRank.passed;
};

/**
 * Enhances columns with fuzzy filtering capabilities
 * @param columns - Original column definitions
 * @returns Column definitions with fuzzy filtering enabled
 */
export function withFuzzyFilter<T>(columns: ColumnDef<T, any>[]): ColumnDef<T, any>[] {
  return columns.map((col) => ({
    ...col,
    enableColumnFilter: true,
    filterFn: fuzzyFilter,
  }));
}

/**
 * Type-safe row filter utility
 * @param row - Table row
 * @param columnId - Column ID to filter
 * @param filterValue - Value to filter by
 * @returns Whether the row matches the filter
 */
export function applyRowFilter<TData>(row: Row<TData>, columnId: string, filterValue: any): boolean {
  const value = row.getValue(columnId);
  return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
}



export const handleExportData = <TData extends Record<string, any>>(
  data: TData[],
  exportFilename: string
) => {
  const config = mkConfig({
    useKeysAsHeaders: true,
    filename: exportFilename,
  });
  const csv = generateCsv(config)(data);
  download(config)(csv);
};

export const defaultGlobalFilterFn: FilterFn<any> = (row, _, filterValue) => {
  if (!filterValue) return true;
  const search = filterValue.toLowerCase();
  const rowData = row.original as Record<string, unknown>;
  
  return Object.keys(rowData).some((key) => {
    const value = row.getValue(key);
    return String(value).toLowerCase().includes(search);
  });
};
