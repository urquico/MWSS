import { Image, Loader } from '@mantine/core';

import logo from '/mwss-logo.svg';

/**
 * LoaderPage component renders a full-screen loader centered on the page.
 *
 * @returns {JSX.Element} A full-screen loader component.
 */

function LoaderPage() {
  return (
    <div className='flex h-full max-w-full flex-col items-center justify-center gap-2'>
      <Image src={logo} alt='logo' className='monitor:size-40 size-20' />
      <Loader type='dots' size='lg' />
    </div>
  );
}

export default LoaderPage;
