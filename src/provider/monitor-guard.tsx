import ErrorPage from '@/components/ui/error/ErrorPage';
import { PropsWithChildren } from 'react';

/**
 *
 * @description
 * MonitorGuard is a provider that checks if the user is logged in or not.
 * If the user is logged in, it will display an error page.
 *
 * @param {PropsWithChildren} { children }
 * @return {*}
 *
 * @example
 *
 * <MonitorGuard>
 *  <LoginScreen />
 * </MonitorGuard>
 *
 **/

function MonitorGuard({ children }: PropsWithChildren) {
  const isLogged = localStorage.getItem('isLogged');

  if (isLogged) {
    return (
      <main className='flex h-screen w-full flex-col items-center justify-center'>
        <ErrorPage status={404} />
      </main>
    );
  }

  return <main>{children}</main>;
}

export default MonitorGuard;
