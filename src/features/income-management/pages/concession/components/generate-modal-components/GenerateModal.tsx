import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateModalProps {
  onClose: () => void;
  viewType: string;
  data?: any;
}




const GenerateModal: React.FC<GenerateModalProps> = ({ onClose, viewType, data }) => {
  const modalContentMap: Record<string, JSX.Element> = {
  };

  const ModalContent = modalContentMap[viewType];

  return (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {ModalContent || null}
    </Suspense>
  );
};

export default GenerateModal;
