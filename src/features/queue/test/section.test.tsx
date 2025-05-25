import Section from '@/features/queue/components/Section';
import { sectionData } from '@/features/queue/lib/data/header-data';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Section', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Section sectionData={sectionData} />
      </MantineProvider>,
    );
    expect(screen.getByText('Counter')).toBeInTheDocument();
  });

  it('should render with the correct text', () => {
    render(
      <MantineProvider>
        <Section sectionData={sectionData} />
      </MantineProvider>,
    );
    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(screen.getByText('Now Serving')).toBeInTheDocument();
    expect(screen.getByText('People in Queue')).toBeInTheDocument();
  });
});
