import MenuCard from '@/features/landing-page/components/MenuCard';
import { useNavigate } from 'react-router-dom';
import { Text, Grid, GridCol, type GridColProps, Box } from '@mantine/core';
import { ReactNode } from 'react';
import { ActiveRoute } from '@/types/routes-enums';


interface SubModuleViewProps {
    moduleName: string;
    description: string;
    submodules: {
        iconSrc: string;
        title: string;
        routeKey: keyof typeof ActiveRoute;
    }[];
    children?: ReactNode;
    gridConfig?: GridColProps[]; // Proper Mantine GridCol props type
    className?: string; // Added className prop
    wrapperClassName?: string
}

/**
 * SubModuleView Component
 * 
 * Props:
 * - moduleName: string
 *     The name of the module (displayed as a header, e.g. "INCOME MANAGEMENT").
 * - description: string
 *     A short description of the module.
 * - submodules: Array<{ iconSrc: string; title: string; routeKey: keyof typeof ActiveRoute; }>
 *     List of submodules to display as MenuCards. Each submodule needs an icon, title, and routeKey.
 * - children?: ReactNode
 *     Optional. Any nested content to render below the grid (e.g. nested routes or extra info).
 * - gridConfig?: GridColProps[]
 *     Optional. Controls the layout of each MenuCard in the Mantine Grid using GridCol props.
 * - className?: string
 *     Optional. Additional className for the root container.
 * - gridClassName?: string
 *     Optional. Additional className for the Grid component.
 * 
 * Usage Example:
 * <SubModuleView
 *   moduleName="INCOME MANAGEMENT"
 *   description="Manage all income-related processes"
 *   submodules={[
 *     { iconSrc: '/icons/soa.svg', title: 'SOA Creation', routeKey: 'SOA_CREATION' },
 *     { iconSrc: '/icons/invoice.svg', title: 'Invoice Tracking', routeKey: 'INVOICE_TRACKING' },
 *   ]}
 *   gridConfig={[
 *     { span: 8 }, // First card spans 8 columns
 *     { span: 4 }, // Second card spans 4 columns
 *   ]}
 *   className="custom-root-class"
 *   gridClassName="custom-grid-class"
 * >
 *   {nestedContent}
 * </SubModuleView>
 */
export default function SubModuleView({
  moduleName,
  description,
  submodules,
  children,
  gridConfig = submodules.map(() => ({ span: 6 })),
  className = '',
  wrapperClassName,
}: SubModuleViewProps) {
  const navigate = useNavigate();

  return (
    <div className={`relative min-h-screen p-6 flex flex-col justify-start ${className}`}>
      <Text fz={36} fw={700} className="mb-2 font-roboto-slab text-[#1E40AF]">
        {moduleName}
      </Text>
      <Text className="mb-8" c="dimmed">
        {description}
      </Text>

      <Box className="flex-grow">
        <div className={`${wrapperClassName}`}>
          <Grid>
            {submodules.map((submodule, index) => (
              <GridCol
                key={submodule.routeKey}
                {...gridConfig[index]}
              >
                <MenuCard
                  iconSrc={submodule.iconSrc}
                  title={submodule.title}
                  onClick={() => navigate(ActiveRoute[submodule.routeKey])}
                />
              </GridCol>
            ))}
          </Grid>
        </div>

        {children && <div className="mt-8">{children}</div>}
      </Box>
    </div>
  );
}
