import TextInput from '@/components/ui/TextInput';
import { NumberInput } from '@mantine/core';
import { ReactNode } from 'react';

interface KioskInputProps {
  textKeyboard?: boolean;
  value: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  numberChange?: (
    e: React.ChangeEvent<HTMLInputElement> | string | number,
  ) => void;
  onFocus: () => void;
  error: ReactNode;

  label: string;
  placeholder: string;
  required?: boolean;
}

/**
 * KioskInput Component
 * A component that renders a labeled text input with an optional keyboard and error display.
 * It supports responsive design with different styles for various screen sizes.
 *
 * @component
 * @param {KioskInputProps} props - The props for the KioskInput component.
 * @param {string} props.name - The name attribute for the input element.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - The change handler for the input element.
 * @param {() => void} props.onFocus - The focus handler for the input element.
 * @param {ReactNode} props.error - The error message to display if any.
 * @param {boolean} props.isFocused - A flag indicating if the input is focused.
 * @param {() => void} props.onClick - The click handler for the action icon.
 * @param {string} props.label - The label text for the input element.
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @param {boolean} [props.required] - A flag indicating if the input is required.
 * @param {(input: string) => void} props.keyboardChange - The change handler for the keyboard input.
 * @returns {JSX.Element} A styled input component with a label, optional keyboard, and error display.
 *
 * @example
 * <KioskInput
 *   name="username"
 *   onChange={handleInputChange}
 *   onFocus={handleInputFocus}
 *   error={errorMessage}
 *   isFocused={isInputFocused}
 *   onClick={handleIconClick}
 *   label="Username"
 *   placeholder="Enter your username"
 *   required
 *   keyboardChange={handleKeyboardChange}
 * />
 *
 * @dependencies
 * - TextInput: A UI component for the text input layout.
 * - ActionIcon: A UI component for the action icon.
 * - IconKeyboardOff: An icon component for the keyboard off icon.
 * - KeyboardComponent: A UI component for the on-screen keyboard.
 */

function KioskInput({
  textKeyboard = false,
  value,
  id,
  onChange,
  numberChange,
  onFocus,
  error,
  label,
  placeholder,
  required,
}: KioskInputProps) {
  return (
    <main className='flex flex-col gap-4'>
      <label
        htmlFor={id}
        className='flex items-center gap-2 font-inter text-lg font-medium leading-none text-primary lg:text-xl small-kiosk:text-2xl medium-kiosk:text-3xl large-kiosk:text-3xl'
      >
        {label}
        {required ? (
          <span className='text-sm text-red-500'> (required)</span>
        ) : (
          <span className='text-sm text-lightGray'> (optional)</span>
        )}
      </label>
      <div className='flex w-full items-center justify-center gap-2'>
        {textKeyboard ? (
          <TextInput
            size='xl'
            id={id}
            type='text'
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            error={error}
          />
        ) : (
          <NumberInput
            size='xl'
            type='text'
            value={value}
            placeholder={placeholder}
            onChange={numberChange}
            onFocus={onFocus}
            error={error}
            min={0}
            className='w-full'
            styles={{
              input: {
                borderLeft: 'none',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: 'white',
              },
              wrapper: {
                paddingLeft: 0,
                marginLeft: 0,
                borderLeft: '0.5rem solid #4aa5de',
                borderTopLeftRadius: '0.280rem',
                borderBottomLeftRadius: '0.280rem',
              },
            }}
            hideControls
          />
        )}
      </div>
    </main>
  );
}

export default KioskInput;
