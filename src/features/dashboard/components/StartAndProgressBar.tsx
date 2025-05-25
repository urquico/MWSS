import IconStarFilled from '@/components/icons/IconStarFilled';
import Progress from '@/components/ui/Progress';

interface StartAndProgressBarProps {
  progressValue: number;
  starValue: number;
  color: string;
}

function StartAndProgressBar({
  progressValue,
  starValue,
  color,
}: StartAndProgressBarProps) {
  return (
    <main className='flex items-center space-x-3'>
      <IconStarFilled color='#afafaf' className='h-4 w-4' />
      <p className='font-semibold'>{starValue}</p>
      <div className='flex-1'>
        <Progress value={progressValue} color={color} />
      </div>
    </main>
  );
}

export default StartAndProgressBar;
