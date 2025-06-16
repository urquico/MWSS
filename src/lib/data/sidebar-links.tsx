import {
  IconBuildingStore,
  IconHome2,
  IconDroplet
} from '@tabler/icons-react';
import { ActiveRoute } from '@/types/routes-enums';
import { LinkItem } from '@/components/ui/shell/LinksGroup';

export const sidebarModules: LinkItem[] = [
  {
    label: 'Lease Management',
    module: 'Income Management',
    icon: IconHome2,
    links: [
      {
        label: 'Dashboard',
        path: ActiveRoute.INCOME_MANAGEMENT_DASHBOARD,
        link: ActiveRoute.INCOME_MANAGEMENT_DASHBOARD,
      },
      {
        label: 'Billing Management',
        links: [
          {
            label: 'Statement of Account',
            path: ActiveRoute.STATEMENT_OF_ACCOUNT,
            link: ActiveRoute.STATEMENT_OF_ACCOUNT,
          },
          {
            label: 'Billing Statement',
            path: ActiveRoute.BILLING_STATEMENT,
            link: ActiveRoute.BILLING_STATEMENT,
          },
          {
            label: 'Demand to Pay',
            path: ActiveRoute.DEMAND_TO_PAY,
            link: ActiveRoute.DEMAND_TO_PAY,
          },
          {
            label: 'Journal Entry Voucher',
            path: ActiveRoute.JOURNAL_ENTRY_VOUCHER,
            link: ActiveRoute.JOURNAL_ENTRY_VOUCHER,
          },
        ],
      },
      {
        label: 'Payment Monitoring',
        links: [
          // {
          //   label: 'Payment Reconciliation',
          //   path: ActiveRoute.PAYMENT_RECONCILIATION,
          //   link: ActiveRoute.PAYMENT_RECONCILIATION,
          // },
          {
            label: 'Payment History',
            path: ActiveRoute.PAYMENT_HISTORY,
            link: ActiveRoute.PAYMENT_HISTORY,
          },
          {
            label: 'Payment Reminder',
            path: ActiveRoute.PAYMENT_REMINDER,
            link: ActiveRoute.PAYMENT_REMINDER,
          },
        ],
      },
      {
        label: 'Invoice Generation & Tracking',
        path: ActiveRoute.INVOICE_GENERATION_TRACKING,
        link: ActiveRoute.INVOICE_GENERATION_TRACKING,
      },
      {
        label: 'Lessee Information Management',
        path: ActiveRoute.TENANT_INFORMATION_MANAGEMENT,
        link: ActiveRoute.TENANT_INFORMATION_MANAGEMENT,
      },
    ],
  },

  {
    label: 'Raw Water Management',
    icon: IconDroplet,
    links: [
      {
        label: 'Dashboard',
        path: ActiveRoute.RAW_WATER_DASHBOARD,
        link: ActiveRoute.RAW_WATER_DASHBOARD,
      },
      {
        label: 'Billing Management',
        links: [
          {
            label: 'Statement of Account',
            path: ActiveRoute.RAW_WATER_STATEMENT_OF_ACCOUNT,
            link: ActiveRoute.RAW_WATER_STATEMENT_OF_ACCOUNT,
          },
          {
            label: 'Demand to Pay',
            path: ActiveRoute.RAW_WATER_DEMAND_TO_PAY,
            link: ActiveRoute.RAW_WATER_DEMAND_TO_PAY,
          },
          {
            label: 'Journal Entry Voucher',
            path: ActiveRoute.RAW_WATER_JOURNAL_ENTRY_VOUCHER,
            link: ActiveRoute.RAW_WATER_JOURNAL_ENTRY_VOUCHER,
          },
        ],
      },
      {
        label: 'Invoice Generation & Tracking',
        path: ActiveRoute.RAW_WATER_INVOICE_TRACKING,
        link: ActiveRoute.RAW_WATER_INVOICE_TRACKING,
        links: [
          {
            label: 'Invoice List',
            path: ActiveRoute.RAW_WATER_INVOICE_LIST,
            link: ActiveRoute.RAW_WATER_INVOICE_LIST,
          },
          {
            label: 'Customer Invoice Reports',
            path: ActiveRoute.RAW_WATER_CUSTOMER_INVOICE_REPORTS,
            link: ActiveRoute.RAW_WATER_CUSTOMER_INVOICE_REPORTS,
          },
        ],
      },
      {
        label: 'Customer Information Management',
        path: ActiveRoute.RAW_WATER_CUSTOMER_INFORMATION_MANAGEMENT,
        link: ActiveRoute.RAW_WATER_CUSTOMER_INFORMATION_MANAGEMENT,
        links: [
          {
            label: 'Customer Information',
            path: ActiveRoute.RAW_WATER_CUSTOMER_INFORMATION,
            link: ActiveRoute.RAW_WATER_CUSTOMER_INFORMATION,
          },
          {
            label: 'Payment History',
            path: ActiveRoute.RAW_WATER_PAYMENT_HISTORY,
            link: ActiveRoute.RAW_WATER_PAYMENT_HISTORY,
          },
        ],
      },
      {
        label: 'Payment Monitoring',
        path: ActiveRoute.RAW_WATER_PAYMENT_MONITORING,
        link: ActiveRoute.RAW_WATER_PAYMENT_MONITORING,
      },
      {
        label: 'Payment Computation',
        path: ActiveRoute.RAW_WATER_PAYMENT_COMPUTATION,
        link: ActiveRoute.RAW_WATER_PAYMENT_COMPUTATION,
      },
    ],
  },

  {
    label: 'Concession',
    icon: IconBuildingStore,
    links: [
      {
        label: 'Concessionaire Fee',
        path: ActiveRoute.CONCESSIONAIRE_FEE,
        link: ActiveRoute.CONCESSIONAIRE_FEE,
      },
      {
        label: 'Journal Entry Voucher',
        path: ActiveRoute.CONCESSION_JOURNAL_ENTRY_VOUCHER,
        link: ActiveRoute.CONCESSION_JOURNAL_ENTRY_VOUCHER,
      },
    ],
  },
];
