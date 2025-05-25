import ConfirmationModal from '@/components/ui/ConfirmationModal';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ConfirmationModal Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <ConfirmationModal open={true} setOpen={() => {}} trigger={<></>} />
      </MantineProvider>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should render the provided props', () => {
    render(
      <MantineProvider>
        <ConfirmationModal
          open={true}
          setOpen={() => {}}
          title='Confirmation'
          message='Are you sure?'
          trigger={<></>}
        />
      </MantineProvider>,
    );
    expect(screen.getByText('Confirmation')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });

  it('should render with default open', () => {
    render(
      <MantineProvider>
        <ConfirmationModal open={true} setOpen={() => {}} trigger={<></>} />
      </MantineProvider>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
