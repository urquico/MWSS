import IconLoader from '@/components/icons/IconLoader';
import Text from '@/components/ui/Text';

interface SubmittingProps {
  title: string;
}

/**
 * Submitting component displays a loading icon and a title.
 *
 * @param {SubmittingProps} props - The props for the Submitting component.
 * @param {string} props.title - The title to display below the loading icon.
 */

function Submitting({ title }: SubmittingProps) {
  return (
    <main className='flex h-full w-full items-center justify-center gap-2'>
      <IconLoader className='animate-spin' />
      <Text className='text-xl font-bold text-lightGray'>{title}</Text>
    </main>
  );
}

export default Submitting;
