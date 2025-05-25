import { Button, Modal, Text } from '@mantine/core';

export function PasswordUpdatedModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false}>
      <Text>Your password has been updated successfully!</Text>
      <Button onClick={onClose}>Continue</Button>
    </Modal>
  );
}
