import Text from '@/components/ui/Text';
import { useDashboardQuery } from '@/features/dashboard/api/query/dashboard';

import { AdminDashboardProvider } from '@/features/dashboard/provider/admin-dashboard-provider';
import { AdminDashboard } from '@/features/dashboard/types/dashboard-types';
import DashboardSummary from './DashboardSummary';
import TrendLineChart from '../chart/TrendLineChart';
import { MantineProvider } from '@mantine/core';

function DashboardPage() {
  const { data } = useDashboardQuery();

  return (
    <AdminDashboardProvider data={data?.data as AdminDashboard}>
      <main className='flex min-h-screen w-full flex-col items-center justify-start gap-4 overflow-hidden bg-[#f4f6ff] p-10'>
        <header className='w-full text-3xl font-bold text-left text-primary'>
          Dashboard
        </header>
        <section className='flex flex-col items-center justify-between w-full gap-2 xl:flex-row'>
          <Text className='items-start w-full text-2xl font-bold'>sample desc</Text>
          {/* <ExportButton /> */}
        </section>
        <section className='w-full h-full'>
          <DashboardSummary />
          <TrendLineChart />
        </section>
        <section className='grid w-full h-full grid-cols-1 gap-4 xl:grid-cols-2'>
          {/* <VisitorChart />
          <AverageServing /> */}
        </section>
        <section className='grid w-full h-full grid-cols-1 gap-4 xl:grid-cols-2'>
          {/* <CustomerSatisfaction /> */}
          {/* <SatisfactionChart /> <OverallExperience /> */}
        </section>
        <section className='grid w-full h-full grid-cols-1 gap-4 xl:grid-cols-4'>
          {/* <RatingSummary />
          <StarRating /> */}
        </section>
      </main>
    </AdminDashboardProvider>
  );
}

export default DashboardPage;
