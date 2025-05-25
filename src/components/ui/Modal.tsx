import {
  Divider,
  Group,
  Modal as MantineModal,
  ModalProps as MantineModalProps,
  Text,
} from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';

interface ModalProps extends MantineModalProps, PropsWithChildren {
  trigger?: ReactNode;
  withHeaderBorder?: boolean; // Controls header border visibility
  contentClassName?: string; 

}

/**
 * Modal component renders a customizable modal dialog using Mantine's Modal component.
 *
 * @component
 * @param {ModalProps} props - Properties to customize the modal.
 * @param {ReactNode} [props.trigger] - Element that triggers the modal to open.
 * @param {boolean} [props.withHeaderBorder=false] - Whether to show a border under the header.
 * @param {string} [props.title] - Title of the modal dialog.
 * @param {function} props.onClose - Function called when the modal is closed.
 * @returns {JSX.Element} A styled modal component with a customizable header and close button.
 */

function Modal({
  children,
  trigger,
  withHeaderBorder = false,
  title,
  contentClassName = 'p-40',
  ...props
}: ModalProps) {
  return (
    <>
      <MantineModal {...props} withCloseButton={false} >
        {/* Custom Header */}
        <Group  justify='space-between' w='100%' >
          <Text fz={30} fw={600} className='text-neutral'>
            {title}
          </Text>
          <button
            onClick={props.onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.25rem',
            }}
          >
            ✖
          </button>
        </Group>

        {/* Divider for Header Border */}
        {withHeaderBorder && <Divider my='sm' color='gray.3' />}
        <div className={contentClassName}>

        {/* Modal Content */}
        {children}
        </div>
      </MantineModal>

      {trigger ?? null}
    </>
  );
}

export default Modal;
