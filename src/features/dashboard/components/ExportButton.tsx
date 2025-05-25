import IconLogout from '@/components/icons/IconLogout';
import Button from '@/components/ui/Button';

function ExportButton() {
  return (
    <main className='flex w-full items-center space-x-4 xl:justify-end'>
      <Button
        color='#25578f'
        className='flex-shrink-0'
        style={{ minWidth: '100px' }}
        leftSection={
          <IconLogout className='h-5 w-5 rotate-[270deg] transform' />
        }
      >
        Export
      </Button>
    </main>
  );
}

export default ExportButton;
