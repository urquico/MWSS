import TicketDetails from '@/features/print-ticket/components/TicketDetails';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TicketDetails Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <TicketDetails />
      </MantineProvider>,
    );
    expect(screen.getByText('Ticket Reference No.')).toBeInTheDocument();
  });

  it('should render the office name', () => {
    render(
      <MantineProvider>
        <TicketDetails />
      </MantineProvider>,
    );
    expect(screen.getByText('Office')).toBeInTheDocument();
  });

  it('should render the services', () => {
    render(
      <MantineProvider>
        <TicketDetails />
      </MantineProvider>,
    );

    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('should render the reference number', () => {
    render(
      <MantineProvider>
        <TicketDetails />
      </MantineProvider>,
    );

    expect(screen.getByText('Ticket Reference No.')).toBeInTheDocument();
  });
});
