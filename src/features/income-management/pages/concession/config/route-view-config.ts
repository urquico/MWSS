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

  // ===== CONCESSION MANAGEMENT =====
  [ActiveRoute.CONCESSIONAIRE_FEE]: {
    viewType: 'concession-fee',
    title: 'Concessionaire Fee',
    enableExport: true,
  },
  [ActiveRoute.CONCESSION_JOURNAL_ENTRY_VOUCHER]: {
    viewType: 'journal-entry',
    title: 'Concession Journal Entry Voucher',
    enableExport: true,
  },
};

export const getViewConfig = (pathname: string): ViewConfig => {
  return routeViewConfig[pathname] || {
    viewType: 'concession-fee',
    title: 'Default View',
    enableExport: false,
    enableFilters: false,
  };
  
};
