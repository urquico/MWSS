import { CheckboxProps, Checkbox as MantineCheckbox } from '@mantine/core';

/**
 * Checkbox component renders a customizable checkbox using Mantine's Checkbox component.
 *
 * @param {CheckboxProps} props - Properties to customize the checkbox.
 * @returns {JSX.Element} A styled checkbox component.
 *
 *
 */

function Checkbox({ ...props }: CheckboxProps) {
  return <MantineCheckbox {...props} />;
}

export default Checkbox;
