import { SVGProps } from 'react';

interface IconKeyboardOffProps extends SVGProps<SVGSVGElement> {}

/**
 * IconPlayerPlay renders an player-play icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An  player-play icon.
 */

function IconKeyboardOff({ ...props }: IconKeyboardOffProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-keyboard-off'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418' />
      <path d='M6 10l0 .01' />
      <path d='M10 10l0 .01' />
      <path d='M14 10l0 .01' />
      <path d='M18 10l0 .01' />
      <path d='M6 14l0 .01' />
      <path d='M18 14l0 .01' />
      <path d='M10 14l4 0' />
      <path d='M3 3l18 18' />
    </svg>
  );
}

export default IconKeyboardOff;
