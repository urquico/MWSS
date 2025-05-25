import StartAndProgressBar from '@/features/dashboard/components/StartAndProgressBar';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';
import { useContext } from 'react';

function StarRating() {
  const data = useContext(AdminDashboardContext);

  const fiveStar = data?.data?.feedbackSummary.fiveStarRatings ?? 0;
  const fourStar = data?.data?.feedbackSummary.fourStarRatings ?? 0;
  const threeStar = data?.data?.feedbackSummary.threeStarRatings ?? 0;
  const twoStar = data?.data?.feedbackSummary.twoStarRatings ?? 0;
  const oneStar = data?.data?.feedbackSummary.oneStarRatings ?? 0;

  const totalRatings = fiveStar + fourStar + threeStar + twoStar + oneStar;

  const getPercentage = (count: number) =>
    totalRatings > 0 ? (count / totalRatings) * 100 : 0;

  return (
    <main className='flex h-full min-h-[15rem] w-full flex-col justify-between rounded-md border border-[#cbd5e1] bg-white p-10'>
      <StartAndProgressBar
        progressValue={getPercentage(fiveStar)}
        starValue={5}
        color='#3bb9a3'
      />
      <StartAndProgressBar
        progressValue={getPercentage(fourStar)}
        starValue={4}
        color='#dc7fff'
      />
      <StartAndProgressBar
        progressValue={getPercentage(threeStar)}
        starValue={3}
        color='#f5c042'
      />
      <StartAndProgressBar
        progressValue={getPercentage(twoStar)}
        starValue={2}
        color='#39c0f0'
      />
      <StartAndProgressBar
        progressValue={getPercentage(oneStar)}
        starValue={1}
        color='#fb7212'
      />
    </main>
  );
}

export default StarRating;
