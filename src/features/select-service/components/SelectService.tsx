import Paper from '@/components/ui/Paper';
import Text from '@/components/ui/Text';
import Radio from '@/components/ui/radio-button/Radio';
import { RadioProps } from '@mantine/core';

interface SelectServiceProps extends RadioProps {
  label?: string;
}

/**
 * SelectService component renders a service selection option with a checkbox and label.
 *
 * @param {string} [label] - The label text displayed next to the checkbox.
 * @param {CheckboxProps} props - Additional properties to customize the checkbox.
 * @returns {JSX.Element} A styled service selection component.
 */

function SelectService({ label = 'label', ...props }: SelectServiceProps) {
  return (
    <Paper
      withBorder
      p='lg'
      radius='md'
      shadow='xs'
      w='100%'
      className='flex cursor-pointer items-center justify-between gap-4'
    >
      <Radio id={label} {...props} size='lg' />
      <label htmlFor={label} className='flex-grow text-center'>
        <Text className='text-lg font-medium text-primary small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-2xl'>
          {label || 'Service'}
        </Text>
      </label>
    </Paper>
  );
}

export default SelectService;
