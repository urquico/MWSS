import Button from '@/components/ui/Button';
import Modal from '@/components/ui/modal/Modal';
import Text from '@/components/ui/Text';

interface ConfirmationModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  title?: string;
  message?: string;
  trigger: React.ReactNode;
}
/**
 * ConfirmationModal component renders a modal dialog for user confirmation.
 *
 * @param {ConfirmationModalProps} props - Properties to customize the modal.
 * @returns {JSX.Element} A styled confirmation modal component.
 *
 * @constant {boolean} open - Determines if the modal is open.
 * @constant {function} setOpen - Function to set the open state of the modal.
 * @constant {function} onConfirm - Callback function executed on confirmation.
 * @constant {boolean} isLoading - Indicates if the confirm button should show a loading state.
 * @constant {string} title - Title of the modal.
 * @constant {string} message - Message displayed in the modal.
 * @constant {React.ReactNode} trigger - Element that triggers the modal.
 */

function ConfirmationModal({
  open = false,
  setOpen,
  onConfirm,
  isLoading,
  disabled,
  title = 'Confirmation',
  message = 'Are you sure you want to proceed?',
  trigger,
}: ConfirmationModalProps) {
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      trigger={trigger}
      withCloseButton={false}
      centered
      radius='md'
      size='xl'
    >
      <main className='flex flex-col gap-8 p-4'>
        <Text className='font-inter text-2xl font-bold leading-none'>
          {title}
        </Text>
        <Text className='pb-6 font-inter text-2xl leading-none'>{message}</Text>
        <div className='flex justify-end gap-4'>
          <Button variant='outline' size='xl' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            size='xl'
            onClick={onConfirm}
            loading={isLoading}
            disabled={disabled}
          >
            Confirm
          </Button>
        </div>
      </main>
    </Modal>
  );
}

export default ConfirmationModal;
