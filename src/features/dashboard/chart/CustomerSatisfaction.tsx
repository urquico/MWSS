import IconFriends from '@/components/icons/IconFriends';
import IconPoint from '@/components/icons/IconPoint';
import Paper from '@/components/ui/Paper';
import Text from '@/components/ui/Text';
import ChartHeader from '@/features/dashboard/chart/ChartHeader';
import { BarChart } from '@mantine/charts';
import { TooltipProps } from 'recharts';
import { Payload } from 'recharts/types/component/DefaultTooltipContent';

function ChartTooltip({ label, payload }: TooltipProps<number, string>) {
  if (!payload || payload.length === 0) return null;

  const colors: Record<string, string> = {
    speedOfService: '#0e3487',
    staffPoliteness: '#b4d8ff',
  };

  return (
    <Paper px='md' py='sm' withBorder shadow='md' radius='md' className='w-32'>
      <Text
        fw={500}
        mb={5}
        style={{ display: 'flex', alignItems: 'center' }}
        className='w-full place-content-center'
      >
        {label}
      </Text>
      {payload?.map((item: Payload<number, string>) => (
        <Text
          key={item.dataKey || 'unknown'}
          fz='sm'
          className='flex items-center gap-2'
        >
          <IconPoint
            color={colors[item.name || 'speedOfService']}
            className='h-5 w-5'
          />
          {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function CustomerSatisfaction() {
  const data = [
    {
      feedbackLevels: 5,
      speedOfService: 100,
      staffPoliteness: 90,
    },
    {
      feedbackLevels: 4,
      speedOfService: 10,
      staffPoliteness: 20,
    },
    { feedbackLevels: 3, speedOfService: 40, staffPoliteness: 100 },
    { feedbackLevels: 2, speedOfService: 10, staffPoliteness: 20 },
    { feedbackLevels: 1, speedOfService: 80, staffPoliteness: 40 },
  ];

  return (
    <main className='h-full w-full rounded-md border border-[#ced7e2] bg-white p-4 pb-8'>
      <ChartHeader
        title='Customer Satisfaction'
        leftSection={<IconFriends stroke='#3fc8e4' />}
        hide={false}
      />
      <section className='m-5 flex w-full items-center justify-center gap-2 text-center font-semibold text-[#959595]'>
        <p className='flex flex-row items-center'>
          <IconPoint color='#0e3487' className='h-10 w-10' />
          Speed of Service
        </p>
        <p className='flex flex-row items-center'>
          <IconPoint color='#b4d8ff' className='h-10 w-10' />
          Staff Politeness & Helpfulness
        </p>
      </section>
      <div className='w-full'>
        <BarChart
          className='w-full px-8'
          h={250}
          data={data}
          dataKey='feedbackLevels'
          orientation='vertical'
          yAxisProps={{
            width: 30,
            tick: {
              fontSize: 16,
              fontWeight: 'bold',
              fill: '#333',
            },
            tickMargin: 10,
          }}
          barProps={{ radius: [0, 10, 10, 0] }}
          series={[
            { name: 'speedOfService', color: '#0e3487' },
            { name: 'staffPoliteness', color: '#b4d8ff' },
          ]}
          tooltipProps={{
            content: (props) => <ChartTooltip {...props} />,
          }}
        />
      </div>
    </main>
  );
}

export default CustomerSatisfaction;
