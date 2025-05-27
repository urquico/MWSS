import { useCheckValidityQuery } from '@/api/query/check-validity';
import Loader from '@/components/ui/Loader';
import ErrorPage from '@/components/ui/error/ErrorPage';
// import ErrorPage from '@/components/ui/error/ErrorPage';
import { PropsWithChildren, createContext } from 'react';
import { Navigate } from 'react-router-dom';

export type SessionContextProps = {
  isTokenExpired: boolean;
};

/**
 * Session Context
 * A context to provide the session data to child components.
 *
 * @type {React.Context<SessionContextProps | null>}
 * @property {SessionContextProps | null} - The session context properties.
 *
 * @example
 * import { SessionContext } from '@/provider/session-provider';
 *
 * const { isTokenExpired } = useContext(SessionContext);
 *
 * if (isTokenExpired) {
 *  return <ErrorPage />;
 * }
 *
 * return <AppShell />;
 *
 */
export const SessionContext = createContext<SessionContextProps | null>(null);

export const SessionWrapper = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SessionContextProps;
}) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

function SessionProvider({ children }: PropsWithChildren) {
  const { data: validity, isLoading, isError, error } = useCheckValidityQuery();

  if (isLoading) {
    return (
      <main className='h-screen'>
        <Loader />
      </main>
    );
  }

  if (validity?.statusCode === 401) {
    return <Navigate to='/' />;
  }

  if (isError) {
    return (
      <main className='h-screen w-full'>
        <ErrorPage status={error.status} message={error.message} />
      </main>
    );
  }

  return (
    <>
      {validity?.redirect ? (
        <Navigate to={validity.redirect} />
      ) : (
        <SessionWrapper
          value={{ isTokenExpired: validity?.statusCode === 401 }}
        >
          {children}
        </SessionWrapper>
      )}
    </>
  );
}

export default SessionProvider;
