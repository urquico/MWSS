import { ActiveRoute } from '@/types/routes-enums';
import { ViewConfig, RouteConfig } from '@/features/income-management/types/view-types.ts';

/**
 * Configuration object mapping each `ActiveRoute` to its corresponding view settings.
 *
 * This configuration defines the properties for each route in the income, raw water, and concession management modules.
 * Each route entry specifies:
 * - `viewType`: The type of view to render for the route.
 * - `title`: The display title for the route's view.
 * - `enableExport`: Whether exporting data is enabled for this view.
 * - `enableFilters` (optional): Whether filtering functionality is enabled for this view.
 *
 * @remarks
 * The keys of this object are values from the `ActiveRoute` enum, ensuring type safety and consistency across the application.
 *
 * @example
 * ```typescript
 * const config = routeViewConfig[ActiveRoute.STATEMENT_OF_ACCOUNT];
 * // config = {
 * //   viewType: 'billing-statement',
 * //   title: 'Statement of Account',
 * //   enableExport: true,
 * //   enableFilters: true,
 * // }
 * ```
 */
export const routeViewConfig: RouteConfig = {
  // ===== LEASE MANAGEMENT =====

//  BILLING MANAGEMENT
  [ActiveRoute.STATEMENT_OF_ACCOUNT]: {
    viewType: 'statement-of-account',
    title: 'Statement of Account',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.BILLING_STATEMENT]: {
    viewType: 'billing-statement',
    title: 'Billing Statement',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.DEMAND_TO_PAY]: {
    viewType: 'demand-to-pay',
    title: 'Demand to Pay',
    enableExport: false,
  },
  [ActiveRoute.JOURNAL_ENTRY_VOUCHER]: {
    viewType: 'journal-entry',
    title: 'Journal Entry Voucher',
    enableExport: true,
  },
// PAYMENT MONITORING
  [ActiveRoute.PAYMENT_MONITORING]: {
    viewType: 'payment-monitoring',
    title: 'Payment Monitoring',
    enableExport: true,
  },
   [ActiveRoute.PAYMENT_RECONCILIATION]: {
    viewType: 'payment-reconciliation',
    title: 'Payment Reconciliation',
    enableExport: true,
  },
   [ActiveRoute.PAYMENT_HISTORY]: {
    viewType: 'payment-history',
    title: 'Payment History',
    enableExport: true,
  },
   [ActiveRoute.PAYMENT_REMINDER]: {
    viewType: 'payment-reminder',
    title: 'Payment Reminder',
    enableExport: true,
  },

  
  [ActiveRoute.INVOICE_GENERATION_TRACKING]: {
    viewType: 'invoice-tracking',
    title: 'Invoice Generation and Tracking',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.TENANT_INFORMATION_MANAGEMENT]: {
    viewType: 'lessee-information',
    title: 'Lessee Information Management',
    enableExport: true,
    enableFilters: true,
  },
};

export const getViewConfig = (pathname: string): ViewConfig => {
  return routeViewConfig[pathname] || {
    viewType: 'billing-statement',
    title: 'Default View',
    enableExport: false,
    enableFilters: false,
  };
};
