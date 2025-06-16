import { Grid } from '@mantine/core';
import { AdminDashboardProvider } from '@/features/dashboard/provider/admin-dashboard-provider';
import { useDashboardData } from '../types/dummy';
import DashboardSummary from '../chart/DashboardSummary';
import TrendLineChart from '../chart/TrendLineChart';
import LesseeTypePieChart from '../chart/PieChart';
import Text from '@/components/ui/Text';
import LesseeTypeBarChart from '../chart/BarChart';
import BillingDonutChart from '../chart/DonutChart';

function LeaseManagementDashboard() {
  // Use the centralized dummy data, specify 'lease'
  const dummyData = useDashboardData('lease');

  const {
    summaryData,
    lesseeTypeBarData,
    donutChartData,
    lesseeTypeData,
    trendData,
  } = dummyData;
  
    // Guard: Only render charts if all required data is present
    if (!summaryData || !lesseeTypeBarData || !lesseeTypeData || !trendData || !donutChartData) {
        return <div>Loading...</div>;
    }

  const chartLayout = [
    { span: 7, component: <DashboardSummary items={summaryData.items} /> },
    { span: 5, component: <LesseeTypePieChart data={lesseeTypeData} /> },
    { span: 7, component: <TrendLineChart {...trendData} /> },
    { span: 5, component: <LesseeTypeBarChart data={lesseeTypeBarData} /> },
    { span: 12, component: <BillingDonutChart data={donutChartData} /> },
  ];

  return (
    <AdminDashboardProvider data={dummyData}>
      <main className="flex w-full flex-col items-center justify-start gap-4  bg-[#f4f6ff] p-10">
        <header className='w-full text-3xl font-bold text-left text-primary font-roboto-slab'>
          Lease Management Dashboard
        </header>
        <section className='flex flex-col items-center justify-between w-full gap-2 xl:flex-row'>
          <Text className='items-start w-full text-2xl font-bold'></Text>
        </section>
        <Grid gutter="xl" className="w-full h-full">
          {chartLayout.map(({ span, component }, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, md: span }}
            >
              <div className="h-full">{component}</div>
            </Grid.Col>
          ))}
        </Grid>
      </main>
    </AdminDashboardProvider>
  );
}

export default LeaseManagementDashboard;