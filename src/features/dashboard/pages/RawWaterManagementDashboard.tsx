import { Grid } from '@mantine/core';
import { useDashboardData } from '../types/dummy';
import { AdminDashboardProvider } from '@/features/dashboard/provider/admin-dashboard-provider';
import DashboardSummary from '../chart/DashboardSummary';
import LesseeTypePieChart from '../chart/PieChart';
import Text from '@/components/ui/Text';
import MonthlyBarChart from '../chart/MonthlyBarChart';

function RawWaterManagementDashboard() {
    // Use the centralized dummy data, specify 'rawWater'
    const dummyData = useDashboardData('rawWater');

    const {
        summaryData,
        monthlyBarData,
        lesseeTypeData,
    } = dummyData;

    // Guard: Only render charts if all required data is present
    if (!summaryData || !monthlyBarData || !lesseeTypeData) {
        return <div>Loading...</div>;
    }

    const chartLayout = [
        { span: 7, component: <DashboardSummary items={summaryData.items} title='MWSS Assets' /> },
        {
            span: 5,
            component: (
                <MonthlyBarChart
                    data={monthlyBarData.data}
                    series={monthlyBarData.series}
                    dataKey="month"
                    title={monthlyBarData.title}
                    description={monthlyBarData.period}
                    h={monthlyBarData.height}
                />
            ),
        }, { span: 12, component: <LesseeTypePieChart data={lesseeTypeData} /> },
    ];

    return (
        <AdminDashboardProvider data={dummyData}>
            <main className="flex w-full flex-col items-center justify-start gap-4 bg-[#f4f6ff] p-10">
                <header className='w-full text-3xl font-bold text-left text-primary font-roboto-slab'>
                    Raw Water Monitoring Dashboard
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

export default RawWaterManagementDashboard;