import { ActiveRoute } from '@/types/routes-enums';
import { Box, Text } from '@mantine/core';
import { useLocation } from 'react-router-dom';

import LeaseManagement from './lease-management/LeaseManagement';
import { getViewConfig as getLeaseViewConfig } from './lease-management/config/route-view-config';
import RawWaterManagement from './raw-water-management/RawWaterManagement';
import { getViewConfig as getRawWaterViewConfig } from './raw-water-management/config/route-view-config';

/**
 * @file IncomeManagement.tsx
 * @description
 * TableViewWrapper is the main entry point for rendering the correct module (Lease or Raw Water)
 * based on the current route in the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Handle dynamic routing for different modules (Lease Management, Raw Water Management, etc.)
 *
 *
 * @example
 * <Route path="/income-management/*" element={<TableViewWrapper />} />
 *
 * @see
 * - Update route checks and imports if new modules are added.
 * - Each module receives its config (columns, features, etc.) as a prop.
 */

function TableViewWrapper() {
  const location = useLocation();
  let config, ModuleComponent, title;

  if (location.pathname.startsWith(ActiveRoute.LEASE_MANAGEMENT)) {
    config = getLeaseViewConfig(location.pathname);
    ModuleComponent = LeaseManagement;
    title = config.title;
  } else if (location.pathname.startsWith(ActiveRoute.RAW_WATER_MGMT)) {
    config = getRawWaterViewConfig(location.pathname);
    ModuleComponent = RawWaterManagement;
    title = config.title;
  } else if (location.pathname.startsWith(ActiveRoute.CONCESSION_MGMT)) {
    config = getConcessionViewConfig(location.pathname);
    ModuleComponent = ConcessionManagement;
    title = config.title;
  } else {
    // fallback
    return (
      <Box>
        <Text fz={36} fw={500}>
          Module Not Found
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Text fz={36} fw={500} className='font-roboto-slab text-blue-950'>
        {title}
      </Text>
      <ModuleComponent config={config} />
    </Box>
  );
}

export default TableViewWrapper;
