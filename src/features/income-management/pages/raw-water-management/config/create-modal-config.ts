import { ModalConfig } from '@/features/income-management/types/modal-fields';
import { renderStatusCell } from '@/features/income-management/utils/status-utils';

export const formConfigs: Record<string, ModalConfig> = {
  'raw-water-billing-statement': {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Enter First Name',
        value: '',
        span: 4,
        type: 'text',
      },
      {
        name: 'middleName',
        label: 'Middle Name',
        placeholder: 'Enter Middle Name',
        value: '',
        span: 4,
        type: 'text',
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter Last Name',
        value: '',
        span: 4,
        type: 'text',
      },
      {
        name: 'location',
        label: 'Location',
        placeholder: 'Enter Business Address',
        value: '',
        type: 'text',
        span: 12,
      },
    ],
  },
  'raw-water-demand-to-pay': {
    sections: [
       {
        fields: [
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
            name: 'controlNo',
            label: 'Control No.',
            type: 'text',
            placeholder: 'Control No.',
            required: false,
            cols: 6,
            displayIn: 'createModal',
          },]
        },
      {
        title: 'Tenant Name',
        fields: [
          {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'First Name',
            required: false,
            cols: 3,
            displayIn: 'createModal',
          },
          {
            name: 'middleName',
            label: 'Middle Name',
            type: 'text',
            placeholder: 'Middle Name',
            required: false,
            cols: 3,
            displayIn: 'createModal',
          },
          {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Last Name',
            required: false,
            cols: 3,
            displayIn: 'createModal',
          },
           {
            name: 'designation',
            label: 'Designation',
            type: 'text',
            placeholder: 'Designation',
            required: false,
            cols: 3,
            displayIn: 'createModal',
          },
        ],
      },
      {
        fields: [
         
          {
            name: 'companyName',
            label: 'Company Name:',
            type: 'text',
            disabled: true,
            computed: true,
            cols: 6,
            displayIn: 'createModal',
          },
          {
            name: 'companyAddress',
            label: 'Company Address:',
            type: 'text',
            disabled: true,
            computed: true,
            cols: 6,
            displayIn: 'createModal',
          },
          {
            name: 'subject',
            label: 'Subject',
            type: 'text',
            disabled: true,
            computed: true,
            cols: 4,
            displayIn: 'createModal',
          },
           {
            name: 'salutation',
            label: 'Salutation',
            type: 'text',
            disabled: true,
            computed: true,
            cols: 4,
            displayIn: 'createModal',
          },
           {
            name: 'greeting',
            label: 'Greeting',
            type: 'text',
            disabled: true,
            computed: true,
            cols: 4,
            displayIn: 'createModal',
          },
        ],
      },
    ],
  },
  'invoice-tracking': {
    fields: [
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
        placeholder: 'TIN',
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
  },
  'journal-entry': {
    fields: [
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
        required: false,
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
        required: false,
        displayIn: 'general',
      },
      {
        name: 'jevNo',
        label: 'JEV No.',
        type: 'text',
        placeholder: 'Auto-generated',
        disabled: true,
        cols: 4,
        required: false,
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
        required: false,
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
        required: false,
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
  },
  
};

export const rawWaterBillingStatementTables = [
  // 1. Main complex table (with columns)
  {
    name: 'main',
    columns: [
      { header: 'Unpaid Balance', accessor: 'unpaidBalance' },
      { header: 'Penalty', accessor: 'penalty' },
      { header: 'Total Current Due', accessor: 'totalCurrentDue' },
      { header: 'Due Date', accessor: 'dueDate' },
      { header: 'Total Amount Due', accessor: 'totalAmountDue' },
    ],
    data: [
      {
        unpaidBalance: '10,000.00',
        penalty: '500.00',
        totalCurrentDue: '5,000.00',
        dueDate: '2024-07-31',
        totalAmountDue: '15,500.00',
      },
    ],
  },

  // 2. Account Information (vertical, just label/value)
  {
    name: 'accountInfo',
    data: [
      { label: 'Account No.', value: '' },
      { label: 'Meter No. / WSN', value: '' }, // combine as needed in your UI
      { label: 'MRR', value: '' },
    ],
  },

  // 3. Billing Information
  {
    name: 'billingInfo',
    data: [
      { label: 'Meter Reading Date / Billing Period', value: '' },
      { label: 'Present Reading', value: '' },
      { label: 'Previous Reading / Total Consumption', value: '' },
      { label: 'Total Current Due', value: '' },
      { label: 'Due Date', value: '' },
      { label: 'Next Meter Reading Date', value: '' },
    ],
  },

  // 4. Charges
  {
    name: 'charges',
    data: [
      { label: 'Basic Charge', value: '' },
      { label: 'CERA / Miscellaneous', value: '' },
      { label: 'Total Current Due', value: '' },
    ],
  },

  // 5. Payment
  {
    name: 'payment',
    data: [
      { label: 'Amount Paid', value: '' },
      { label: 'O.R. Date', value: '' },
      { label: 'O.R. No.', value: '' },
      { label: 'Period Covered', value: '' },
    ],
  },
];

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
