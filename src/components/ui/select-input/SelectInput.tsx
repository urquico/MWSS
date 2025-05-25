import useKioskStyles from '@/components/ui/select-input/select-input-styles';
import { ComboboxData, Select, SelectProps } from '@mantine/core';

interface SelectInputProps {
  data: ComboboxData;
}

/**
 * SelectInput component renders a customizable select input using Mantine's Select component.
 *
 * @param {ComboboxData} [data] - The data to populate the select options.
 * @param {SelectProps} props - Additional properties to customize the select input.
 * @returns {JSX.Element} A styled select input component.
 *
 * @constant {boolean} isKiosk - Determines if the screen width is 1080px or less, affecting the font size.
 */

function SelectInput({ data, ...props }: SelectInputProps & SelectProps) {
  if (!data) {
    throw new Error('SelectInput requires data');
  }

  const { padding, fontSize, height, optionSize } = useKioskStyles();

  return (
    <Select
      data={data}
      clearable
      inputSize='3rem'
      comboboxProps={{ dropdownPadding: '1rem' }}
      styles={{
        input: {
          backgroundColor: 'white',
          padding: padding,
          fontSize: fontSize,
          height: height,
        },
        option: {
          fontSize: optionSize,
        },
      }}
      {...props}
      variant='filled'
      checkIconPosition='left'
    />
  );
}

export default SelectInput;
