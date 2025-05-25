import Modal from '@/components/ui/Modal';
import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Modal Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Modal opened={true} onClose={() => {}} />
      </MantineProvider>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should render with the correct title', () => {
    render(
      <MantineProvider>
        <Modal opened={true} onClose={() => {}} title='Test Title' />
      </MantineProvider>,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should render with the correct children', () => {
    render(
      <MantineProvider>
        <Modal opened={true} onClose={() => {}}>
          <div>Test Children</div>
        </Modal>
      </MantineProvider>,
    );
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('should render with the correct onClose function', () => {
    const onClose = vi.fn();
    render(
      <MantineProvider>
        <Modal opened={true} onClose={onClose} />
      </MantineProvider>,
    );
    const closeButton = screen.getByRole('button', { hidden: true, name: '' });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
