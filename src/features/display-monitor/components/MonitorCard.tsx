import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';

interface OfficeCardProps {
  office: string;
  type: 'now_serving' | 'queue_display';
  monitors: number;
  onClick?: () => void;
}

/**
 *
 * @description
 * OfficeCard displays the office name and number of monitors available
 *
 * @param office - The office name
 * @param monitors - The number of monitors available
 * @param onClick - The function to be executed when the card is clicked
 * @returns A card component that displays the office name and number of monitors available
 *
 * @category Components
 *
 * @example
 * <OfficeCard office='Passport Renewal' monitors={1} />
 *
 **/

function MonitorCard({ office, type, monitors, onClick }: OfficeCardProps) {
  return (
    <Card
      className='monitor:h-52 monitor:p-8 monitor:gap-16 flex flex-col justify-center gap-4'
      radius='md'
      onClick={onClick}
      withBorder
    >
      <Text className='monitor:text-5xl text-base font-bold text-primary md:text-lg'>
        {office}
      </Text>
      <Text className='monitor:text-3xl text-sm font-semibold text-lightGray md:text-base'>
        {type === 'now_serving' ? 'Now Serving' : 'Queue Display'}
      </Text>
      <Text className='monitor:text-3xl text-xs font-semibold text-lightGray md:text-sm'>
        {monitors} Counter/s available
      </Text>
    </Card>
  );
}

export default MonitorCard;
