import { ActiveRoute } from "./routes-enums";

type Submodule = {
  iconSrc: string;
  title: string;
  routeKey: keyof typeof ActiveRoute;
};

type Module = {
  description: string;
  submodules: Submodule[];
};

export const moduleConfig: Record<string, Module> = {
  income: {
    description: 'Optimize property leasing',
    submodules: [
      {
        iconSrc: '/icons/book-coins.svg',
        title: 'SOA Creation & Billing Statement & demand to pay',
        routeKey: 'SOA_CREATION'       },
      {
        iconSrc: '/icons/dollar.svg',
        title: 'Invoice Generation & Tracking',
        routeKey: 'INVOICE_TRACKING',
      },
      {
        iconSrc: '/icons/chart-box.svg',
        title: 'Tenant Information management',
        routeKey: 'TENANT_MGMT',
      },
      {
        iconSrc: '/icons/coins.svg',
        title: 'Payment Monitoring',
        routeKey: 'PAYMENT_MONITORING',
      },
    ],
  },
  budget: {
    description: 'Manage financial plans',
    submodules: [
      {
        iconSrc: '/icons/prep.svg',
        title: 'Budget Preparation',
        routeKey: 'BUDGET_MGMT',
      },
    ],
  },
} satisfies Record<string, Module>;
