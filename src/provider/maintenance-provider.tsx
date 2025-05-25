import { useMaintenanceQuery } from '@/api/query/check-maintenance';
import Loader from '@/components/ui/Loader';
import Maintenance from '@/components/ui/Maintenance';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { PropsWithChildren, createContext } from 'react';

export type MaintenanceContextProps = {
  isMaintenance: boolean;
};

/**
 * Session Context
 * A context to provide the session data to child components.
 *
 * @type {React.Context<MaintenanceContextProps | null>}
 * @property {MaintenanceContext | null} - The session context properties.
 *
 * @example
 * import { SessionContext } from '@/provider/session-provider';
 *
 * const { isMaintenance } = useContext(SessionContext);
 *
 * if (isMaintenance) {
 *  return <ErrorPage />;
 * }
 *
 * return <AppShell />;
 *
 */
export const MaintenanceContext = createContext<MaintenanceContextProps | null>(
  null,
);

export const MaintenanceWrapper = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: MaintenanceContextProps;
}) => {
  return (
    <MaintenanceContext.Provider value={value}>
      {children}
    </MaintenanceContext.Provider>
  );
};

function MaintenanceProvider({ children }: PropsWithChildren) {
  const id = localStorage.getItem('id');

  const {
    data: maintenance,
    isLoading,
    isError,
    error,
  } = useMaintenanceQuery(Number(id));

  if (isLoading)
    return (
      <main className='h-screen'>
        <Loader />
      </main>
    );

  // Determine if the token is expired
  const isMaintenance = maintenance?.data?.is_maintenance || false;

  if (isMaintenance) {
    // If the user is not logged in, show the ErrorPage component
    return (
      <main className='h-screen bg-[#f4f6ff]'>
        <Maintenance />
      </main>
    );
  }

  if (isError) {
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
    <MaintenanceWrapper value={{ isMaintenance }}>
      {children}
    </MaintenanceWrapper>
  );
}

export default MaintenanceProvider;
