import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';

interface QueueCardProps {
  bg?: string;
  queueNumber: string;
  size?: string;
}

/**
 *
 * @description
 * QueueCard displays the queue number
 *
 * @param bg - The background color of the card
 * @param queueNumber - The queue number
 * @returns A card component that displays the queue number
 *
 * @category Components
 *
 * @example
 * <QueueCard queueNumber='A001' />
 *
 **/

function QueueCard({
  bg = 'bg-white',
  queueNumber,
  size = 'text-xl md:text-xl lg:text-2xl xl:text-3xl',
}: QueueCardProps) {
  return (
    <Card
      className={`monitor:h-44 monitor:max-w-[55rem] flex w-full max-w-96 flex-col items-center justify-center gap-2 p-4 text-center sm:h-24 ${bg} font-inter`}
      withBorder
    >
      <Text className={`monitor:text-5xl font-bold ${size}`}>
        {queueNumber}
      </Text>
    </Card>
  );
}

export default QueueCard;
