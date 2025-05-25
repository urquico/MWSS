import { Paper as MantinePaper, PaperProps } from '@mantine/core';
import { PropsWithChildren } from 'react';

/**
 * Paper component renders a customizable paper element using Mantine's Paper component.
 *
 * @param {PaperProps & PropsWithChildren} props - Properties to customize the paper.
 * @returns {JSX.Element} A styled paper component.
 */
function Paper({ children, ...props }: PaperProps & PropsWithChildren) {
  return <MantinePaper {...props}>{children}</MantinePaper>;
}

export default Paper;
