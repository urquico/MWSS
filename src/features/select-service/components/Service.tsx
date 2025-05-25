import IconTicket from '@/components/icons/IconTicket';
import BackLink from '@/components/ui/BackLink';
import KeyboardComponent from '@/components/ui/Keyboard';
import KioskButton from '@/components/ui/KioskButton';
import KioskInput from '@/components/ui/KioskInput';
import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { useCreateTicketMutation } from '@/features/select-service/api/mutate/create-ticket';
import { useServicesQuery } from '@/features/select-service/api/query/select-services-api';
import SelectService from '@/features/select-service/components/SelectService';
import {
  ServiceSchemaType,
  serviceSchema,
} from '@/features/select-service/schema/service.schema';
import { OfficeServicesType } from '@/features/select-service/types/service.types';
import { numericValue } from '@/utils/NumericValue';
import { Card, Container, Pill } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Service Component
 * A component that allows users to select services and enter their name to get a queue ticket.
 * It includes a form with service selection, name input, and a submit button.
 *
 * @component
 * @returns {JSX.Element} The rendered Service component.
 *
 * @example
 * <Service />
 *
 * @dependencies
 * - IconKeyboardOff: An icon component for clearing the name input.
 * - IconTicket: An icon component for the ticket button.
 * - BackLink: A component for navigation back to the service selection.
 * - KioskButton: A button component for user actions.
 * - Text: A component for displaying text.
 * - KioskInput: A component for text input fields with keyboard input.
 * - SelectService: A component for selecting services.
 * - services: A data module containing available services.
 * - ServiceSchemaType, serviceSchema: Schema definitions for form validation.
 * - Container, Pill: UI components from Mantine.
 * - useForm, zodResolver: Hooks for form handling and validation.
 * - useState: React hook for state management.
 * - useNavigate, useSearchParams: React Router hooks for navigation and URL parameter handling.
 */

function Service() {
  // State to store the search params
  const [searchParams, setSearchParams] = useSearchParams();
  // State to store the navigation function
  const navigate = useNavigate();

  // Get the kiosk ID from the local storage
  const kioskId = localStorage.getItem('id');

  // State to store the name input focus
  const [isNameFocused, setIsNameFocused] = useState(false);
  // State to store the number of transaction input focus
  const [isNumberOfTransactionFocused, setIsNumberOfTransactionFocused] =
    useState(false);
  // State to store the office ID
  const officeID = searchParams.get('office');

  // State to store the priority lane
  const priority = searchParams.get('is_prioritized') === 'true';

  // State to store the name input
  const [name, setName] = useState(searchParams.get('name') ?? '');
  // State to store the number of transaction input
  const [numberOfTransaction, setNumberOfTransaction] = useState<number>(
    searchParams.get('number_of_transaction') // Get the number of transaction from the search params
      ? Number(searchParams.get('number_of_transaction') ?? 0) // Convert the number of transaction to a number, if it doesn't exist, set it to 0
      : 1, // Default to 0 if it doesn't exist
  );
  // State to store the selected queue services
  const [queueServices, setQueueServices] = useState<Record<string, boolean>>(
    searchParams.get('queue_services')
      ? { [searchParams.get('queue_services')!]: true } // Ensure only one service is selected
      : {}, // Default to an empty record if it doesn't exist
  );

  // Query to get the services
  const {
    data: officeServices,
    isLoading,
    isError: IsOfficeServicesError,
    error: officeServicesError,
  } = useServicesQuery(officeID);

  // Form to store the form values
  const form = useForm<ServiceSchemaType>({
    mode: 'uncontrolled',
    initialValues: {
      name: name,
      queue_services: queueServices,
      number_of_transaction: numberOfTransaction,
      // is_prioritized: Boolean(isPrioritized),
    },
    validate: zodResolver(serviceSchema),
  });

  const resetFormAndState = () => {
    form.reset(); // Reset the form
    form.setValues({ name: '', queue_services: {} }); // Set the form values
  };

  const { mutateAsync, isError, error, isPending } = useCreateTicketMutation({
    is_prioritized: priority,
    officeID: officeID || '',
    queueServices,
    name,
    numberOfTransaction,
    resetFormAndState,
  });

  const handleSubmit = async (values: ServiceSchemaType) => {
    // Filter the queue services
    const filteredQueueServices = Object.entries(values.queue_services)
      .filter(([_, value]) => value) // Filter the services with true values
      .map(([serviceName]) => {
        const service = officeServices?.data?.find(
          (s: OfficeServicesType) => s.service_name === serviceName, // Find the service by name
        );
        return service ? { id: service.id } : null; // Return the service ID if it exists, otherwise null
      })
      .filter((service): service is { id: number } => service !== null); // Filter out null values and ensure type safety

    try {
      // Notify the user that the ticket is being created
      await mutateAsync({
        walk_in_name: values.name ?? '', // Set the walk-in name
        transaction_count: values.number_of_transaction, // Set the number of transaction
        is_prioritized: priority, // Set the prioritized state to false
        office: Number(officeID), // Set the office ID
        queue_services: filteredQueueServices, // Directly use the filtered queue services
        kiosk: kioskId ?? '', // Set the kiosk ID
      });
    } catch (error) {
      // Log the error
      console.error(error);
    }
  };

  const handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('name', e.target.value); // Set the name input to the new input
    setName(e.target.value); // Set the name state to the new input
    updateURLParams('name', e.target.value); // Update the URL params with the new name input
  };

  const handleNumberOfTransactionOnChange = (value: number) => {
    const newValue = numericValue(value.toString()); // Convert the input to a number
    if (newValue) {
      form.setFieldValue('number_of_transaction', newValue); // Set the number of transaction input to the new input
      setNumberOfTransaction(newValue); // Set the number of transaction state to the new input
      updateURLParams('number_of_transaction', newValue.toString()); // Update the URL params with the new number of transaction input
    } else {
      form.setFieldValue('number_of_transaction', 0); // Set the number of transaction input to 0
      setIsNumberOfTransactionFocused(false); // Reset the number of transaction input focus
      setNumberOfTransaction(0); // Reset the number of transaction state
      updateURLParams('number_of_transaction', ''); // Update the URL params with the new number of transaction input
    }
  };

  // Function to handle backspace action
  const handleBackspace = (type: 'name' | 'number_of_transaction') => {
    if (type === 'name') {
      const updatedName = name.slice(0, -1); // Remove the last character
      form.setFieldValue('name', updatedName); // Update the form value
      setName(updatedName); // Update the state
      updateURLParams('name', updatedName); // Update the URL params
    } else if (type === 'number_of_transaction') {
      const updatedTransaction = numberOfTransaction.toString().slice(0, -1); // Remove the last character
      const newValue = updatedTransaction
        ? numericValue(updatedTransaction)
        : 1; // Convert the input to a number
      form.setFieldValue('number_of_transaction', newValue); // Update the form value
      setNumberOfTransaction(newValue); // Update the state
      updateURLParams('number_of_transaction', newValue.toString()); // Update the URL params
    }
  };

  const handleName = (input: string) => {
    handleKeyboardChange(input, 'name');
  };

  const handleTransaction = (input: string) => {
    handleKeyboardChange(input, 'number_of_transaction');
  };

  const handleKeyboardChange = (
    input: string, // The input from the keyboard
    type: 'name' | 'number_of_transaction', // Type of the input to be updated
  ) => {
    if (type === 'name') {
      form.setFieldValue('name', input); // Set the name input to the new input
      setName(input); // Set the name state to the new input
      updateURLParams('name', input); // Update the URL params with the new name input
    } else if (type === 'number_of_transaction') {
      const newValue = numericValue(input); // Convert the input to a number
      form.setFieldValue('number_of_transaction', newValue); // Set the number of transaction input to the new input
      setNumberOfTransaction(newValue); // Set the number of transaction state to the new input
      updateURLParams('number_of_transaction', newValue.toString()); // Update the URL params with the new number of transaction input
    }
  };

  // Function to update the URL params
  const updateURLParams = (
    key: string, // The key of the input to be updated
    value: string | Record<string, boolean>, // The value of the input to be updated
  ) => {
    // Update the URL params with the new input
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev); // Create a new URLSearchParams object
      if (key === 'queue_services' && typeof value === 'object') {
        // If the key is queue_services and the value is an object
        const selectedService = Object.keys(value).find(
          (service) => value[service],
        ); // Find the selected service
        if (selectedService) {
          newParams.set(key, selectedService); // Set the new URL params with the selected service
        } else {
          newParams.delete(key); // Delete the key if no service is selected
        }
      } else if (typeof value === 'string' && value) {
        // If the value is a string and it's not empty
        newParams.set(key, value); // Set the new URL params
      } else {
        // If the value is not a string or it's empty
        newParams.delete(key); // Delete the key
      }
      return newParams; // Return the new URL params
    });
  };

  // If the ticket is being created
  if (isPending) return <Submitting title='Creating ticket...' />;

  // If the mutation is error
  if (isError)
    return (
      <ErrorPage
        message={error.message}
        status={(error as AxiosError).status}
      />
    );

  // If the services are error
  if (IsOfficeServicesError)
    return (
      <ErrorPage
        message={officeServicesError.message}
        status={officeServicesError.status}
      />
    );

  // Render the Service component
  return (
    <Container className='flex h-[calc(100%)] w-auto flex-col items-center gap-8 p-6 md:gap-10 small-kiosk:h-full small-kiosk:gap-8 medium-kiosk:h-full medium-kiosk:overflow-hidden large-kiosk:h-full large-kiosk:overflow-hidden'>
      <header className='flex h-auto w-full items-start justify-center'>
        <Text className='text-4xl font-bold text-primary md:text-7xl small-kiosk:text-4xl'>
          Get Queue Ticket
        </Text>
      </header>
      <section
        id='back-link'
        data-testid='back-link'
        className='flex w-full items-start justify-start'
      >
        <BackLink
          title='Select Service'
          onClick={() => navigate(`/kiosk/office?is_prioritized=${priority}`)}
        />
      </section>
      <Card
        w='100%'
        className='flex flex-col gap-8 bg-transparent md:p-16 small-kiosk:p-6'
        withBorder={false}
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className='flex w-full flex-grow flex-col items-center gap-10 overflow-y-auto scrollbar-hide'
        >
          {isLoading ? (
            <Submitting title='Fetching services please wait...' />
          ) : // Render the service lists
          officeServices?.data && officeServices.data.length > 0 ? (
            <section
              id='service-lists'
              className='grid h-auto min-h-44 w-full grid-cols-1 gap-4 overflow-y-auto scrollbar-hide md:grid-cols-2 small-kiosk:grid-cols-1'
            >
              {officeServices?.data.map((service) =>
                officeServices.data && officeServices.data.length > 0 ? (
                  <SelectService
                    key={service.id}
                    label={service.service_name}
                    name={service.service_name}
                    checked={queueServices[service.service_name] ?? false} // Check if the service is selected
                    onChange={(e) => {
                      const updatedQueueServices = Object.keys(
                        queueServices,
                      ).reduce(
                        (acc, key) => {
                          acc[key] = false; // Deselect all services
                          return acc;
                        },
                        {} as Record<string, boolean>,
                      );
                      updatedQueueServices[service.service_name] =
                        e.target.checked; // Select the new service
                      form.setFieldValue(
                        'queue_services',
                        updatedQueueServices,
                      ); // Set the queue services to the updated queue services
                      setQueueServices(updatedQueueServices); // Set the queue services state to the updated queue services
                      updateURLParams('queue_services', updatedQueueServices); // Update the URL params with the updated queue services
                    }}
                    error={form.errors.queue_services} // Error of the queue services
                  />
                ) : (
                  <Text className='font-inter text-lg italic text-primary'>
                    No services available
                  </Text>
                ),
              )}
            </section>
          ) : (
            <Text className='font-inter text-lg italic text-primary'>
              No services available
            </Text>
          )}
          {/* Check if there is a service selected */}
          <section className='flex w-full flex-col items-center gap-4'>
            {Object.keys(queueServices).some(
              (service) => queueServices[service], // Check if a service is selected
            ) && (
              <>
                <Text className='font-inter text-lg font-semibold text-primary'>
                  Selected Service
                </Text>
                <div className='flex w-full flex-wrap items-center justify-center gap-2'>
                  {Object.keys(queueServices) // Get the keys of the queue_services object
                    .filter((service) => queueServices[service]) // Filter the services with true values
                    .map((service) => {
                      const serviceObj = officeServices?.data?.find(
                        // Find the service in the services data
                        (s: OfficeServicesType) => s.service_name === service, // Find the service by name
                      );
                      return (
                        // Render the service pill
                        <Pill size='xl' key={service}>
                          {serviceObj?.service_name}
                        </Pill>
                      );
                    })}
                </div>
              </>
            )}
          </section>
          <section id='enter-name' className='flex w-full flex-col gap-8'>
            <KioskInput
              id={name}
              value={name}
              label='Name'
              placeholder='Enter Name'
              textKeyboard={true}
              onChange={handleNameOnChange}
              onFocus={() => {
                setIsNameFocused(true); // Set the name input focus
                setIsNumberOfTransactionFocused(false); // Close the number of transaction input focus
              }} // Set the name input focus
              error={form.errors.name} // Error of the name input
            />
            <KioskInput
              id={numberOfTransaction.toString()}
              value={numberOfTransaction.toString()}
              label='Number of Transaction'
              placeholder='Number of Transaction'
              required
              numberChange={(value) =>
                handleNumberOfTransactionOnChange(Number(value))
              }
              onFocus={() => {
                setIsNameFocused(false); // Reset the name input focus
                setIsNumberOfTransactionFocused(true); // Set the number of transaction input focus
              }} // Set the number of transaction input focus
              error={form.errors.number_of_transaction} // Error of the number of transaction input
            />
          </section>
          {/* Keyboard */}
          {/* Render the queue actions */}
          <section id='queue-actions'>
            <KioskButton
              name='Get Queue Ticket'
              RightIcon={IconTicket}
              type='submit'
            />
          </section>
        </form>
      </Card>
      {isNameFocused && (
        // <Container size='35rem' className={keyboardClassName}>
        <KeyboardComponent
          onChange={handleName}
          onBackspace={() => handleBackspace('name')} // Handle backspace action for number of transaction
          onClick={() => {
            setIsNameFocused(false); // Reset the name input focus
            setName(''); // Reset the name state
            updateURLParams('name', ''); // Update the URL params with the new name input
          }}
        />
        // </Container>
      )}
      {isNumberOfTransactionFocused && (
        // <Container size='35rem' className={keyboardClassName}>
        <KeyboardComponent
          onChange={handleTransaction}
          onBackspace={() => handleBackspace('number_of_transaction')} // Handle backspace action for number of transaction
          onClick={() => {
            setIsNumberOfTransactionFocused(false); // Reset the number of transaction input focus
            setNumberOfTransaction(1); // Reset the number of transaction state
            updateURLParams('number_of_transaction', ''); // Update the URL params with the new number of transaction input
          }}
        />
        // </Container>
      )}
    </Container>
  );
}

export default Service;
