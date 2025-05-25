import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { useDisplayMonitorQuery } from '@/features/display-monitor/api/query/display-monitor';
import MonitorCard from '@/features/display-monitor/components/MonitorCard';
import { Container } from '@mantine/core';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Display Monitor Component
 * A component that displays a list of monitors for displaying the queue numbers and now serving.
 *
 * @component
 * @returns {JSX.Element} The rendered Monitor component.
 *
 * @example
 * <DisplayMonitor />
 *
 * @dependencies
 * - Submitting: A component for displaying a loading state.
 * - Text: A component for displaying text.
 * - ErrorPage: A component for displaying an error page.
 * - MonitorCard: A component for displaying an monitor card.
 * - Container: A layout component from Mantine.
 */

function DisplayMonitor() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const {
    data: monitors,
    isLoading,
    isError,
    error,
  } = useDisplayMonitorQuery(Number(id));
  if (isLoading) return <Submitting title='Fetching offices please wait...' />;
  if (isError) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Container className='flex h-full w-full max-w-[75rem] flex-col gap-8 p-8 monitor:max-w-[100rem] monitor:gap-16'>
      <section>
        <Text className='text-xl font-bold text-primary md:text-2xl monitor:text-5xl'>
          Select Monitor
        </Text>
      </section>
      <section className='flex-1 overflow-y-auto scrollbar-hide'>
        <div className='grid flex-1 grid-cols-1 gap-4'>
          {monitors?.data?.map((monitor, index) =>
            monitors.data && monitors.data.length > 0 ? (
              <React.Fragment key={index}>
                <MonitorCard
                  key={`${index}-now-serving`}
                  office={monitor.monitor_name}
                  type='now_serving'
                  monitors={monitor.counters}
                  onClick={() =>
                    navigate(`/monitor/now-serving?id=${monitor.id}`)
                  }
                />
                {/* <MonitorCard
                  key={`${index}-queue-display`}
                  office={monitor.monitor_name}
                  type='queue_display'
                  monitors={monitor.counters}
                  onClick={() =>
                    navigate(`/monitor/queue-display?id=${monitor.id}`)
                  }
                /> */}
              </React.Fragment>
            ) : (
              <Text className='text-center text-xl font-bold text-lightGray md:text-2xl'>
                No monitor/s available
              </Text>
            ),
          )}
        </div>
      </section>
    </Container>
  );
}

export default DisplayMonitor;
