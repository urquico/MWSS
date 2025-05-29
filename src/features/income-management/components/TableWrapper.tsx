import DataView from './DataView';
import { useLocation } from 'react-router-dom';
import { getViewConfig } from '@/features/income-management/utils/route-view-config';
import { Box, Text } from '@mantine/core';


/**
 * Wrapper component for displaying a data view based on the current route.
 *
 * Retrieves the current location using `useLocation`, determines the appropriate
 * view configuration with `getViewConfig`, and renders the `DataView` component
 * with the resolved configuration.
 *
 * @returns {JSX.Element} The rendered data view wrapped in a div with a dynamic title.
 */

function TableViewWrapper() {
  const location = useLocation();
  const config = getViewConfig(location.pathname);

  return (
    <Box>
      <Text fz={36} fw={500} className='text-blue-950 font-roboto-slab'>{config.title}</Text>
      <DataView config={config} />
    </Box>
  );
}

export default TableViewWrapper;