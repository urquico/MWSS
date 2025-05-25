import IconNarrowRight from '@/components/icons/IconNarrowRight';
import IconTicket from '@/components/icons/IconTicket';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import KioskButton from '@/components/ui/KioskButton';
import LoaderPage from '@/components/ui/Loader';
import Submitting from '@/components/ui/Submitting';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { useDeleteTransactionMutation } from '@/features/print-ticket/api/mutate/delete-transaction';
import { usePrintTicketQuery } from '@/features/print-ticket/api/query/print-ticket';
import QueueTicket from '@/features/print-ticket/components/QueueTicket';
import { State, modalReducer } from '@/features/print-ticket/hook/modal-hooks';
import { TicketProvider } from '@/features/print-ticket/provider/ticket-context-provider';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// import { useReactToPrint } from 'react-to-print';

/**
 * PrintTicket component fetches and displays the details of a ticket, and provides options to print or delete the ticket.
 *
 * @component
 *
 * @returns {JSX.Element} A component that displays the ticket details and provides actions to print or delete the ticket.
 *
 * Fetching Data:
 * - `useQuery` fetches the ticket data based on the `ticket` query parameter from the URL.
 * - The `printTicket` function is used to fetch the ticket details.
 * - The component handles loading and error states by displaying a loading indicator (`Submitting`) or error message.
 *
 * Mutations:
 * - `useMutation` is used to delete the transaction associated with the ticket.
 * - The `deleteTransaction` function is used to delete the ticket.
 *
 */
function PrintTicket() {
  const initialState: State = {
    deleteOpen: false,
    finishOpen: false,
  };
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const [isPrinting, setIsPrinting] = useState(false);
  // printRef is used to reference the DOM element to be printed
  const printRef = useRef<HTMLDivElement | null>(null);
  // printTicketRef is used to store the resolve function for the Promise
  const printTicketRef = useRef<(() => void) | null>(null);
  // useEffect to trigger DOM updates when isPrinting changes
  useEffect(() => {
    if (isPrinting && printTicketRef.current) {
      printTicketRef.current(); // Notify `react-to-print` that updates are complete
    }
  }, [isPrinting]);
  // // useReactToPrint hook to handle the print functionality
  const handlePrint = (
    referenceNumber: string,
    ticketNumber: string,
    officeName: string,
    serviceName: string,
    date: string,
    transactions: number,
  ) => {
    setIsPrinting(true);
    const cmdList = {
      cmd_List: [
        { name: 'SetUsbportauto', value: [] },
        { name: 'SetInit', value: [] },
        { name: 'SetClean', value: [] },
        { name: 'SetAlignment', value: [{ iAlignment: '0' }] },
        { name: 'SetSizetext', value: [{ iHeight: '1' }, { iWidth: '1' }] },
        { name: 'SetLinespace', value: [{ iLinespace: '30' }] },
        {
          name: 'PrintString',
          value: [{ strData: referenceNumber }, { iImme: '0' }],
        },
        { name: 'SetAlignment', value: [{ iAlignment: '1' }] },
        { name: 'SetBold', value: [{ iBold: '1' }] },
        { name: 'SetSizetext', value: [{ iHeight: '2' }, { iWidth: '2' }] },
        {
          name: 'PrintString',
          value: [{ strData: ticketNumber }, { iImme: '0' }],
        },
        { name: 'SetSizetext', value: [{ iHeight: '1' }, { iWidth: '1' }] },
        { name: 'SetAlignment', value: [{ iAlignment: '0' }] },
        { name: 'SetBold', value: [{ iBold: '0' }] },
        { name: 'PrintFeedDot', value: [{ Lnumber: '20' }] },
        {
          name: 'PrintString',
          value: [
            {
              strData: officeName,
            },
            { iImme: '0' },
          ],
        },
        { name: 'PrintFeedDot', value: [{ Lnumber: '20' }] },
        {
          name: 'PrintString',
          value: [{ strData: serviceName }, { iImme: '0' }],
        },
        { name: 'PrintFeedDot', value: [{ Lnumber: '20' }] },
        { name: 'SetClean', value: [] },
        {
          name: 'PrintQrcode',
          value: [
            { strData: 'https://www.youtube.com/watch?v=xvFZjo5PgG0' },
            { iLmargin: '5' },
            { iMside: '6' },
            { iRound: '0' },
          ],
        },
        { name: 'PrintRemainQR', value: [] },
        { name: 'SetAlignment', value: [{ iAlignment: '2' }] },
        { name: 'PrintFeedDot', value: [{ Lnumber: '20' }] },
        {
          name: 'PrintString',
          value: [{ strData: date }, { iImme: '0' }],
        },
        { name: 'PrintFeedDot', value: [{ Lnumber: '20' }] },
        { name: 'SetAlignment', value: [{ iAlignment: '0' }] },
        {
          name: 'PrintString',
          value: [{ strData: 'Transactions' }, { iImme: '0' }],
        },
        {
          name: 'SetHTseat',
          value: [{ bHTseat: '\x0A\x14\x1E' }, { iLength: '3' }],
        },
        {
          name: 'PrintString',
          value: [{ strData: transactions }, { iImme: '1' }],
        },
        { name: 'PrintFeedDot', value: [{ Lnumber: '160' }] },
        { name: 'PrintCutpaper', value: [{ iMode: '0' }] },
        {
          name: 'GetTransmit',
          value: [{ bCmd: '\x1D\x72\x01' }, { iLength: '3' }],
        },
        { name: 'SetClose', value: [] },
      ],
    };

    const js = JSON.stringify(cmdList);
    const paramData = encodeURI(js);
    doWebPrint(paramData);
  };

  const doWebPrint = (printData: string) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://localhost:61000', true);
    httpRequest.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded;charset=utf-8',
    );
    httpRequest.send(printData);

    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        const json = httpRequest.responseText;
        console.log(json);
        setIsPrinting(false);
      }
    };
  };

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ticketNumber = searchParams.get('ticket');
  if (!ticketNumber) {
    return <ErrorPage message='No ticket number provided' status={400} />;
  }
  const {
    data: ticket,
    isLoading,
    isError,
    error,
    isPending,
  } = usePrintTicketQuery(ticketNumber);
  const { mutateAsync, isPending: submitting } = useDeleteTransactionMutation(
    Number(ticket?.data?.id),
  );
  const handleBack = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };
  if (submitting)
    return <Submitting title='Deleting transaction please wait...' />;
  if (isLoading) return <LoaderPage />;
  if (isPending) return <Submitting title='Fetching data please wait...' />;
  if (isError)
    return <ErrorPage message={error.message} status={error.status} />;
  return (
    <TicketProvider value={ticket ?? null}>
      <main className='flex h-full w-full flex-col items-center gap-8 overflow-y-auto scrollbar-hide medium-kiosk:pt-20 large-kiosk:pt-20'>
        {/* <div
          id='queue-ticket'
          ref={printRef}
          className='flex h-full items-center justify-center'
        > */}
        <QueueTicket printRef={printRef} />
        {/* </div> */}
        <div className='flex items-center gap-4'>
          <ConfirmationModal
            trigger={
              <KioskButton
                variant='outline'
                name='Go back'
                color='bg-transparent'
                textStyle='text-secondary'
                disabled={isPrinting} // Disable based on new state
                onClick={() => {
                  dispatch({ type: 'DELETE_OPEN', payload: true });
                }}
              />
            }
            title='Go back'
            open={state.deleteOpen}
            setOpen={() => dispatch({ type: 'DELETE_OPEN', payload: false })}
            message='Are you sure you want to go back? This will cancel the current transaction.'
            onConfirm={handleBack}
          />
          <KioskButton
            name='Print'
            disabled={isPrinting}
            RightIcon={IconTicket}
            onClick={() =>
              handlePrint(
                ticket.data?.queue_number ?? '',
                ticket.data?.ticket_number ?? '',
                ticket.data?.office.office_name ?? '',
                ticket.data?.queue_services[0].service.service_name ?? '',
                ticket.data?.time_stamps.created_at ?? '',
                ticket.data?.transaction_count ?? 0,
              )
            }
          />
        </div>
        <div>
          <ConfirmationModal
            trigger={
              <div className='flex items-center gap-2'>
                <p
                  className='cursor-pointer font-poppins text-2xl font-bold text-primary'
                  onClick={() =>
                    dispatch({ type: 'FINISH_OPEN', payload: true })
                  }
                >
                  Finish Transaction
                </p>
                <IconNarrowRight className='text-primary lg:size-6 small-kiosk:size-8 medium-kiosk:size-10 large-kiosk:size-12' />
              </div>
            }
            title='Finish Transaction'
            open={state.finishOpen}
            setOpen={() => dispatch({ type: 'FINISH_OPEN', payload: false })}
            message='Please make sure that you print your ticket before finishing the transaction. Are you sure you want to finish the transaction?'
            onConfirm={() => navigate('/kiosk/queue-type')}
          />
        </div>
      </main>
    </TicketProvider>
  );
}
export default PrintTicket;
