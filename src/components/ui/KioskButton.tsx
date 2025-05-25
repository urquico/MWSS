import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';

interface KioskButtonProps {
  variant?:
    | 'default'
    | 'filled'
    | 'light'
    | 'outline'
    | 'subtle'
    | 'white'
    | 'transparent';
  name?: string; // optional name of the button
  color?: string; // color of the button
  textStyle?: string; // color of the text
  onClick?: () => void; // optional click handler
  type?: 'submit' | 'button'; // optional type of the button
  iconStyle?: string; // color of the icon
  LeftIcon?: React.ComponentType<{ className: string }>; // optional left icon component
  RightIcon?: React.ComponentType<{ className: string }>; // optional right icon component
  isLoading?: boolean; // optional loading state
  disabled?: boolean; // optional disabled state
}

/**
 * KioskButton Component
 * A component that renders a button with optional text and an icon, and executes a click handler when clicked.
 * It supports responsive design with different styles for various screen sizes.
 *
 * @component
 * @param {KioskButtonProps} props - The props for the KioskButton component.
 * @param {string} [props.name] - An optional name to display on the button.
 * @param {() => void} [props.onClick] - An optional click handler function to execute when the button is clicked.
 * @param {React.ComponentType<{ className: string }>} [props.Icon] - An optional icon component to display on the button.
 * @returns {JSX.Element} A styled button component with optional text and icon.
 *
 * @example
 * <KioskButton name="Submit" onClick={handleSubmit} Icon={SubmitIcon} />
 *
 * @dependencies
 * - Button: A UI component for the button layout.
 * - Text: A UI component for displaying the button text.
 */

function KioskButton({
  variant = 'filled',
  color = 'text-primary',
  textStyle = 'text-white',
  iconStyle = 'text-white',
  name,
  onClick,
  type = 'button',
  LeftIcon,
  RightIcon,
  isLoading,
  disabled,
}: KioskButtonProps) {
  return (
    <Button
      variant={variant}
      className={`h-auto w-auto rounded-lg bg-secondary p-4 small-kiosk:px-5 small-kiosk:py-4 medium-kiosk:px-10 medium-kiosk:py-8 large-kiosk:px-10 large-kiosk:py-8 ${color}`}
      rightSection={
        RightIcon ? (
          <RightIcon
            data-testid='kiosk-button-right-icon'
            className={`lg:size-6 small-kiosk:size-8 medium-kiosk:size-10 large-kiosk:size-12 ${iconStyle}`}
          />
        ) : null
      }
      leftSection={
        LeftIcon ? (
          <LeftIcon
            data-testid='kiosk-button-left-icon'
            className={`lg:size-6 small-kiosk:size-8 medium-kiosk:size-10 large-kiosk:size-12 ${iconStyle}`}
          />
        ) : null
      }
      type={type}
      onClick={onClick}
      loading={isLoading}
      disabled={disabled}
    >
      <Text
        className={`font-inter text-xl leading-none lg:text-2xl small-kiosk:text-xl medium-kiosk:px-4 medium-kiosk:text-4xl large-kiosk:text-4xl ${textStyle}`}
      >
        {name || 'Button'}
      </Text>
    </Button>
  );
}

export default KioskButton;
