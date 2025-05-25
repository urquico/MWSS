import IconTicket from '@/components/icons/IconTicket';
import BackLink from '@/components/ui/BackLink';
import KioskButton from '@/components/ui/KioskButton';
import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import SelectInput from '@/components/ui/select-input/SelectInput';
import { useQueueLists } from '@/features/queue/api/query/queue-list';
import CounterList from '@/features/queue/components/CounterList';
import { State, filterReducer } from '@/features/queue/hooks/filter-hooks';
import { QueueProvider } from '@/features/queue/provider/queue-context-provider';
import { useOfficesQuery } from '@/features/select-office/api/query/select-office-api';
import { OfficeListType } from '@/features/select-office/types/select-office';
import { useServicesQuery } from '@/features/select-service/api/query/select-services-api';
import { Container } from '@mantine/core';
import { memo, useCallback, useReducer } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Queue Component
 * A component that represents the queuing kiosk interface.
 * It includes a header, select inputs for office and service selection, a list of counters, and a button to get a queue ticket.
 *
 * @component
 * @returns {JSX.Element} The rendered Queue component.
 *
 * @example
 * <Queue />
 *
 * @dependencies
 * - IconTicket: An icon component for the ticket button.
 * - KioskButton: A button component for user actions.
 * - SelectInputs: Select inputs.
 * - Text: A component for displaying text.
 * - QueueList: A component for displaying the list of counters.
 * - Container: A layout component from Mantine.
 */

function Queue() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const priority = searchParams.get('is_prioritized') || 'false';

  // Initial state for the filter reducer
  const initialState: State = {
    selectedOffice: '',
    selectedService: '',
  };

  // Use filter reducer to manage selected office and service
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // Fetch office data
  const {
    data: offices,
    isPending: officeLoading,
    isError: officeIsError,
    error: officeError,
  } = useOfficesQuery();

  // Fetch services data
  const {
    data: officeServices,
    isError: servicesIsError,
    error: servicesError,
  } = useServicesQuery(state.selectedOffice);

  // Fetch queue data
  const {
    data: queues,
    isLoading: queueLoading,
    isError: queueIsError,
    error: queueError,
  } = useQueueLists(state.selectedOffice, state.selectedService);

  // Extract office data
  const officesData = [
    { value: '', label: 'Select all' }, // Add 'Select all' option
    ...(offices?.data?.map((office: OfficeListType) => ({
      value: office.id.toString(),
      label: office.office_name,
    })) || []), // Map office data to value and label
  ];

  // Extract services data
  const officeServicesData = [
    { value: '', label: 'Select all' }, // Add 'Select all' option
    ...(officeServices?.data?.map((service) => ({
      value: service.id.toString(),
      label: service.service_name,
    })) || []), // Map service data to value and label
  ];

  const handleSelectOffice = useCallback((value: string | null) => {
    dispatch({
      type: 'SELECT_OFFICE',
      payload: value,
    });
    dispatch({
      type: 'SELECT_SERVICE',
      payload: null,
    });
  }, []);

  const handleSelectService = useCallback((value: string | null) => {
    dispatch({
      type: 'SELECT_SERVICE',
      payload: value,
    });
  }, []);

  // If queue data is loading, display a loading message
  if (queueLoading)
    return <Submitting title='Fetching queues please wait...' />;

  // If queue data is an error, display an error message
  if (queueIsError || queueError)
    return (
      <ErrorPage message={queueError?.message} status={queueError?.status} />
    );

  // If no data found, display a message
  if (!queues) return null;

  return (
    <QueueProvider value={{ queue: queues?.data ?? [] }}>
      <Container className='flex h-full w-auto flex-col items-center gap-10 p-2 md:p-6 small-kiosk:h-full medium-kiosk:h-full large-kiosk:h-full'>
        <header className='flex h-auto w-full items-start justify-center'>
          <Text className='text-4xl font-bold text-primary md:text-7xl small-kiosk:text-4xl'>
            Queuing Kiosk
          </Text>
        </header>
        <div className='h-auto w-full'>
          <BackLink
            title='Transaction Type'
            onClick={() => navigate('/kiosk/queue-type')}
          />
        </div>
        <section
          id='select-inputs'
          data-testid='select-inputs'
          className='flex h-auto w-full items-center justify-center gap-4 small-kiosk:px-10 medium-kiosk:px-10 large-kiosk:px-10'
        >
          {officeLoading ? (
            <Submitting title='Fetching offices please wait...' />
          ) : (
            <SelectInput
              className='w-full'
              data={officesData}
              value={state.selectedOffice?.toString() || ''}
              placeholder='Select Office'
              error={officeIsError ? officeError.message : ''}
              onChange={handleSelectOffice}
            />
          )}

          <SelectInput
            className='w-full'
            data={officeServicesData}
            value={state.selectedService?.toString() || ''}
            placeholder='Select Service'
            error={servicesIsError ? servicesError.message : ''}
            onChange={handleSelectService}
            disabled={!state.selectedOffice}
          />
        </section>
        <section id='queue-list' className='h-3/6 w-full flex-1'>
          <CounterList />
        </section>
        <section id='queue-actions'>
          <KioskButton
            name='Get Queue Ticket'
            RightIcon={IconTicket}
            onClick={() => navigate(`/kiosk/office?is_prioritized=${priority}`)}
          />
        </section>
      </Container>
    </QueueProvider>
  );
}

export default memo(Queue);
