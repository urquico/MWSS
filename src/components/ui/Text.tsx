import {
  Text as MantineText,
  TextProps as MantineTextProps,
} from '@mantine/core';
import { PropsWithChildren } from 'react';

/**
 * Text component renders a customizable text element using Mantine's Text component.
 *
 * @param {string} [fz] - The font size of the text, adjusted for kiosk view if applicable.
 * @param {React.ReactNode} children - The content to be displayed inside the text element.
 * @param {MantineTextProps & PropsWithChildren} props - Additional properties to customize the text element.
 * @returns {JSX.Element} A styled text component.
 *
 */

function Text({ children, ...props }: MantineTextProps & PropsWithChildren) {
  return <MantineText {...props}>{children}</MantineText>;
}

export default Text;
