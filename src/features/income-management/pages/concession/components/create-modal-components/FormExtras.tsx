import { Suspense, lazy } from 'react';
import { Loader } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

interface FormExtrasProps {
  viewType: string;
  fields: any[];
  form: UseFormReturnType<any>;
  onClose?: () => void; 
}

const ConcessionFeeExtras = lazy(() => import('./form-extra-section/ConcessionFeeExtras'));
function FormExtras({ viewType, fields, form, onClose = () => {} }: FormExtrasProps) {
  const componentMap: Record<string, React.ReactNode> = {
    'concession-fee': (
      <ConcessionFeeExtras
        viewType={viewType}
        fields={fields}
        form={form}
        onClose={onClose}
      />
    ),
  
  };

  const ViewComponent = componentMap[viewType];

  return ViewComponent ? (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {ViewComponent}
    </Suspense>
  ) : null;
}

export default FormExtras;
