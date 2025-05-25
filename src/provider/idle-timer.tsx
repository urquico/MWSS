import Submitting from '@/components/ui/Submitting';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IdleTimerProps {
  children: ReactNode;
}

const IdleTimer = ({ children }: IdleTimerProps) => {
  const navigate = useNavigate();
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetIdleTimer = async () => {
    if (idleTimeout.current) {
      clearTimeout(idleTimeout.current);
    }
    idleTimeout.current = setTimeout(async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds delay
      navigate('/kiosk/queue-type');
      setIsLoading(false);
    }, 60000); // 1 minute idle time
  };
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll', 'click'];

    const handleEvent = () => {
      resetIdleTimer();
    };

    events.forEach((event) => {
      window.addEventListener(event, handleEvent);
    });

    resetIdleTimer();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleEvent);
      });
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <main className='flex h-screen w-full items-center justify-center'>
        <Submitting title='Redirecting to Start page...' />
      </main>
    );
  }

  return <>{children}</>;
};

export default IdleTimer;
