import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { ActiveRoute } from '@/types/routes-enums';
import { Loader } from "@mantine/core";

// Lazy imports
const LeaseManagementDashboard = lazy(() => import('./LeaseManagementDashboard'));
const RawWaterManagementDashboard = lazy(() => import('./RawWaterManagementDashboard'));


function DashboardPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  let DashboardComponent: React.FC | null = null;

  if (currentPath === ActiveRoute.LEASE_MANAGEMENT_DASHBOARD) {
    DashboardComponent = LeaseManagementDashboard;
  } else if (currentPath === ActiveRoute.RAW_WATER_DASHBOARD) {
    DashboardComponent = RawWaterManagementDashboard;
  } else {
    return <div>Dashboard Not Found</div>;
  }

  return (
    <Suspense fallback={<Loader size="sm" mt="md" />}>
      <DashboardComponent />
    </Suspense>
  );
}

export default DashboardPage;