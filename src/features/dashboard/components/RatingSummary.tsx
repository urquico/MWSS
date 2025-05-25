import IconMessage from '@/components/icons/IconMessage';
import Rating from '@/features/dashboard/components/Rating';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { ActionIcon } from '@mantine/core';
import { useContext } from 'react';

function RatingSummary() {
  const data = useContext(AdminDashboardContext);

  return (
    <main className='flex h-full min-h-[15rem] items-center justify-evenly gap-8 rounded-md border border-[#cbd5e1] bg-white p-10 lg:min-w-[5rem] xl:flex-col xl:justify-center'>
      <section>
        <ActionIcon className='h-8 w-8 cursor-default rounded-full bg-[#fff5d3] hover:bg-[#fff5d3]'>
          <IconMessage color='#ffcc24' />
        </ActionIcon>
        <p className='text-xl font-bold'>Total Feedbacks</p>
        <p className='text-3xl font-semibold text-[#ffcc24]'>
          {data?.data?.feedbackSummary.totalFeedbacks}
        </p>
        <p className='text-xs text-[#afafaf]'>
          Growth in feedbacks on this year
        </p>
      </section>

      <section className=''>
        <p className='text-xl font-bold'>Average Rating</p>
        <div className='flex w-full flex-row items-center gap-4'>
          <p className='text-3xl font-bold text-primary'>
            {data?.data?.feedbackSummary.overallRating}
          </p>
          <Rating
            value={data?.data?.feedbackSummary.overallRating ?? 0}
            fraction={2}
          />
        </div>
        <p className='text-xs text-[#afafaf]'>
          Growth in feedbacks on this year
        </p>
      </section>
    </main>
  );
}

export default RatingSummary;
