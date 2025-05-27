// components/AuthFlow.tsx
import Header from '@/components/shell/Header';
import Login from '@/features/login/components/Login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthFlow() {
  const [phase, setPhase] = useState<'splash' | 'transition' | 'login'>(
    'splash',
  );
  const navigate = useNavigate();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setPhase('transition');
    }, 2000);

    const transitionTimer = setTimeout(() => {
      setPhase('login');
    }, 2500);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* Continuous Header Animation */}
      <Header
        groupClassName='bg-none'
        textSize={phase === 'login' ? 28 : 40}
        textWeight={phase === 'login' ? 400 : 800}
        textColor={phase === 'login' ? '#D2E1FF' : '#0E2F65'}
        logoSize={phase === 'login' ? 60 : 104}
        headerText={
          phase === 'login'
            ? ['Metropolitan Waterworks', 'Sewerage System']
            : ['Metropolitan', 'Waterworks &', 'Sewerage System']
        }
        position={phase === 'splash' ? 'center' : 'top-left'}
        style={{
          transition: 'all 0.8s ease-in-out',
          transform:
            phase === 'splash'
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(0, 0) scale(0.6)',
          zIndex: 10,
        }}
      />

      {/* Login Form appears during transition */}
      {phase === 'login' && (
        <div className='absolute inset-0 z-0'>
          <Login isFromTransition />
        </div>
      )}
    </div>
  );
}
