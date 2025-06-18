import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateModalProps {
  onClose: () => void;
  viewType: string;
  data?: any;
}

// Lazy load the SOAGenerate component
const RWBSGenerate = lazy(() => import("./generate-modal/RWBSGenerate"));

const GenerateModal: React.FC<GenerateModalProps> = ({ onClose, viewType, data }) => {
  const modalContentMap: Record<string, JSX.Element> = {
    "raw-water-billing-statement": <RWBSGenerate data={data} onClose={onClose} viewType={viewType} />,

  };

  const ModalContent = modalContentMap[viewType];

  return (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {ModalContent || null}
    </Suspense>
  );
};

export default GenerateModal;
