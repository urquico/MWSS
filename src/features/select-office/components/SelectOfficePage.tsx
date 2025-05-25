import BackLink from '@/components/ui/BackLink';
import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { useOfficesQuery } from '@/features/select-office/api/query/select-office-api';
import OfficeCard from '@/features/select-office/components/OfficeCard';
import { useOfficeStore } from '@/features/select-office/store/office-store';
import { Container } from '@mantine/core';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * SelectOfficePage component renders a page where users can select an office to proceed with obtaining a queue ticket.
 *
 * This component fetches a list of offices using React Query and displays them in a responsive grid. Each office is
 * displayed as a clickable card. Selecting an office updates the state and navigates the user to the service selection page.
 *
 * @component
 *
 * Dependencies:
 * - `BackLink`: A UI component for rendering a back link.
 * - `Text`: A UI component for displaying styled text.
 * - `getOffices`: API query function to fetch a list of offices.
 * - `OfficeCard`: A UI component for rendering an office card.
 * - `useOfficeStore`: Zustand store hook for managing office selection state.
 * - `useQuery`: React Query hook for data fetching.
 * - `useNavigate`: React Router hook for programmatic navigation.
 * - `Container`: Mantine UI container for layout.
 *
 * @returns {JSX.Element} A responsive page layout for selecting an office.
 */

function SelectOfficePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setOffice = useOfficeStore((state) => state.setOffice);
  const priority = searchParams.get('is_prioritized') || 'false';

  // Fetch list of offices using useOfficesQuery hook
  const { data: offices, isLoading, isError, error } = useOfficesQuery();

  if (isError)
    return <ErrorPage message={error.message} status={error.status} />;

  return (
    <Container size='90rem' className='flex h-full flex-col gap-10 p-6'>
      <header className='flex w-full items-start justify-center'>
        <Text className='text-4xl font-bold text-primary md:text-7xl small-kiosk:text-4xl'>
          Get Queue Ticket
        </Text>
      </header>

      <section className='flex flex-grow flex-col gap-4 overflow-y-auto md:gap-16 small-kiosk:px-16 medium-kiosk:px-24 large-kiosk:px-40'>
        <div className='h-auto w-full'>
          <BackLink
            title='Select Office'
            onClick={() => navigate(`/kiosk/queue?is_prioritized=${priority}`)}
          />
        </div>

        {isLoading ? (
          <Submitting title='Fetching offices please wait...' />
        ) : (
          <div className='grid h-auto w-full grid-cols-1 gap-4 overflow-y-auto font-poppins scrollbar-hide md:grid-cols-2 small-kiosk:grid-cols-1'>
            {offices?.data?.map((officeName, index) => {
              const isLastItem = index === (offices?.data?.length ?? 0) - 1; // Check if it's the last item
              const isOdd = (offices?.data?.length ?? 0) % 2 !== 0; // Check if the total count is odd
              return (
                <OfficeCard
                  key={officeName.id}
                  officeName={officeName.office_name}
                  officeTextSize='text-md md:text-lg small-kiosk:text-lg medium-kiosk:text-xl large-kiosk:text-xl '
                  className={`border-l-[0.9rem] small-kiosk:h-16 small-kiosk:border-l-[0.7rem] medium-kiosk:h-20 medium-kiosk:border-l-[0.9rem] large-kiosk:h-28 large-kiosk:border-l-[1.1rem] ${
                    isLastItem && isOdd
                      ? 'medium-kiosk:col-span-2 large-kiosk:col-span-2'
                      : ''
                  }`}
                  onClick={() => {
                    setOffice(officeName);
                    navigate(
                      `/kiosk/service?is_prioritized=${priority}&office=${officeName.id}`,
                    );
                  }}
                />
              );
            })}
          </div>
        )}
      </section>
    </Container>
  );
}

export default SelectOfficePage;
