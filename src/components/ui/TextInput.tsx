import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from '@mantine/core';
import React from 'react';

interface TextInputProps extends MantineTextInputProps {}

/**
 * TextInputLogin Component
 * A customizable password input field built on top of Mantine's TextInput component.
 * Includes support for error states, custom styling, and responsive height for different kiosk modes.
 *
 * @component
 * @param {TextInput} props - Props to customize the password input field.
 * @param {string} [props.value] - The current value of the input field.
 * @param {function} [props.onChange] - Function to handle value changes.
 * @returns {JSX.Element} A styled password input component.
 *
 */

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <MantineTextInput
        ref={ref}
        value={value}
        onChange={onChange}
        size='lg'
        classNames={{
          root: 'font-open-sans',
          input: 'bg-white rounded-md border',
          label: 'font-open-sans font-normal pb-1 text-gray-900',
        }}
        className='w-full transition duration-200'
        {...props}
      />
    );
  }
);
TextInput.displayName = 'TextInput';
export default TextInput;