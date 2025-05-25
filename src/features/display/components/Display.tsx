import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { useQueueDisplayQuery } from '@/features/display/api/query/display-queue';
import CounterCard from '@/features/display/components/CounterCard';
import QueueCard from '@/features/display/components/QueueCard';
import useScreenSize from '@/hooks/screen-size';
import { SimpleGrid } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';

/**
 * Display Component
 * A component that displays the queue numbers for each counter.
 *
 * @component
 * @returns {JSX.Element} The rendered Display component.
 *
 * @example
 * <Display />
 *
 * @dependencies
 * - Button: A button component for user actions.
 * - Submitting: A component for displaying a loading state.
 * - Text: A component for displaying text.
 * - ErrorPage: A component for displaying an error page.
 * - CounterCard: A component for displaying the counter name and service name.
 * - QueueCard: A component for displaying the queue number.
 */

function Display() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { xl, monitor } = useScreenSize();

  const {
    data: queues,
    isLoading,
    isError,
    error,
  } = useQueueDisplayQuery(Number(id));

  if (isLoading) {
    return <Submitting title='Fetching queue lists please wait...' />;
  }

  if (isError || error) {
    return <ErrorPage status={error?.status} message={error?.message} />;
  }

  if (!queues?.data?.counter || queues?.data?.counter.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <h1 className='text-lg font-bold text-lightGray md:text-2xl'>
          No Queues Found
        </h1>
      </div>
    );
  }

  const counterCardSize = (columns: number) => {
    switch (true) {
      case columns >= 8:
        return 'text-base md:text-[0.5rem] lg:text-base xl:text-xl';
      default:
        return 'text-base md:text-sm lg:text-2xl xl:text-3xl';
    }
  };

  const queueCardSize = (columns: number) => {
    switch (true) {
      case columns >= 8:
        return 'text-xs md:text-sm';
      case columns >= 6:
        return 'text-xs md:text-sm lg:text-base xl:text-xl';
      default:
        return 'text-xl md:text-xl lg:text-2xl xl:text-3xl';
    }
  };

  const columns = queues?.data?.counter.length || 1;

  return (
    <main className='flex h-full w-full flex-col p-8'>
      <section className='flex-1 overflow-y-auto scrollbar-hide'>
        {queues.data.counter && (
          <SimpleGrid cols={xl ? columns : 1 || monitor ? columns : 1}>
            {queues.data.counter.map((counter, index) => {
              const displayedQueues = monitor
                ? counter.queues.slice(0, 8)
                : counter.queues.slice(0, 5);
              const remainingQueues =
                counter.queues.length - displayedQueues.length;

              return (
                <div
                  className='flex flex-col items-center gap-2 monitor:gap-6'
                  key={index}
                >
                  <CounterCard
                    counter={counter.counter_name}
                    size={counterCardSize(columns)}
                  />
                  {displayedQueues.map((queue, index) => (
                    <QueueCard
                      queueNumber={queue}
                      key={index}
                      bg={index === 0 ? 'bg-primary text-white' : 'text-black'}
                      size={queueCardSize(columns)}
                    />
                  ))}
                  {remainingQueues > 0 && (
                    <Text className='text-center text-sm text-lightGray md:text-base'>
                      {remainingQueues} more queue
                      {remainingQueues > 1 ? 's' : ''}
                    </Text>
                  )}
                </div>
              );
            })}
          </SimpleGrid>
        )}
      </section>
    </main>
  );
}

export default Display;
