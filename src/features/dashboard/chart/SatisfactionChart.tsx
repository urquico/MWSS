import IconChartPie from '@/components/icons/IconChartPie';
import Button from '@/components/ui/Button';
import ChartHeader from '@/features/dashboard/chart/ChartHeader';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { DonutChart } from '@mantine/charts';
import { useContext, useState } from 'react';

function SatisfactionChart() {
  const [showLabels, setShowLabels] = useState(true);
  const [showLabelLines, setShowLabelLines] = useState(true);

  // Fetch satisfaction data
  const data = useContext(AdminDashboardContext);
  // Extract values with fallback defaults
  const totalClients = data?.data?.satisfactionRate.total ?? 0;
  const satisfiedClients = data?.data?.satisfactionRate.satisfiedClients ?? 0;
  const satisfactionPercentage = data?.data?.satisfactionRate.percentage ?? 0;

  // Donut Chart Data
  const satisfactionData = [
    {
      name: 'Satisfied Clients',
      value: satisfiedClients,
      color: '#295dcf',
    },
    {
      name: 'Unsatisfied Clients',
      value: Math.max(0, totalClients - satisfiedClients), // Prevent negative values
      color: '#efefef',
    },
  ];

  const hasData = totalClients > 0;

  return (
    <main className='relative w-full rounded-md border border-[#cbd5e1] bg-white p-4 pb-10'>
      <ChartHeader
        hide={true}
        title='Satisfaction'
        leftSection={<IconChartPie />}
        rightSection={
          hasData && (
            <div className='flex space-x-2'>
              {showLabels && (
                <Button
                  variant='outline'
                  onClick={() => setShowLabelLines((prev) => !prev)}
                >
                  {showLabelLines ? 'Hide Label Lines' : 'Show Label Lines'}
                </Button>
              )}
              <Button
                variant='outline'
                onClick={() => setShowLabels((prev) => !prev)}
              >
                {showLabels ? 'Hide Data' : 'Show Data'}
              </Button>
            </div>
          )
        }
      />

      {/* Percentage Display */}
      {hasData && (
        <section className='absolute inset-x-0 right-56 top-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#eaeaea] text-center text-sm font-bold text-black shadow-md'>
          {`${satisfactionPercentage}%`}
        </section>
      )}

      {/* Chart Display */}
      <section className='relative h-[32vh] w-full'>
        {hasData ? (
          <>
            <DonutChart
              withTooltip={true}
              withLabelsLine={showLabelLines}
              size={235}
              thickness={26}
              data={satisfactionData}
              className='h-full w-full'
              withLabels={showLabels}
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-lg font-semibold text-[#888888]'>
              <p>Feedback</p>
              <p>Satisfaction</p>
              <p className='text-3xl font-bold text-black'>{totalClients}</p>
            </div>
          </>
        ) : (
          <div className='flex h-full w-full items-center justify-center text-center text-lg font-semibold text-[#888888]'>
            No data available
          </div>
        )}
      </section>

      {/* Percentage Increase Display */}
      {hasData && (
        <p className='text-center text-lg font-semibold'>
          Increased by {satisfactionPercentage}% from last month
        </p>
      )}
    </main>
  );
}

export default SatisfactionChart;
