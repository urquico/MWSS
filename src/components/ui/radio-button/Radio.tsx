import Text from '@/components/ui/Text';
import {
  RadioComponentProps,
  RadioProps,
} from '@/components/ui/radio-button/radio.d';
import {
  Radio as MantineRadio,
  RadioCard,
  RadioGroup,
  RadioIndicator,
} from '@mantine/core';

/**
 * Radio component is a styled radio button component.
 *
 * @param {RadioProps} props - Properties to customize the radio button.
 * @returns {JSX.Element} A styled radio button component.
 *
 * @example
 * <Radio />
 *
 * @dependencies
 * - Radio: A component for displaying radio buttons.
 */

function Radio({ id, label, ...props }: RadioProps) {
  return (
    <main className='flex items-center gap-4'>
      <MantineRadio id={id} size='lg' {...props} />
      <label htmlFor={id}>
        <Text className='font-inter text-lg leading-none small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-2xl'>
          {label}
        </Text>
      </label>
    </main>
  );
}

Radio.Group = RadioGroup;
Radio.Card = RadioCard;
Radio.Indicator = RadioIndicator;

export default Radio as RadioComponentProps;
