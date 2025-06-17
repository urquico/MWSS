import { ActiveRoute } from '@/types/routes-enums';
import { ViewConfig, RouteConfig } from '@/features/income-management/types/view-types.ts';

/**
 * Configuration object mapping each `ActiveRoute` to its corresponding view settings.
 *
 * This configuration defines the properties for each route in the income and raw water management modules.
 * Each route entry specifies:
 * - `viewType`: The type of view to render for the route.
 * - `title`: The display title for the route's view.
 * - `enableExport`: Whether exporting data is enabled for this view.
 * - `enableFilters` (optional): Whether filtering functionality is enabled for this view.
 *
 * @remarks
 * The keys of this object are values from the `ActiveRoute` enum, ensuring type safety and consistency across the application.
 */
export const routeViewConfig: RouteConfig = {
  // ===== RAW WATER MANAGEMENT =====

  // Dashboard
  [ActiveRoute.RAW_WATER_DASHBOARD]: {
    viewType: 'raw-water-dashboard',
    title: 'Raw Water Dashboard',
    enableExport: false,
  },

  // Billing Management
  [ActiveRoute.RAW_WATER_BILLING_STATEMENT]: {
    viewType: 'raw-water-billing-statement',
    title: 'Raw Water Billing Statement',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_DEMAND_TO_PAY]: {
    viewType: 'raw-water-demand-to-pay',
    title: 'Raw Water Demand to Pay',
    enableExport: false,
  },
  [ActiveRoute.RAW_WATER_JOURNAL_ENTRY_VOUCHER]: {
    viewType: 'raw-water-journal-entry',
    title: 'Raw Water Journal Entry Voucher',
    enableExport: true,
  },

  // Invoice Management
  [ActiveRoute.RAW_WATER_INVOICE_GENERATION_TRACKING]: {
    viewType: 'raw-water-invoice-tracking',
    title: 'Raw Water Invoice Generation and Tracking',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_INVOICE_LIST]: {
    viewType: 'raw-water-invoice-list',
    title: 'Raw Water Invoice List',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_CUSTOMER_INVOICE_REPORTS]: {
    viewType: 'raw-water-customer-invoice-reports',
    title: 'Raw Water Customer Invoice Reports',
    enableExport: true,
    enableFilters: true,
  },

  // Customer Management
  [ActiveRoute.RAW_WATER_CUSTOMER_INFORMATION_MANAGEMENT]: {
    viewType: 'raw-water-customer-information-management',
    title: 'Raw Water Customer Information Management',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_CUSTOMER_INFORMATION]: {
    viewType: 'raw-water-customer-information',
    title: 'Raw Water Customer Information',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_CUSTOMER_PAYMENT_HISTORY]: {
    viewType: 'raw-water-customer-payment-history',
    title: 'Raw Water Customer Payment History',
    enableExport: true,
    enableFilters: true,
  },

  // Payment Monitoring
  [ActiveRoute.RAW_WATER_PAYMENT_MONITORING]: {
    viewType: 'raw-water-payment-monitoring',
    title: 'Raw Water Payment Monitoring',
    enableExport: true,
  },
  [ActiveRoute.RAW_WATER_PAYMENT_RECONCILIATION]: {
    viewType: 'raw-water-payment-reconciliation',
    title: 'Raw Water Payment Reconciliation',
    enableExport: true,
  },
  [ActiveRoute.RAW_WATER_PAYMENT_HISTORY]: {
    viewType: 'raw-water-payment-history',
    title: 'Raw Water Payment History',
    enableExport: true,
  },
  [ActiveRoute.RAW_WATER_PAYMENT_REMINDER]: {
    viewType: 'raw-water-payment-reminder',
    title: 'Raw Water Payment Reminder',
    enableExport: true,
  },

  // Payment Computation
  [ActiveRoute.RAW_WATER_PAYMENT_COMPUTATION]: {
    viewType: 'raw-water-payment-computation',
    title: 'Raw Water Payment Computation',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_PAYMENT_COMPUTATION_CPI]: {
    viewType: 'raw-water-payment-computation-cpi',
    title: 'Raw Water Payment Computation (CPI)',
    enableExport: true,
    enableFilters: true,
  },
  [ActiveRoute.RAW_WATER_PAYMENT_COMPUTATION_ARREARS]: {
    viewType: 'raw-water-payment-computation-arrears',
    title: 'Raw Water Payment Computation (Arrears)',
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