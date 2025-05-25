import Paper from '@/components/ui/Paper';
import Text from '@/components/ui/Text';
import { TextProps } from '@mantine/core';


interface OfficeCardProps extends TextProps {
  officeName: string;
  className?: string;
  officeTextSize?: string;
  onClick?: () => void;
}

/**
 * OfficeCard component renders a styled card representing an office, which is clickable to perform an action (e.g., navigation).
 *
 * This component is customizable through its props, allowing for dynamic styles and behaviors. It uses the `Paper` component 
 * for its layout and `Text` for rendering the office name.
 *
 * @component
 *
 * @param {string} officeName - The name of the office to be displayed on the card.
 * @param {string} [className] - Additional CSS classes for styling the card.
 * @param {string} [officeTextSize] - CSS classes to customize the text size for the office name.
 * @param {function} [onClick] - Callback function triggered when the card is clicked.
 * @param {TextProps} [props] - Additional props for the `Text` component to allow further customization.
 *
 * @returns {JSX.Element} A styled office card component.
 *
 * Dependencies:
 * - `Paper`: A reusable UI component for creating card-like containers.
 * - `Text`: A reusable UI component for rendering styled text.
 */


function OfficeCard({
  officeName,
  className,
  officeTextSize,
  onClick,
  ...props
}: OfficeCardProps) {
  return (
    <Paper
      className={`flex w-full items-center rounded-md border-l-8 border-l-[#4aa5de] p-6 ${className}`}
    >
      <section className='flex-1' onClick={onClick}>
        <Text
          className={`text-center font-semibold text-primary ${officeTextSize}`}
          {...props}
        >
          {officeName}
        </Text>
      </section>
    </Paper>
  );
}

export default OfficeCard;