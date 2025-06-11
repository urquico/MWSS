
import { Suspense, lazy } from 'react';
import { Loader } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
interface FormExtrasProps {
  viewType: string;
  fields: any[];
  form: UseFormReturnType<any>;
}

// Lazy imports for each viewType component
const BillingStatementExtras = lazy(() => import('./form-extra-section/BSExtra'));
// const DemandToPayExtras = lazy(() => import('./form-extra-section/DPExtra'));
const InvoiceExtras = lazy(() => import('./form-extra-section/InvoiceExtras'));
// Add more lazy imports as needed

function FormExtras({ viewType, fields, form }: FormExtrasProps) {
  const componentMap: Record<string, JSX.Element> = {
    'billing-statement': <BillingStatementExtras fields={fields} form={form} />,
    // 'demand-to-pay': <DemandToPayExtras  form={form} fields={fields} />,
    'invoice-tracking': <InvoiceExtras />
  };

  const ViewComponent = componentMap[viewType];

  return ViewComponent ? (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {ViewComponent}
    </Suspense>
  ) : null;
}

export default FormExtras;
