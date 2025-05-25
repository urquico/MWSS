import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  PolymorphicComponentProps,
} from '@mantine/core';

/**
 * Button component renders a customizable button using Mantine's Button component.
 */
function Button({
  children,
  color = '#0E3687', // Default color
  size = 'lg',       // Default size
  className = 'text-base font-open-sans',
  ...props
}: MantineButtonProps & PolymorphicComponentProps<'button'>) {
  return (
    <MantineButton
      color={color}
      size={size}
      className={className}
      {...props}
    >
      {children || 'Button'}
    </MantineButton>
  );
}

export default Button;