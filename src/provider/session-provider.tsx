import { useCheckValidityQuery } from '@/api/query/check-validity';
import Loader from '@/components/ui/Loader';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { PropsWithChildren, createContext } from 'react';

export type SessionContextProps = {
  isTokenExpired: boolean;
  status?: number;
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

  if (isLoading)
    return (
      <main className='h-screen'>
        <Loader />
      </main>
    );

  // Determine if the token is expired
  const isTokenExpired = isError || validity?.statusCode === 401;

  if (isTokenExpired) {
    // If the user is not logged in, show the ErrorPage component
    return (
      <main className='h-screen bg-[#f4f6ff]'>
        <ErrorPage
          message={error?.message || 'An error occurred.'}
          status={error?.response?.status}
        />
      </main>
    );
  }

  // Provide session context
  return (
    <SessionWrapper value={{ isTokenExpired, status: validity?.statusCode }}>
      {children}
    </SessionWrapper>
  );
}

export default SessionProvider;
