import { SVGProps } from 'react';

interface IconPrinterProps extends SVGProps<SVGSVGElement> {}

/**
 * IconPrinter renders an printer icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An printer icon.
 */

function IconPrinter({ ...props }: IconPrinterProps) {
  return (
    <svg
      xmlns='/icons/printer.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-printer'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2' />
      <path d='M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4' />
      <path d='M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z' />
    </svg>
  );
}

export default IconPrinter;
