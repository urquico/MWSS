import IconFriends from '@/components/icons/IconFriends';
import IconPoint from '@/components/icons/IconPoint';
import Button from '@/components/ui/Button';
import ChartHeader from '@/features/dashboard/chart/ChartHeader';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { DonutChart } from '@mantine/charts';
import { useContext, useState } from 'react';

function OverallExperience() {
  const [showLabels, setShowLabels] = useState(true);
  const [showLabelLines, setShowLabelLines] = useState(true);

  const data = useContext(AdminDashboardContext);

  const overallSatisfactionData = [
    {
      name: 'Very Satisfied',
      value: data?.data?.overAllExperience.fiveStarRatings ?? 0,
      color: '#0e3487',
    },
    {
      name: 'Satisfied',
      value: data?.data?.overAllExperience.fourStarRatings ?? 0,
      color: '#1b4db8',
    },
    {
      name: 'Neutral',
      value: data?.data?.overAllExperience.threeStarRatings ?? 0,
      color: '#386ddd',
    },
    {
      name: 'Unsatisfied',
      value: data?.data?.overAllExperience.twoStarRatings ?? 0,
      color: '#7099f2',
    },
    {
      name: 'Very Unsatisfied',
      value: data?.data?.overAllExperience.oneStarRatings ?? 0,
      color: '#98b6f9',
    },
  ];

  const hasData = overallSatisfactionData.some((item) => item.value > 0);

  return (
    <main className='h-full w-full rounded-md border border-[#ced7e2] bg-white p-4 pb-8'>
      <ChartHeader
        hide={true}
        title='Overall Experience'
        leftSection={<IconFriends stroke='#3fc8e4' />}
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

      <section className='flex h-full w-full items-center justify-center xl:flex-row'>
        <div className='relative flex h-[32vh] w-2/3 items-start'>
          {!hasData ? (
            <div className='flex h-full w-full items-center justify-center text-center text-lg font-semibold text-[#888888]'>
              No data available
            </div>
          ) : (
            <>
              <DonutChart
                withTooltip={true}
                withLabelsLine={showLabelLines}
                size={235}
                thickness={40}
                data={overallSatisfactionData}
                className='h-full w-full'
                withLabels={showLabels}
              />

              <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-lg font-semibold text-[#888888]'>
                <p>Feedback</p>
                <p>Satisfaction</p>
                <p className='text-3xl font-bold text-black'>
                  {data?.data?.overAllExperience.total ?? 0}
                </p>
              </div>
            </>
          )}
        </div>

        <div className='flex w-1/3 flex-col items-start justify-center truncate p-10 text-[#757575]'>
          <p className='flex flex-row items-center'>
            <IconPoint color='#0e3487' className='h-10 w-10' /> Very Satisfied
          </p>
          <p className='flex flex-row items-center'>
            <IconPoint color='#1b4db8' className='h-10 w-10' /> Satisfied
          </p>
          <p className='flex flex-row items-center'>
            <IconPoint color='#386ddd' className='h-10 w-10' /> Neutral
          </p>
          <p className='flex flex-row items-center'>
            <IconPoint color='#7099f2' className='h-10 w-10' /> Unsatisfied
          </p>
          <p className='flex flex-row items-center'>
            <IconPoint color='#98b6f9' className='h-10 w-10' /> Very Unsatisfied
          </p>
        </div>
      </section>
    </main>
  );
}

export default OverallExperience;
