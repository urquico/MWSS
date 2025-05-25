import Text from '@/components/ui/Text';
import { getErrorMessage } from '@/components/ui/error/error-message';
import { Card, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import notFound from '/404.png';
import error from '/error.png';

interface ErrorProps {
  status?: number;
  message?: string;
  link?: string;
  color?: string;
  timer?: number;
}

/**
 * ErrorPage component provides a layout structure for error pages.
 *
 * @param {ErrorProps} props - Properties to customize the error page.
 * @returns {JSX.Element} A styled error page component with an error message.
 *
 *
 * @example
 * <ErrorPage />
 *
 * @dependencies
 * - Error: A component for displaying error messages.
 * - getErrorMessage: A function for getting error messages based on status codes.
 * - ActionIcon: A component from Mantine for displaying icons.
 * - Card: A component from Mantine for displaying cards.
 * - Link: A component from react-router-dom for navigation.
 * - IconExclamationMark: An icon component for the exclamation mark.
 * - Image: A component from Mantine for displaying images.
 * - Text: A component for displaying text.
 * - useNavigate: A hook from react-router-dom for navigation.
 * - useEffect: A hook from React for side effects.
 * - useState: A hook from React for managing state.
 * - notFound: An image for the 404 error page.
 * - error: An image for the error page.
 *
 */

function Error({
  status,
  message,
  link,
  color = 'bg-transparent',
  timer = 5,
}: ErrorProps) {
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      if (status === 404) {
        navigate(-1);
      } else {
        localStorage.clear();
        navigate('/');
      }
    }, timer * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimer);
    };
  }, [status, navigate, timer]);

  return (
    <Card
      radius='md'
      className={`flex max-w-[55rem] flex-col items-center justify-center gap-8 p-10 text-primary ${color}`}
    >
      <Image
        src={status === 404 ? notFound : error}
        alt={status === 404 ? 'Not Found' : status?.toString()}
        className='size-[15rem] md:size-[20rem] small-kiosk:size-[20rem] medium-kiosk:size-[40rem] large-kiosk:size-[40rem]'
      />

      <Text className='text-wrap text-center text-xl font-bold uppercase md:text-3xl small-kiosk:text-3xl medium-kiosk:text-5xl large-kiosk:text-7xl'>
        Oops! {message}
      </Text>
      {status && (
        <Text className='text-center text-sm text-lightGray md:text-lg small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-3xl'>
          {getErrorMessage(status)}{' '}
          <Link
            to={status === 404 ? '#' : '/'}
            className='text-sm font-bold text-primary md:text-lg small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-3xl'
            onClick={() => {
              status === 404 ? navigate(-1) : localStorage.clear();
            }}
          >
            {link || 'Return to homepage'}
          </Link>
        </Text>
      )}
      {timer && (
        <Text className='text-center text-sm text-lightGray md:text-lg small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-3xl'>
          Redirecting in{' '}
          <span className='font-bold text-red-500'>{remainingTime}</span>{' '}
          seconds...
        </Text>
      )}
    </Card>
  );
}

export default Error;
