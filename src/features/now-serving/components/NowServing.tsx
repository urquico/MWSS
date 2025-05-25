import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { API_URL } from '@/constants/constants';
import { useMonitorListQuery } from '@/features/now-serving/api/query/monitor-list';
import Announcement from '@/features/now-serving/components/Announcement';
import ServingCard from '@/features/now-serving/components/ServingCard';
import VideoAds from '@/features/now-serving/components/VideoAds';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Speech from 'react-text-to-speech';

function NowServing() {
  const [searchParams] = useSearchParams();
  const monitor = searchParams.get('id');
  const {
    data: monitors,
    isLoading,
    isError,
    error,
  } = useMonitorListQuery(Number(monitor));

  if (isLoading) {
    return <Submitting title='Fetching monitor list please wait...' />;
  }

  if (isError) {
    return <ErrorPage status={error?.status} message={error?.message} />;
  }

  if (!monitors?.data?.queues) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <h1 className='text-lg font-bold text-lightGray md:text-2xl'>
          No Queues Found
        </h1>
      </div>
    );
  }

  if (monitors.data.queues.total > 5) {
    return (
      <main className='flex h-full w-full flex-col gap-4 p-8 monitor:gap-8'>
        {monitors.data.queues.total === 8 ||
        monitors.data.queues.total === 9 ||
        monitors.data.queues.total === 10 ? (
          <section className='flex h-[20%] w-full items-center justify-center overflow-hidden rounded-md bg-primary'>
            <div className='animate-marquee flex items-center justify-center gap-2 whitespace-nowrap text-white'>
              <Text className='text-4xl font-bold'>
                {monitors.data.monitor.title_announcement}:{' '}
              </Text>
              <Text className='text-3xl font-semibold'>
                {monitors.data.monitor.announcement}
              </Text>
            </div>
          </section>
        ) : (
          <header className='h-[5%]'>
            <Text className='text-3xl font-bold uppercase monitor:text-5xl'>
              Now Serving
            </Text>
          </header>
        )}

        <section
          className={`grid grid-flow-col grid-rows-5 monitor:gap-8 ${
            monitors.data.queues.total === 8 ||
            monitors.data.queues.total === 9 ||
            monitors.data.queues.total === 10
              ? 'h-[80%] gap-2'
              : 'h-[95%] gap-4'
          }`}
        >
          {monitors.data.queues.now_serving?.map((now, index) => (
            <ServingCard
              variant='now_serving'
              key={index}
              serviceName={now.current_service.service_name}
              counter={now.current_counter.counter_name}
              queueNumber={now.queue_number}
            />
          ))}
          {monitors.data.queues.recalling_counters?.map((recall, index) => (
            <React.Fragment key={index}>
              <ServingCard
                variant='recall'
                serviceName={recall.current_service.service_name}
                counter={recall.current_counter.counter_name}
                queueNumber={recall.queue_number}
              />
              <div className='hidden'>
                {recall.current_counter.is_recalling && (
                  <Speech
                    text={`Queue number ${recall.queue_number} please proceed to ${recall.current_counter.counter_name}`}
                    autoPlay
                  />
                )}
              </div>
            </React.Fragment>
          ))}
          {monitors.data.queues.next_serving?.map((next, index) => (
            <React.Fragment key={index}>
              <ServingCard
                variant='next_serving'
                serviceName={next.current_service.service_name}
                counter={next.current_counter.counter_name}
                queueNumber={next.queue_number}
              />
              {next.current_counter.is_next && (
                <audio src='/ding.m4a' autoPlay />
              )}
            </React.Fragment>
          ))}
          {monitors.data.queues.empty_counters?.map((empty, index) => (
            <ServingCard
              variant='empty'
              key={index}
              serviceName={empty.current_service.service_name}
              counter={empty.current_counter.counter_name}
              queueNumber={empty.queue_number}
            />
          ))}
          <div
            className={`${monitors.data.queues.total === 6 && 'row-span-4'} ${monitors.data.queues.total === 7 && 'row-span-3'} ${(monitors.data.queues.total === 8 || monitors.data.queues.total === 9 || monitors.data.queues.total === 10) && 'hidden'}`}
          >
            <Announcement
              title={monitors?.data?.monitor?.title_announcement ?? ''}
              announcement={monitors?.data?.monitor?.announcement ?? ''}
            />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className='flex h-full w-full flex-col gap-4 p-8 monitor:gap-8'>
      <header className='h-[5%]'>
        <Text className='text-3xl font-bold uppercase monitor:text-5xl'>
          Now Serving
        </Text>
      </header>
      <div className='grid h-[95%] w-full grid-cols-1 gap-4 md:grid-cols-2 monitor:gap-8'>
        <section className='flex flex-col gap-4 overflow-y-auto scrollbar-hide monitor:gap-16'>
          <div className='flex flex-1 flex-col justify-between gap-4 monitor:gap-8'>
            {monitors.data.queues.now_serving?.map((now, index) => (
              <ServingCard
                variant='now_serving'
                key={index}
                serviceName={now.current_service.service_name}
                counter={now.current_counter.counter_name}
                queueNumber={now.queue_number}
              />
            ))}
            {monitors.data.queues.recalling_counters?.map((recall, index) => (
              <React.Fragment key={index}>
                <ServingCard
                  variant='recall'
                  serviceName={recall.current_service.service_name}
                  counter={recall.current_counter.counter_name}
                  queueNumber={recall.queue_number}
                />
                <div className='hidden'>
                  {recall.current_counter.is_recalling && (
                    <Speech
                      text={`Queue number ${recall.queue_number} please proceed to ${recall.current_counter.counter_name}`}
                      autoPlay
                    />
                  )}
                </div>
              </React.Fragment>
            ))}
            {monitors.data.queues.next_serving?.map((next, index) => (
              <React.Fragment key={index}>
                <ServingCard
                  variant='next_serving'
                  serviceName={next.current_service.service_name}
                  counter={next.current_counter.counter_name}
                  queueNumber={next.queue_number}
                />
                {next.current_counter.is_next && (
                  <audio src='/ding.m4a' autoPlay />
                )}
              </React.Fragment>
            ))}
            {monitors.data.queues.empty_counters?.map((empty, index) => (
              <ServingCard
                variant='empty'
                key={index}
                serviceName={empty.current_service.service_name}
                counter={empty.current_counter.counter_name}
                queueNumber={empty.queue_number}
              />
            ))}
          </div>
        </section>
        <section className='flex flex-col gap-4 monitor:gap-8'>
          <div>
            <VideoAds
              src={
                monitors?.data?.monitor.video_url
                  ? `${API_URL}/uploads/${monitors.data.monitor.video_url}`
                  : ''
              }
            />
          </div>
          <div className='flex-1'>
            <Announcement
              title={monitors.data?.monitor?.title_announcement ?? ''}
              announcement={monitors.data?.monitor?.announcement ?? ''}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default NowServing;
