// Import Vitest functions
import OfficeCard from '@/features/select-office/components/OfficeCard';
import { offices } from '@/features/select-office/lib/office-name';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// Adjust the path as needed

describe('OfficeCard Component with Multiple Offices', () => {
  it('should render an OfficeCard for each office in the list', () => {
    offices.forEach((office) => {
      render(
        <MantineProvider>
          <OfficeCard officeName={office.name} />
        </MantineProvider>,
      );
    });

    offices.forEach((office) => {
      expect(screen.getByText(office.name)).toBeInTheDocument();
    });
  });

  it('should apply default styles to all OfficeCards', () => {
    offices.forEach((office) => {
      render(
        <MantineProvider>
          <OfficeCard officeName={office.name} />
        </MantineProvider>,
      );
    });

    offices.forEach((office) => {
      const cardElement = screen.getByText(office.name).closest('div');
      expect(cardElement).toHaveClass('border-l-[#4aa5de]');
    });
  });
});
