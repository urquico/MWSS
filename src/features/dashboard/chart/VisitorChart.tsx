import IconPeopleInQueue from '@/components/icons/IconPeopleInQueue';
import ChartHeader from '@/features/dashboard/chart/ChartHeader';
import { VisitorChartTooltip } from '@/features/dashboard/chart/VisitorToolTip';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { AreaChart } from '@mantine/charts';
import { useContext } from 'react';

function VisitorChart() {
  const data = useContext(AdminDashboardContext);

  const defaultVisitorData = [
    { month: 'JAN', visitors: 0 },
    { month: 'FEB', visitors: 0 },
    { month: 'MAR', visitors: 0 },
    { month: 'APR', visitors: 0 },
    { month: 'MAY', visitors: 0 },
    { month: 'JUN', visitors: 0 },
    { month: 'JUL', visitors: 0 },
    { month: 'AUG', visitors: 0 },
    { month: 'SEP', visitors: 0 },
    { month: 'OCT', visitors: 0 },
    { month: 'NOV', visitors: 0 },
    { month: 'DEC', visitors: 0 },
  ];

  const visitorChartData =
    data?.data?.visitors.visitors.map((visitor) => ({
      month: visitor.month,
      visitors: visitor.visitors,
    })) || defaultVisitorData;

  return (
    <main className='flex h-full w-full flex-col rounded-md border border-[#cbd5e1] bg-white p-10'>
      <ChartHeader
        hide={true}
        title='No. of Visitors'
        leftSection={
          <IconPeopleInQueue stroke='#ffc90a' className='ml-1 mt-1' />
        }
        iconBgColor='bg-[#fff5d3] '
      />

      <section className='mb-4'>
        <p className='font-semibold text-[#888888]'>Total no. of Visitors</p>
        <p className='text-4xl font-bold'>
          {data?.data?.visitors.totalVisitors ?? 'No visitor data available'}
        </p>
      </section>

      <div className='relative -ml-5'>
        {visitorChartData.every((item) => item.visitors === 0) ? (
          <p className='flex h-full w-full items-center justify-center text-center text-lg font-semibold text-[#888888]'>
            No data available
          </p>
        ) : (
          <AreaChart
            withDots
            xAxisProps={{ padding: { left: 10, right: 10 } }}
            curveType='bump'
            h={300}
            data={visitorChartData}
            dataKey='month'
            series={[{ name: 'visitors', color: 'yellow' }]}
            withGradient
            yAxisProps={{ domain: [0, 100] }}
            className='w-full'
            tooltipAnimationDuration={200}
            tooltipProps={{
              content: ({ coordinate, payload, label }) =>
                coordinate ? (
                  <div
                    style={{
                      position: 'absolute',
                      top: `${(coordinate?.y ?? 0) - 50}px`,
                      left: `${coordinate?.x ?? 0}px`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <VisitorChartTooltip label={label} payload={payload} />
                  </div>
                ) : null,
            }}
            activeDotProps={{ r: 6, strokeWidth: 1, fill: '#fff' }}
            connectNulls
          />
        )}
      </div>
    </main>
  );
}

export default VisitorChart;
