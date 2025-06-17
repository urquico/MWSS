import { useLocation } from 'react-router-dom';
import { Box, Text } from '@mantine/core';

// Import both configs and components
import { ActiveRoute } from '@/types/routes-enums';
import { getViewConfig as getLeaseViewConfig } from './lease-management/config/route-view-config';
import { getViewConfig as getRawWaterViewConfig } from './raw-water-management/config/route-view-config';
import LeaseManagement from './lease-management/LeaseManagement';
import RawWaterManagement from './raw-water-management/RawWaterManagement';

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
    config = getRawWaterViewConfig(location.pathname);
    ModuleComponent = RawWaterManagement;
    title = config.title;
  } else {
    // fallback
    return <Box><Text fz={36} fw={500}>Module Not Found</Text></Box>;
  }

  return (
    <Box>
      <Text fz={36} fw={500} className='text-blue-950 font-roboto-slab'>{title}</Text>
      <ModuleComponent config={config} />
    </Box>
  );
}

export default TableViewWrapper;