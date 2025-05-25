import Error from '@/components/ui/error/Error';
import { useRouteError } from 'react-router-dom';

type ErrorPageProps = {
  status: number;
  statusText: string;
  timer?: number;
};

type ErrorProps = {
  message?: string;
  status?: number;
};

function ErrorPage({ message, status }: ErrorProps) {
  const error = useRouteError() as ErrorPageProps;

  if (!error) {
    return (
      <main className='flex h-full w-full flex-col items-center justify-center overflow-y-auto font-nunito-sans scrollbar-hide'>
        <Error status={status} message={message} />
      </main>
    );
  }

  return (
    <main className='flex h-screen flex-col items-center justify-center bg-[#f4f6ff] font-nunito-sans'>
      <Error
        status={error.status}
        message={error.statusText}
        link={
          error.status === 404
            ? 'Return to previous page'
            : 'Return to homepage'
        }
        timer={error.timer}
      />
    </main>
  );
}

export default ErrorPage;
