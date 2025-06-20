export interface StatementOfAccountData {
  id: number;
  date: string;
  controlNumber: string;
  companyName: string;
  subject: string;
  periodCovered: string;
  lesseeName: string;
  location: string;
  totalArea: string;
  retailAdjustment?: string;
  periodFrom?: string;
  periodTo?: string;
  status: string;
  remarks?: string;
}

export interface BillingStatementData {
  id: number;
  date: string;
  controlNumber: string;
  lesseeName: string;
  companyName: string;
  subject: string;
  status: string;
  dateReceived?: string;
  remarks?: string;
}

export interface DemandToPayData {
  id: number;
  date: string;
  controlNumber: string;
  lesseeName: string;

  companyName: string;
  subject: string;
  status: string;
  dateReceived?: string;
  remarks?: string;
}

// Add more interfaces as needed...

export type ModalData =
  | StatementOfAccountData
  | BillingStatementData
  | DemandToPayData
  | null;
