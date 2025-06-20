import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateModalProps {
  onClose: () => void;
  viewType: string | undefined;
  data?: any;
}

// Lazy load the SOAGenerate component
const SOAGenerate = lazy(() => import("./generate-modal/SOAGenerate"));
const InvoiceGenerate = lazy(() => import("./generate-modal/InvoiceGenerate"));
const LesseeInformationGenerate = lazy(() => import("./generate-modal/LesseeInformationGenerate"));
const JournalEntryGenerate = lazy(() => import("./generate-modal/JournalEntryGenerate"));

const GenerateModal: React.FC<GenerateModalProps> = ({ onClose, viewType, data }) => {
  const safeViewType = viewType ?? "statement-of-account";

  const modalContentMap: Record<string, JSX.Element> = {
    "statement-of-account": <SOAGenerate data={data} onClose={onClose} viewType={safeViewType} />,
    "invoice-tracking": <InvoiceGenerate data={data} onClose={onClose} viewType={safeViewType} />,
    "lessee-information": <LesseeInformationGenerate data={data} onClose={onClose} viewType={safeViewType} />,
    "journal-entry": <JournalEntryGenerate data={data} onClose={onClose} viewType={safeViewType} />
  };

  const ModalContent = modalContentMap[safeViewType];

  return (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {ModalContent || null}
    </Suspense>
  );
};
export default GenerateModal;
