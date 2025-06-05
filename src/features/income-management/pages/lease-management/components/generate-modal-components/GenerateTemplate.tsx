import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateTemplateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

// Lazy load view-specific templates
const BSTemplate = lazy(() => import("./generate-templates/BSTemplate"));
const DPTemplate = lazy(() => import("./generate-templates/DPTemplate"));
// Add more as needed...

const GenerateTemplate: React.FC<GenerateTemplateProps> = ({ data, onClose, viewType }) => {
  const templateMap: Record<string, JSX.Element> = {
    "billing-statement": <BSTemplate data={data} onClose={onClose} viewType={viewType}/>,
    "demand-to-pay": <DPTemplate data={data} onClose={onClose} viewType={viewType}/>,
  };

  const TemplateComponent = templateMap[viewType];

  return TemplateComponent ? (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {TemplateComponent}
    </Suspense>
  ) : null;
};

export default GenerateTemplate;
