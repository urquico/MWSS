import TicketHeader from '@/features/print-ticket/components/TicketHeader';
import { formattedDate } from '@/utils/date-time-format';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import pasigLogo from '/pasigLogo.png';
import pasigSealLogo from '/pasigSealLogo.png';

describe('TicketHeader Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <TicketHeader />
      </MantineProvider>,
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
    const logo = screen.getByAltText('Pasig Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', pasigLogo);
    const sealLogo = screen.getByAltText('Pasig City Seal Logo');
    expect(sealLogo).toBeInTheDocument();
    expect(sealLogo).toHaveAttribute('src', pasigSealLogo);
  });

  it('should display the Pasig logo', () => {
    render(
      <MantineProvider>
        <TicketHeader />
      </MantineProvider>,
    );
    const logo = screen.getByAltText('Pasig Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', pasigLogo);
  });

  it('should display the formatted date', () => {
    render(
      <MantineProvider>
        <TicketHeader />
      </MantineProvider>,
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('should display the Pasig City Seal logo', () => {
    render(
      <MantineProvider>
        <TicketHeader />
      </MantineProvider>,
    );
    const sealLogo = screen.getByAltText('Pasig City Seal Logo');
    expect(sealLogo).toBeInTheDocument();
    expect(sealLogo).toHaveAttribute('src', pasigSealLogo);
  });
});
