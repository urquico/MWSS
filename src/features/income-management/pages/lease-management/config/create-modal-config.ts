type FieldType =
  | 'text'
  | 'date'
  | 'number'
  | 'select'
  | 'textarea'
  | 'dateRange'
  | 'checkbox';

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
      label: 'Retail Adjustment',
      description: '(if applicable)',
      type: 'number',
      cols: 4,
      displayIn: 'createModal',
    },
    {
      name: 'arrearages',
      label: 'Arrearages',
      description: '(b):',
      computed: true,

      type: 'number',
      cols: 4,
      required: true,
      displayIn: 'createModal',
    },

    {
      name: 'dueForMonth',
      label: 'Due for the Month',
      description: '(a + c + d):',
      type: 'number',
      cols: 4,
      disabled: true,
      computed: true,
      displayIn: 'createModal',
    },
    {
      name: 'periodFromTo',
      label: 'Period',
      type: 'dateRange',
      description: '(From - To)',
      cols: 4,
      displayIn: 'createModal',
    },

    {
      name: 'vat',
      label: 'VAT',
      description: '(d)',

      type: 'number',
      cols: 12,
      disabled: true,
      computed: true,
      displayIn: 'createModal',
    },
  ],
  'billing-statement': [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Search',
      required: true,
      disabled: true,
      cols: 12,
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
      label: 'Subject',
      type: 'text',
      disabled: true,
      computed: true,
      defaultValue: 'Auto populate',
      cols: 6,
      displayIn: 'createModal',
    },
    {
      name: 'attention',
      label: 'Attention to:',
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
      required: false,
      cols: 12,
      placeholder: 'mm/dd/yyyy',
      displayIn: 'createModal',
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
      label: 'Subject',
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
  'invoice-tracking':[
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
      label: 'TIN No.',
      type: 'text',
      placeholder: 'TIN No.', // Populate with control number options as needed
      required: true,
      cols: 5,
      displayIn: 'createModal',
    },
    {  name: 'businessAddress',
      label: 'Business Address',
      type: 'text',
      required: true,
      placeholder: 'Business Address',
      cols: 12,
      displayIn: 'createModal',
    },
  ],
};

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
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default formConfigs;
