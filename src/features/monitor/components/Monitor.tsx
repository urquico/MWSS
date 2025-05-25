import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { useActiveOfficesQuery } from '@/features/monitor/api/query/active-offices';
import OfficeCard from '@/features/monitor/components/OfficeCard';
import { Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

/**
 * Monitor Component
 * A component that displays a list of active offices for monitoring.
 *
 * @component
 * @returns {JSX.Element} The rendered Monitor component.
 *
 * @example
 * <Monitor />
 *
 * @dependencies
 * - Submitting: A component for displaying a loading state.
 * - Text: A component for displaying text.
 * - ErrorPage: A component for displaying an error page.
 * - OfficeCard: A component for displaying an office card.
 * - Container: A layout component from Mantine.
 */

function Monitor() {
  const navigate = useNavigate();
  const { data: offices, isLoading, isError, error } = useActiveOfficesQuery();
  if (isLoading) return <Submitting title='Fetching offices please wait...' />;
  if (isError) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Container className='flex h-full w-full max-w-[75rem] flex-col gap-8 p-8 monitor:max-w-[100rem] monitor:gap-16'>
      <section>
        <Text className='text-xl font-bold text-primary md:text-2xl monitor:text-5xl'>
          Select an Office to Monitor
        </Text>
      </section>
      <section className='flex-1 overflow-y-auto scrollbar-hide'>
        <div className='grid flex-1 grid-cols-1 gap-4 md:grid-cols-3'>
          {offices?.data?.map((office, index) =>
            offices.data && offices.data.length > 0 ? (
              <OfficeCard
                key={index}
                office={office.office_name}
                counters={office.counters}
                onClick={() => navigate(`/monitor/now-serving?id=${office.id}`)}
              />
            ) : (
              <div className='flex h-full w-full items-center justify-center'>
                <h1 className='text-lg font-bold text-lightGray md:text-2xl'>
                  No active offices
                </h1>
              </div>
            ),
          )}
        </div>
      </section>
    </Container>
  );
}

export default Monitor;
