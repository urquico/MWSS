// src/features/income-management/config/create-modal-config.ts
import { Select } from '@mantine/core';

type FieldType = 'text' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox';

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
      required: true
    },
    { 
      name: 'date', 
      label: 'Date', 
      type: 'date', 
      cols: 6,
      required: true
    },
    { 
      name: 'principal', 
      label: 'Principal (a)', 
      type: 'number',
      cols: 6,
      required: true
    },
    { 
      name: 'interestRate', 
      label: 'Interest Rate (%)', 
      type: 'number',
      defaultValue: 1,
      cols: 3,
      required: true
    },
    { 
      name: 'interest', 
      label: 'Interest (b x 1%)', 
      type: 'number',
      cols: 3,
      disabled: true,
      computed: true
    },
    { 
      name: 'retailAdjustment', 
      label: 'Retail Adjustment (if applicable)', 
      type: 'number',
      cols: 6
    },
    { 
      name: 'arrearages', 
      label: 'Arrearages (b)', 
      type: 'number',
      cols: 6,
      required: true
    },
    { 
      name: 'vat', 
      label: 'VAT (d)', 
      type: 'number',
      cols: 6,
      disabled: true,
      computed: true
    },
    { 
      name: 'dueForMonth', 
      label: 'Due for the Month (a + c + d)', 
      type: 'number',
      cols: 6,
      disabled: true,
      computed: true
    },
    { 
      name: 'periodFrom', 
      label: 'Period From', 
      type: 'date',
      cols: 3
    },
    { 
      name: 'periodTo', 
      label: 'Period To', 
      type: 'date',
      cols: 3
    },
    { 
      name: 'location', 
      label: 'Location', 
      type: 'text',
      cols: 12
    },
    { 
      name: 'remarks', 
      label: 'Remarks', 
      type: 'textarea',
      cols: 12
    }
  ],
  // ... keep your other view type configurations ...
};

// Add this new function to handle computed fields
export const getComputedFields = (viewType: string, values: any) => {
  if (viewType === 'statement-of-account') {
    const computed: Record<string, number> = {};

    // Calculate interest (b x 1%)
    if (values.principal && values.interestRate) {
      computed.interest = Number((values.principal * (values.interestRate / 100)).toFixed(2));
    }

    // Calculate VAT (assuming 12% of principal)
    if (values.principal) {
      computed.vat = Number((values.principal * 0.12).toFixed(2));
    }

    // Calculate Due for Month (a + c + d)
    if (values.principal && values.vat) {
      const retailAdjustment = values.retailAdjustment || 0;
      computed.dueForMonth = Number(
        (Number(values.principal) + Number(retailAdjustment) + Number(values.vat)).toFixed(2)
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

export default formConfigs;