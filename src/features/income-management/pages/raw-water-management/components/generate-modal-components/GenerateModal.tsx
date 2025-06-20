import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateModalProps {
  onClose: () => void;
  viewType: string;
  data?: any;
}

// Lazy load the SOAGenerate component
// const RWBSGenerate = lazy(() => import("./generate-modal/RWBSGenerate"));

const GenerateModal: React.FC<GenerateModalProps> = ({ onClose, viewType, data }) => {
  const modalContentMap: Record<string, JSX.Element> = {
    // "raw-water-billing-statement": <RWBSGenerate data={data} onClose={onClose} viewType={viewType} />,

  };

  const ModalContent = modalContentMap[viewType];

  return (
    <Suspense  fallback={
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80">
      <Loader type="dots" size="lg" />
    </div>
  }>
      {ModalContent || null}
    </Suspense>
  );
};

export default GenerateModal;
