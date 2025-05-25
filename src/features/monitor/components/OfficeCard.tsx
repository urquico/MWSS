import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';

interface OfficeCardProps {
  office: string;
  counters: number;
  onClick?: () => void;
}

/**
 *
 * @description
 * OfficeCard displays the office name and number of monitors available
 *
 * @param office - The office name
 * @param onClick - The function to be executed when the card is clicked
 * @returns A card component that displays the office name and number of monitors available
 *
 * @category Components
 *
 * @example
 * <OfficeCard office='Passport Renewal' monitors={1} />
 *
 **/

function OfficeCard({ office, counters, onClick }: OfficeCardProps) {
  return (
    <Card
      className='flex h-28 items-center justify-center monitor:h-52 monitor:p-8'
      radius='md'
      onClick={onClick}
      withBorder
    >
      <section className='flex flex-col items-center justify-center gap-4'>
        <Text className='text-center text-base font-bold text-primary md:text-lg monitor:text-4xl'>
          {office}
        </Text>
        <Text className='text-center text-sm font-bold text-lightGray md:text-base monitor:text-2xl'>
          Available counter/s: {counters}
        </Text>
      </section>
    </Card>
  );
}

export default OfficeCard;
