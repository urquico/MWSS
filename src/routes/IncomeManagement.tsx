// routes/IncomeManagement.tsx
import SubModuleView from '@/components/shell/SubModuleView';
import { ReactNode } from 'react';
import { moduleConfig } from '@/types/modules';
import BackgroundImage from '@/components/ui/BackgroundImage';
import { Box } from '@mantine/core';
import IncomeManagementLanding from '@/features/income-management/components/IncomeManagementLanding';

function IncomeManagement({ children }: { children?: ReactNode }) {
    const { description, submodules } = moduleConfig.income;

    return (
    <IncomeManagementLanding />
        // <BackgroundImage src='/submodule-bg1.png'>
        //  <Box >
        // <SubModuleView
        //     moduleName="Lease Management"
        //     description={description}
        //     submodules={submodules}
        //     className=""
        //     wrapperClassName="w-[45%] mt-64"
        //     gridConfig={[
        //         { span: 6 },  // First item wide (10/12)
        //         { span: 6 },   // Second item narrow (2/12)
        //         { span: 8 },   // Third item half width
        //         { span: 4 }    // Fourth item half width
        //     ]}
        // >
        //     {children}
        // </SubModuleView>
        // </Box>
        // </BackgroundImage>
    );
}

export default IncomeManagement;