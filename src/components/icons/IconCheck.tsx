import { SVGProps } from 'react';

interface CheckProps extends SVGProps<SVGSVGElement> {}

/**
 * IconCheck renders an check icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} A check icon.
 */

function IconCheck({ ...props }: CheckProps) {
  return (
    <svg
      xmlns='/icons/check.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-check'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l5 5l10 -10' />
    </svg>
  );
}

export default IconCheck;
