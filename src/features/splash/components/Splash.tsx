// pages/Splash.tsx
import Header from '@/components/shell/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate out after 2s
    const timeout = setTimeout(() => {
      setAnimateOut(true);

      // Navigate after animation completes
      setTimeout(() => {
        navigate('/login');
      }, 800); // same as animation duration
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className=''>
         <Header
          groupClassName='bg-none'
          textSize={40}
          textWeight={800}
          textColor='#0E2F65'
          logoSize={104}
          headerText={['Metropolitan', 'Waterworks &', 'Sewerage System']}
        />
      {/* <Header variant={animateOut ? 'top-left' : 'center'} /> */}
    </div>
  );
}
