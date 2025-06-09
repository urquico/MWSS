import { Suspense, lazy } from "react";
import {  Loader } from "@mantine/core";

interface GenerateModalProps {
  onClose: () => void;
  viewType: string;
  data?: any;
}

// Lazy load the SOAGenerate component
const SOAGenerate = lazy(() => import("./generate-modal/SOAGenerate"));
const InvoiceGenerate = lazy(() => import("./generate-modal/InvoiceGenerate"));
const GenerateModal: React.FC<GenerateModalProps> = ({ onClose, viewType, data }) => {
  const modalContentMap: Record<string, JSX.Element> = {
    "statement-of-account": <SOAGenerate data={data} onClose={onClose} viewType={viewType} />,
    "invoice-tracking": <InvoiceGenerate data={data} onClose={onClose} viewType={viewType} />,

  };

  const ModalContent = modalContentMap[viewType];

  return (
      <Suspense fallback={<Loader size="sm" mt="md" />}>
        {ModalContent || null}
      </Suspense>
  );
};

export default GenerateModal;
