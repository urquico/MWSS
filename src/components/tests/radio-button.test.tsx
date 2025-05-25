import Radio from '@/components/ui/radio-button/Radio';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Radio', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Radio id='radio' label='Radio' />
      </MantineProvider>,
    );

    expect(screen.getByText('Radio')).toBeInTheDocument();
  });

  it('should render with a group', () => {
    render(
      <MantineProvider>
        <Radio.Group>
          <Radio id='radio' label='Radio' />
          <Radio id='radio2' label='Radio 2' />
        </Radio.Group>
      </MantineProvider>,
    );

    expect(screen.getByText('Radio')).toBeInTheDocument();
    expect(screen.getByText('Radio 2')).toBeInTheDocument();
  });

  it('should render with a card', () => {
    render(
      <MantineProvider>
        <Radio.Card>
          <Radio id='radio' label='Radio' />
          <Radio id='radio2' label='Radio 2' />
        </Radio.Card>
      </MantineProvider>,
    );
    expect(screen.getByText('Radio')).toBeInTheDocument();
    expect(screen.getByText('Radio 2')).toBeInTheDocument();
  });
});
