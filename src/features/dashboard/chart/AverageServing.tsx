import IconHourGlass from '@/components/icons/IconHourGlass';
import IconPoint from '@/components/icons/IconPoint';
import { BarChartTooltip } from '@/features/dashboard/chart/BarChartToolTip';
import ChartHeader from '@/features/dashboard/chart/ChartHeader';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { BarChart } from '@mantine/charts';
import { useContext } from 'react';

function AverageServing() {
  const data = useContext(AdminDashboardContext);

  const chartData =
    data?.data?.servingWaitingTime.times?.map((entry) => ({
      month: entry.month,
      Serving: parseFloat((entry?.averageServingTime || 0).toFixed(2)),
      Waiting: parseFloat((entry?.averageWaitingTime || 0).toFixed(2)),
    })) || [];

  return (
    <main className='flex h-full w-full flex-col rounded-md border border-[#cbd5e1] bg-white p-10'>
      <ChartHeader
        title='Average Serving/Waiting Time'
        leftSection={<IconHourGlass stroke='#3366d8' />}
        iconBgColor='bg-[#f0f7ff]'
        hide={true}
      />

      {/* Legend */}
      <section className='m-5 flex w-full items-center justify-center font-semibold text-[#959595]'>
        <p className='mr-4 flex flex-row items-center'>
          <IconPoint color='#004fff' className='h-6 w-6' /> Serving
        </p>
        <p className='flex flex-row items-center'>
          <IconPoint color='#b4d8ff' className='h-6 w-6' /> Waiting
        </p>
      </section>

      {/* Empty State Handling */}
      {chartData.length === 0 ? (
        <p className='text-gray-500 text-center'>No available data</p>
      ) : (
        <BarChart
          h={300}
          data={chartData}
          dataKey='month'
          series={[
            { name: 'Serving', color: '#004fff' },
            { name: 'Waiting', color: '#b4d8ff' },
          ]}
          tickLine='y'
          tooltipProps={{
            content: ({ label, payload }) => (
              <BarChartTooltip label={label} payload={payload} />
            ),
          }}
        />
      )}
    </main>
  );
}

export default AverageServing;
