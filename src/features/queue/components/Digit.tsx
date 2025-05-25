import Text from '@/components/ui/Text';

interface DigitProps {
  value: number;
}

/**
 * Digit Component
 * A component that displays a string of digits, highlighting non-zero digits.
 * It changes the style of the digits based on whether they are zero or non-zero.
 * If the value is zero, it displays '00' with a specific color.
 * If the value is a single digit, it displays a leading zero with a different color.
 *
 * @component
 * @param {DigitProps} props - The props for the Digit component.
 * @param {string} props.value - The string of digits to display.
 * @param {boolean} props.hasNonZero - A flag indicating if there are non-zero digits.
 * @returns {JSX.Element} A styled main section displaying the digits.
 *
 * @example
 * <Digit value="0123" hasNonZero={false} />
 *
 * @dependencies
 * - Text: A UI component for displaying individual digits.
 */

function Digit({ value }: DigitProps) {
  const displayValue =
    value === 0 ? (
      <span className='text-[#d4d4d4]'>00</span>
    ) : value < 10 ? (
      <>
        <span className='text-[#d4d4d4]'>0</span>
        {value}
      </>
    ) : (
      value
    );

  return (
    <main className='flex w-1/6 items-center justify-center'>
      <Text className='text-lg font-bold text-[#777d86] md:text-xl small-kiosk:text-3xl medium-kiosk:text-5xl large-kiosk:text-5xl'>
        {displayValue}
      </Text>
    </main>
  );
}

export default Digit;
