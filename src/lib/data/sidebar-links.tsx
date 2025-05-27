import {
  IconBuildingStore,
  IconChartBar,
  IconHome2,
} from '@tabler/icons-react';
import { ActiveRoute } from '@/types/routes-enums';
import { LinkItem } from '@/components/shell/LinksGroup';

export const sidebarModules: LinkItem[] = [
  {
    label: 'Lease Management',
    module:'Income Management',
    icon: IconHome2,
  
    links: [
      {
        label: 'Dashboard',
        path: ActiveRoute.DASHBOARD,//finance/dashboard
        link: ActiveRoute.DASHBOARD,
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
        path: ActiveRoute.PAYMENT_MONITORING,
        link: ActiveRoute.PAYMENT_MONITORING,
      },
      {
        label: 'Invoice Generation & Tracking',
        path: ActiveRoute.INVOICE_GENERATION_TRACKING,
        link: ActiveRoute.INVOICE_GENERATION_TRACKING,
      },
      {
        label: 'Tenant Information Management',
        path: ActiveRoute.TENANT_INFORMATION_MANAGEMENT,
        link: ActiveRoute.TENANT_INFORMATION_MANAGEMENT,
      },
    ],
  },
];
