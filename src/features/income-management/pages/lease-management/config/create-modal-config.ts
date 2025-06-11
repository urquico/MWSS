type FieldType =
  | 'text'
  | 'date'
  | 'number'
  | 'select'
  | 'textarea'
  | 'dateRange'
  | 'checkbox'
  | 'switch';
interface FormFieldConfig {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  cols?: number;
  disabled?: boolean;
  computed?: boolean;
  defaultValue?: any;
  description?: string;
  displayIn?: string | string[];
  withSwitch?: boolean;
  autoFillCurrentDate?: boolean;
}

const formConfigs: Record<string, FormFieldConfig[]> = {
  'statement-of-account': [
    {
      name: 'lessee',
      label: 'Lessee Name',
      type: 'select',
      options: [
        { value: '1', label: 'Company A' },
        { value: '2', label: 'Company B' },
      ],
      cols: 6,
      required: true,
      displayIn: 'createModal',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      cols: 6,
      required: true,
      displayIn: 'createModal',
      autoFillCurrentDate: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      disabled: true,

      cols: 12,
      displayIn: 'createModal',
    },
    {
      name: 'principal',
      label: 'Principal',
      description: '(a):',
      type: 'number',
      cols: 4,
      required: true,
      displayIn: 'createModal',
    },
    {
      name: 'interestRate',
      label: 'Interest',
      description: "(b)x1% '(c):",

      type: 'number',
      disabled: true,
      computed: true,
      defaultValue: 1,
      cols: 4,
      required: true,
      displayIn: 'createModal',
    },

    {
      name: 'retailAdjustment',
      label: 'Rental Adjustment',
      description: '(if applicable)',
      type: 'number',
      cols: 4,
      displayIn: 'createModal',
      disabled: true,
      withSwitch: true,
    },
    {
      name: 'arrearages',
      label: 'Arrearages',
      description: '(b):',
      computed: true,

      type: 'number',
      cols: 6,
      required: true,
      displayIn: 'createModal',
    },

    {
      name: 'dueForMonth',
      label: 'Due for the Month',
      description: '(a + c + d):',
      type: 'number',
      cols: 6,
      disabled: true,
      computed: true,
      displayIn: 'createModal',
    },
    {
      name: 'natureOfAdjustment',
      label: 'Nature of Adjustment',

      type: 'text',
      cols: 12,
      disabled: true,
      computed: true,
      displayIn: 'createModal',
    },

    {
      name: 'vat',
      label: 'VAT',
      description: '(d)',

      type: 'number',
      cols: 6,
      disabled: true,
      computed: true,
      displayIn: 'createModal',
    },
    {
      name: 'periodFrom',
      label: 'Period: From',
      description: '(from)',
      type: 'date',
      cols: 3,
      displayIn: 'createModal',
    },
    {
      name: 'periodTo',
      label: 'Period: To',
      description: '(to)',

      type: 'date',
      cols: 3,
      displayIn: 'createModal',
    },
  ],
  'billing-statement': [
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      cols: 12,
      required: true,
      displayIn: 'createModal',
      autoFillCurrentDate: true,
    },
    {
      name: 'name',
      label: 'Tenant Name:',
      type: 'text',
      disabled: true,
      computed: true,
      defaultValue: 'Auto Populate',
      cols: 6,
      displayIn: 'createModal',
    },
    {
      name: 'controlNo',
      label: 'Control No.:',
      type: 'text',
      disabled: true,
      cols: 6,
      displayIn: 'createModal',
    },
    {
      name: 'name',
      label: 'Name:',
      type: 'text',
      disabled: true,
      computed: true,
      defaultValue: 'Auto Populate',
      cols: 12,
      displayIn: 'createModal',
    },
    {
      name: 'address',
      label: 'Address:',
      type: 'text',
      disabled: true,
      computed: true,
      defaultValue: 'Auto Populate',
      cols: 12,
      displayIn: 'createModal',
    },
    {
      name: 'subject',
      label: 'Subject To',
      type: 'text',
      disabled: true,
      computed: true,
      defaultValue: 'Auto populate',
      cols: 6,
      displayIn: 'createModal',
    },
    {
      name: 'attention',
      label: 'Attention To:',
      type: 'text',
      disabled: true,
      computed: true,
      defaultValue: 'Auto populate',
      cols: 6,
      displayIn: 'createModal',
    },
    {
      name: 'reviewer1',
      label: 'Reviewer 1',
      type: 'select',
      options: [
        { value: 'rev1', label: 'Reviewer 1' },
        { value: 'rev2', label: 'Reviewer 2' },
      ],
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'reviewer2',
      label: 'Reviewer 2',
      type: 'select',
      options: [
        { value: 'rev3', label: 'Reviewer 3' },
        { value: 'rev4', label: 'Reviewer 4' },
      ],
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'reviewer3',
      label: 'Reviewer 3',
      type: 'select',
      options: [
        { value: 'rev1', label: 'Reviewer 1' },
        { value: 'rev2', label: 'Reviewer 2' },
      ],
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'reviewer4',
      label: 'Reviewer 4',
      type: 'select',
      options: [
        { value: 'rev3', label: 'Reviewer 3' },
        { value: 'rev4', label: 'Reviewer 4' },
      ],
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'approver1',
      label: 'Approver 1',
      type: 'select',
      options: [
        { value: 'app1', label: 'Approver 1' },
        { value: 'app2', label: 'Approver 2' },
      ],
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'approver2',
      label: 'Approver 2',
      type: 'select',
      options: [
        { value: 'app3', label: 'Approver 3' },
        { value: 'app4', label: 'Approver 4' },
      ],
      cols: 6,
      displayIn: 'formExtra',
    },
  ],
  'demand-to-pay': [
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      cols: 6,
      required: true,
      displayIn: 'createModal',
      autoFillCurrentDate: true,
    },
    {
      name: 'tenantName',
      label: 'Tenant Name:',
      type: 'text',
      placeholder: 'Search',
      required: false,
      cols: 7,
      displayIn: 'createModal',
    },
    {
      name: 'controlNo',
      label: 'Control No.',
      type: 'text',
      placeholder: 'Control No.', // Populate with control number options as needed
      required: false,
      cols: 5,
      displayIn: 'createModal',
    },

    {
      name: 'name',
      label: 'Name:',
      type: 'text',
      disabled: true,
      computed: true,
      cols: 12,
      displayIn: 'createModal',
    },
    {
      name: 'address',
      label: 'Address:',
      type: 'text',
      disabled: true,
      computed: true,
      cols: 12,
      displayIn: 'createModal',
    },
    {
      name: 'subject',
      label: 'Subject To',
      type: 'text',
      disabled: true,
      computed: true,
      cols: 12,
      displayIn: 'createModal',
    },
    {
      name: 'buildingSpace',
      label: 'Building Space',
      type: 'text',
      required: false,
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'contractName',
      label: 'Contract of Lease',
      type: 'text',
      required: false,
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'contractLocation',
      label: 'Contract Location',
      type: 'text',
      required: false,
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'squareMeters',
      label: 'Square Meter',
      type: 'number',
      required: false,
      cols: 6,
      displayIn: 'formExtra',
    },
    {
      name: 'amountInWords',
      label: 'Amount in Words',
      type: 'text',
      required: false,
      cols: 12,
      displayIn: 'formExtra',
    },
    {
      name: 'rentalPeriod',
      label: 'Rental Period',
      type: 'text',
      required: false,
      placeholder: 'e.g. March - April 2025',
      cols: 12,
      displayIn: 'formExtra',
    },
  ],
  'invoice-tracking': [
    {
      name: 'cashSale',
      label: 'Cash Sales',
      type: 'checkbox',
      defaultValue: false,
      cols: 3,
      displayIn: 'createModal',
    },
    {
      name: 'chargeSale',
      label: 'Charge Sales',
      type: 'checkbox',
      defaultValue: false,

      cols: 3,
      displayIn: 'createModal',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
      cols: 6,
      placeholder: 'mm/dd/yyyy',
      displayIn: 'createModal',
    },
    {
      name: 'registeredName',
      label: 'Registered Name:',
      type: 'text',
      placeholder: 'Search',
      required: true,
      cols: 7,
      displayIn: 'createModal',
    },
    {
      name: 'tin',
      label: 'TIN',
      type: 'text',
      placeholder: 'TIN', // Populate with control number options as needed
      required: true,
      cols: 5,
      displayIn: 'createModal',
    },
    {
      name: 'businessAddress',
      label: 'Business Address',
      type: 'text',
      required: true,
      placeholder: 'Business Address',
      cols: 12,
      displayIn: 'createModal',
    },
  ],
'journal-entry': [
  // ------------------- GENERAL JEV FIELDS -------------------
  {
    name: 'fund',
    label: 'Fund',
    type: 'select',
    options: [
      { value: 'general-fund', label: 'General Fund' },
      { value: 'special-fund', label: 'Special Fund' },
      { value: 'trust-fund', label: 'Trust Fund' },
      { value: 'other-fund', label: 'Other Fund' },
    ],
    cols: 4,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'accountTitle',
    label: 'Account Title',
    type: 'text',
    placeholder: 'e.g. Cash - National Treasury',
    cols: 4,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'jevDate',
    label: 'JEV Date',
    type: 'date',
    autoFillCurrentDate: true,
    cols: 4,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'creditAmount',
    label: 'Credit Amount',
    type: 'number',
    placeholder: '0.00',
    cols: 4,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'transactionType',
    label: 'Transaction Type',
    type: 'select',
    options: [
      { value: 'regular', label: 'Regular' },
      { value: 'adjustment', label: 'Adjustment' },
      { value: 'reversal', label: 'Reversal' },
      { value: 'year-end', label: 'Year-End Adjustment' },
    ],
    cols: 4,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'jevNo',
    label: 'JEV No.',
    type: 'text',
    placeholder: 'Auto-generated',
    disabled: true,
    cols: 4,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'accountCode',
    label: 'Account Code',
    type: 'text',
    placeholder: 'e.g. 1-01-01-000',
    cols: 6,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'dueDate',
    label: 'Due Date',
    type: 'date',
    description: 'For payable/receivable items',
    cols: 6,
    displayIn: 'general',
  },
  {
    name: 'responsibilityCenter',
    label: 'Responsibility Center',
    type: 'text',
    placeholder: 'Department/Office',
    cols: 6,
    required: true,
    displayIn: 'general',
  },
  {
    name: 'debitAmount',
    label: 'Debit Amount',
    type: 'number',
    placeholder: '0.00',
    cols: 6,
    required: true,
    displayIn: 'general',
  },

  // ------------------- SUBSIDIARY JEV FIELDS -------------------
  {
    name: 'fund',
    label: 'Fund',
    type: 'select',
    options: [
      { value: 'general-fund', label: 'General Fund' },
      { value: 'special-fund', label: 'Special Fund' },
      { value: 'trust-fund', label: 'Trust Fund' },
      { value: 'other-fund', label: 'Other Fund' },
    ],
    cols: 12,
    required: true,
    displayIn: 'subsidiary',
  },
  {
    name: 'description',
    label: 'Description/Name',
    type: 'textarea',
    placeholder: 'Detailed description of the transaction',
    cols: 12,
    required: true,
    displayIn: 'subsidiary',
  },
  {
    name: 'jevDate',
    label: 'JEV Date',
    type: 'date',
    autoFillCurrentDate: true,
    cols: 4,
    required: true,
    displayIn: 'subsidiary',
  },
    {
    name: 'jevNo',
    label: 'JEV No.',
    type: 'text',
    placeholder: 'Auto-generated',
    disabled: true,
    cols: 4,
    required: true,
    displayIn: 'subsidiary',
  },
    {
    name: 'transactionType',
    label: 'Transaction Type',
    type: 'text',
    disabled: true,
    cols: 4,
    displayIn: 'subsidiary',
  },
  {
    name: 'creditAmount',
    label: 'Credit Amount',
    type: 'number',
    placeholder: '0.00',
    cols: 6,
    required: true,
    displayIn: 'subsidiary',
  },


  {
    name: 'accountCode',
    label: 'Account Code',
    type: 'text',
    placeholder: 'e.g. 1-01-01-000',
    cols: 6,
    required: true,
    displayIn: 'subsidiary',
  },
  {
    name: 'dueDate',
    label: 'Due Date',
    type: 'date',
    description: 'For payable/receivable items',
    cols: 6,
    displayIn: 'subsidiary',
  },
  {
    name: 'responsibilityCenter',
    label: 'Responsibility Center',
    type: 'text',
    placeholder: 'Department/Office',
    cols: 6,
    required: true,
    displayIn: 'subsidiary',
  },
  {
    name: 'debitAmount',
    label: 'Debit Amount',
    type: 'number',
    placeholder: '0.00',
    cols: 6,
    required: true,
    displayIn: 'subsidiary',
  },
],


};
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

// Add this new function to handle computed fields
export const getComputedFields = (viewType: string, values: any) => {
  if (viewType === 'statement-of-account') {
    const computed: Record<string, number> = {};

    // Calculate interest (b x 1%)
    if (values.principal && values.interestRate) {
      computed.interest = Number(
        (values.principal * (values.interestRate / 100)).toFixed(2),
      );
    }

    // Calculate VAT (assuming 12% of principal)
    if (values.principal) {
      computed.vat = Number((values.principal * 0.12).toFixed(2));
    }

    // Calculate Due for Month (a + c + d)
    if (values.principal && values.vat) {
      const retailAdjustment = values.retailAdjustment || 0;
      computed.dueForMonth = Number(
        (
          Number(values.principal) +
          Number(retailAdjustment) +
          Number(values.vat)
        ).toFixed(2),
      );
    }

    return computed;
  }
  return {};
};

export const invoiceTrackingTables = [
  {
    name: 'main',
    columns: [
      { header: 'Description', accessor: 'description' },
      { header: 'Quantity', accessor: 'quantity' },
      { header: 'Unit Price', accessor: 'unitPrice' },
      { header: 'Amount', accessor: 'amount' },
    ],
    data: [{ description: '', quantity: 0, unitPrice: 0, amount: 0 }],
  },
  {
    name: 'salesInfo',
    data: [
      { label: 'Vatable Sales', value: '0.00' },
      { label: 'VAT', value: '0.00' },
      { label: 'Zero-Rated Sales', value: '0.00' },
      { label: 'VAT-Exempt Sales', value: '0.00' },
    ],
  },
  {
    name: 'discounts',
    data: [
      { label: '(SC/PWD/NAAC/MOV/) Solo Parent ID No.:', value: '' },
      { label: '(SC/PWD/NAAC/MOV/SP) Signature:', value: '' },
    ],
  },
  {
    name: 'totals',
    data: [
      { label: 'Total Sales (VAT Inclusive)', value: '0.00' },
      { label: 'Less: VAT', value: '0.00' },
      { label: 'Amount: Net of VAT', value: '0.00' },
      { label: 'Less: Discount (SC/PWD/NAAC/MOV/SP)', value: '0.00' },
      { label: 'Add: VAT', value: '0.00' },
      { label: 'Less: Withholding Tax', value: '0.00' },
      { label: 'TOTAL AMOUNT DUE', value: '0.00', isBold: true },
    ],
  },
];

export const getSubmitButtonLabel = (viewType: string): string => {
  const labels: Record<string, string> = {
    'statement-of-account': 'Generate SOA',
    'billing-statement': 'Create Billing',
    'payment-monitoring': 'Record Payment',
  };
  return labels[viewType] || 'Submit';
};
export const getTitle = (viewType: string): string => {
  if (viewType === 'invoice-tracking') return 'Sales Invoice';

  return viewType
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default formConfigs;
