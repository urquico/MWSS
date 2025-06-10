
export interface Field {
  name: string;
  label: string;
  value?: string;
  span: number;
}

export interface Section {
  title?: string;
  fields: Field[];
}

export interface ModalConfig {
  sections: Section[];
  columns: any[];
  tableData: any[];
}
