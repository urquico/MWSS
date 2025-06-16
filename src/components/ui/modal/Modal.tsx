import {
  Group,
  Modal as MantineModal,
  ModalProps as MantineModalProps,
  Text,
} from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';
import './modal.css';

interface ModalProps extends MantineModalProps, PropsWithChildren {
  trigger?: ReactNode;
  withHeaderBorder?: boolean;
  contentClassName?: string;
  formActions?: ReactNode;
}

function Modal({
  children,
  trigger,
  withHeaderBorder = false,
  title,
  contentClassName = 'p-10',
  formActions,
  ...props
}: ModalProps) {
  return (
    <>
      <MantineModal {...props} withCloseButton={false} centered>
        <div className="p-5 custom-modal-header" >
          <Group justify='space-between' w='100%' style={{ borderBottom: '1px solid #eee' }}>
            <Text fz={24} fw={600} className='text-neutral'>
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
            <div className='p-5' style={{ borderBottom: '1px solid #eee' }}>
            {formActions}
        </div>
        </div>
         
        <div className={`custom-modal-content ${contentClassName}`}>
            {children}          
        </div>
     
      </MantineModal>
      {trigger ?? null}
    </>
  );
}

export default Modal;