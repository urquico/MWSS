import { SVGProps } from 'react';

interface IconArrowLeftProps extends SVGProps<SVGSVGElement> {}

/**
 * IconArrowLeft renders an arrow left icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An arrow left icon.
 */

function IconArrowLeft({ ...props }: IconArrowLeftProps) {
  return (
    <svg
      xmlns='/icons/arrow-left.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-left'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l14 0' />
      <path d='M5 12l6 6' />
      <path d='M5 12l6 -6' />
    </svg>
  );
}

export default IconArrowLeft;
