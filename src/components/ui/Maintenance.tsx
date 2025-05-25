import { useLogoutMutation } from '@/api/mutation/logout';
import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';
import { Image } from '@mantine/core';
import { Link } from 'react-router-dom';

import maintenance from '/kiosk-maintenance.png';

function Maintenance() {
  const { mutateAsync, isPending } = useLogoutMutation();

  const handleLinkClick = async () => {
    await mutateAsync();
  };

  if (isPending) {
    return <Submitting title='logging you out...' />;
  }
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center p-8'>
      <Card className='flex max-w-[55rem] items-center justify-center gap-8 bg-transparent p-6'>
        <Image src={maintenance} alt='Maintenance' className='size-[40rem]' />8
        <Text className='text-wrap text-center text-xl font-bold uppercase text-primary md:text-3xl small-kiosk:text-3xl medium-kiosk:text-5xl large-kiosk:text-7xl'>
          KIOSK IS UNDER MAINTENANCE
        </Text>
        <Text className='text-center text-sm text-lightGray md:text-lg small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-3xl'>
          We apologize for the inconvenience. The kiosk is currently undergoing
          maintenance and is temporarily unavailable. Please try again later.{' '}
          <Link
            to='/'
            className='text-sm font-bold text-primary md:text-lg small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-3xl'
            onClick={handleLinkClick}
          >
            Return to homepage
          </Link>
        </Text>
      </Card>
    </main>
  );
}

export default Maintenance;
