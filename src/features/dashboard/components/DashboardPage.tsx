
import Text from '@/components/ui/Text';
import { AdminDashboardProvider } from '@/features/dashboard/provider/admin-dashboard-provider';
import DashboardSummary from './DashboardSummary';
import TrendLineChart from '../chart/TrendLineChart';
import LesseeTypePieChart from '../chart/PieChart';
import { useDashboardDummyData } from '../types/dummy';
import LesseeTypeBarChart from '../chart/BarChart';
import BillingDonutChart from '../chart/DonutChart';
import { Grid } from '@mantine/core';


function DashboardPage() {
  const dummyData = useDashboardDummyData();

  const {
    summaryData,
    lesseeTypeBarData,
    donutChartData,
    lesseeTypeData,
    trendData,

  } = dummyData;
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

export default DashboardPage;
