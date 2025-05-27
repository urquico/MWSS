export enum IncomePermissions {
  // Dashboard
  CanViewDashboard = 'CanViewDashboard',
  CanExportDashboard = 'CanExportDashboard',

  // Statement of Account
  CanCreateSOA = 'CanCreateSOA',
  CanEditSOA = 'CanEditSOA',
  CanSubmitSOA = 'CanSubmitSOA',
  CanApproveSOA = 'CanApproveSOA',
  CanReturnSOA = 'CanReturnSOA',
  CanExportSOA = 'CanExportSOA',
  CanPrintSOA = 'CanPrintSOA',

  // Billing Statement
  CanCreateBilling = 'CanCreateBilling',
  CanEditBilling = 'CanEditBilling',
  CanSubmitBilling = 'CanSubmitBilling',
  CanApproveBilling = 'CanApproveBilling',
  CanReturnBilling = 'CanReturnBilling',
  CanViewBillingActivity = 'CanViewBillingActivity',

  // Demand to Pay
  CanCreateDTP = 'CanCreateDemandToPay',
  CanEditDTP = 'CanEditDemandToPay',
  CanSubmitDTP = 'CanSubmitDemandToPay',
  CanApproveDTP = 'CanApproveDemandToPay',
  CanReturnDTP = 'CanReturnDemandToPay',

  // Payment Monitoring
  CanPostPayment = 'CanPostPayment',
  CanViewPaymentHistory = 'CanViewPaymentHistory',
  CanViewPaymentReminder = 'CanViewPaymentReminder',
  CanViewPaymentReconciliation = 'CanViewPaymentReconciliation',

  // Sales Invoice
  CanCreateInvoice = 'CanCreateSalesInvoice',
  CanEditInvoice = 'CanEditSalesInvoice',
  CanExportInvoice = 'CanExportSalesInvoice',
  CanViewInvoice = 'CanViewSalesInvoice',

  // Tenant/Customer Info
  CanViewTenantInfo = 'CanViewTenantInfo',
  CanViewCustomerList = 'CanViewCustomerList',
  CanCreateCustomer = 'CanCreateCustomer',
  CanUpdateCustomer = 'CanUpdateCustomer',
  CanExportCustomerInfo = 'CanExportCustomerInfo',

  // Concession
  CanViewConcessionFee = 'CanViewConcessionFee',
  CanExportConcessionFee = 'CanExportConcessionFee',

  // Journal Entry Voucher
  CanViewJEV = 'CanViewJEV',
  CanExportJEV = 'CanExportJEV',

  // Payment Computation (CPI / Arrears)
  CanAddCPI = 'CanAddCPI',
  CanEditCPI = 'CanEditCPI',
  CanApproveCPI = 'CanApproveCPI',
  CanReturnCPI = 'CanReturnCPI',
  CanViewCPI = 'CanViewCPI',
  CanAddArrears = 'CanAddArrears',
  CanApproveArrears = 'CanApproveArrears',
  CanEditArrears = 'CanEditArrears',
  CanViewArrears = 'CanViewArrears',
  CanReturnArrears = 'CanReturnArrears',
}
