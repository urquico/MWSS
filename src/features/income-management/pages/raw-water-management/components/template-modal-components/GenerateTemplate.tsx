import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateTemplateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

// Lazy load view-specific templates
const BSTemplate = lazy(() => import("./templates/BSTemplate"));
const RWDPTemplate = lazy(() => import("./templates/RWDPTemplate"));

const GenerateTemplate: React.FC<GenerateTemplateProps> = ({ data, onClose, viewType }) => {
  const templateMap: Record<string, JSX.Element> = {
    "billing-statement": <BSTemplate data={data} onClose={onClose} viewType={viewType}/>,
    "raw-water-demand-to-pay": <RWDPTemplate data={data} onClose={onClose} viewType={viewType}/>,
  };

  const TemplateComponent = templateMap[viewType];

  return TemplateComponent ? (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      {TemplateComponent}
    </Suspense>
  ) : null;
};

export default GenerateTemplate;
