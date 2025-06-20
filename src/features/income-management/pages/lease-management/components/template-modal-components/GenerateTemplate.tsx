import { Suspense, lazy } from "react";
import { Loader } from "@mantine/core";

interface GenerateTemplateProps {
  data?: any;
  onClose: () => void;
  viewType: string | undefined;
}

// Lazy load view-specific templates
const BSTemplate = lazy(() => import("./templates/BSTemplate"));
const DPTemplate = lazy(() => import("./templates/DPTemplate"));

const GenerateTemplate: React.FC<GenerateTemplateProps> = ({ data, onClose, viewType }) => {
    const safeViewType = viewType ?? "statement-of-account";

  const templateMap: Record<string, JSX.Element> = {
    "billing-statement": <BSTemplate data={data} onClose={onClose} viewType={safeViewType}/>,
    "demand-to-pay": <DPTemplate data={data} onClose={onClose} viewType={safeViewType}/>,
  };

  const TemplateComponent = templateMap[safeViewType];

  return TemplateComponent ? (
<Suspense
  fallback={
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80">
      <Loader type="dots" size="lg" />
    </div>
  }
>
  {TemplateComponent}
</Suspense>  
  ) : null;
};

export default GenerateTemplate;
