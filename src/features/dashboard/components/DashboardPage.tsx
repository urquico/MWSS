import Text from '@/components/ui/Text';
import { useDashboardQuery } from '@/features/dashboard/api/query/dashboard';
import AverageServing from '@/features/dashboard/chart/AverageServing';
import OverallExperience from '@/features/dashboard/chart/OverallExperience';
import SatisfactionChart from '@/features/dashboard/chart/SatisfactionChart';
import VisitorChart from '@/features/dashboard/chart/VisitorChart';
import OfficeCarousel from '@/features/dashboard/components/OfficeCarousel';
import RatingSummary from '@/features/dashboard/components/RatingSummary';
import StarRating from '@/features/dashboard/components/StarRating';
import { AdminDashboardProvider } from '@/features/dashboard/provider/admin-dashboard-provider';
import { AdminDashboard } from '@/features/dashboard/types/dashboard-types';

function DashboardPage() {
  const { data } = useDashboardQuery();

  return (
    <AdminDashboardProvider data={data?.data as AdminDashboard}>
      <main className='flex min-h-screen w-full flex-col items-center justify-start gap-4 overflow-hidden bg-[#f4f6ff] p-10'>
        <header className='w-full text-left text-3xl font-bold text-primary'>
          Dashboard
        </header>
        <section className='flex w-full flex-col items-center justify-between gap-2 xl:flex-row'>
          <Text className='w-full items-start text-2xl font-bold'>Offices</Text>
          {/* <ExportButton /> */}
        </section>
        <section className='h-full w-full'>
          <OfficeCarousel />
        </section>
        <section className='grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-2'>
          <VisitorChart />
          <AverageServing />
        </section>
        <section className='grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-2'>
          {/* <CustomerSatisfaction /> */}
          <SatisfactionChart /> <OverallExperience />
        </section>
        <section className='grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-4'>
          <RatingSummary />
          <StarRating />
        </section>
      </main>
    </AdminDashboardProvider>
  );
}

export default DashboardPage;
