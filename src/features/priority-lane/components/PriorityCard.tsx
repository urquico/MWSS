import IconNarrowRight from '@/components/icons/IconNarrowRight';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';

interface PriorityCardProps {
  name?: string;
  icon?: React.ReactNode;
  color?: string;
  onClick: () => void;
}

function PriorityCard({
  name = 'Button',
  icon,
  color = '#0e2f65',
  onClick,
}: PriorityCardProps) {
  return (
    <Card
      className='flex h-full w-full flex-col items-center justify-center'
      style={{ borderColor: color }}
      shadow='none'
      onClick={onClick}
      withBorder
    >
      <section
        className='flex h-full w-full flex-col items-center justify-center gap-4'
        style={{ color: color }}
      >
        {icon}
        <Text className='text-center font-inter text-xl font-semibold leading-none lg:text-2xl small-kiosk:text-xl medium-kiosk:px-4 medium-kiosk:text-4xl large-kiosk:text-4xl'>
          {name}
        </Text>
        <IconNarrowRight className='size-6 medium-kiosk:size-10 large-kiosk:size-12' />
      </section>
    </Card>
  );
}

export default PriorityCard;
