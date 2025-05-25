import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import CurrentDate from '../CurrentDate';

// Mock date utility functions
vi.mock('../date-time-format', () => ({
  formatDate: (date: Date) => `MockedDate(${date.toISOString()})`,
  formatTime: (date: Date) => `MockedTime(${date.toISOString()})`,
  getDayOfWeek: (date: Date) => `MockedDay(${date.toISOString()})`,
}));

describe('CurrentDate Hook', () => {
  beforeEach(() => {
    // Mock the current date for consistent testing
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01T12:00:00Z')); // Start tests with a consistent time
  });

  afterEach(() => {
    vi.useRealTimers(); // Reset timers after each test
  });

  it('should return the initial date, time, and day of the week', () => {
    const { result } = renderHook(() => CurrentDate());

    const { formattedDate, formattedTime, dayOfWeek } = result.current;

    expect(formattedDate).toBe('MockedDate(2024-01-01T12:00:00.000Z)');
    expect(formattedTime).toBe('MockedTime(2024-01-01T12:00:00.000Z)');
    expect(dayOfWeek).toBe('MockedDay(2024-01-01T12:00:00.000Z)');
  });

  it('should update the state dynamically at the start of the next minute', () => {
    const { result } = renderHook(() => CurrentDate());

    // Advance time to the next minute
    act(() => {
      vi.advanceTimersByTime(60000); // Advance by 60 seconds (1 minute)
    });

    const { formattedDate, formattedTime, dayOfWeek } = result.current;

    expect(formattedDate).toBe('MockedDate(2024-01-01T12:01:00.000Z)');
    expect(formattedTime).toBe('MockedTime(2024-01-01T12:01:00.000Z)');
    expect(dayOfWeek).toBe('MockedDay(2024-01-01T12:01:00.000Z)');
  });

  it('should handle edge cases near the end of the minute', () => {
    vi.setSystemTime(new Date('2024-01-01T12:59:59.500Z')); // Set time just before the next minute
    const { result } = renderHook(() => CurrentDate());

    // Advance time to the next minute
    act(() => {
      vi.advanceTimersByTime(500); // Advance by 0.5 seconds to the next minute
    });

    const { formattedDate, formattedTime, dayOfWeek } = result.current;

    expect(formattedDate).toBe('MockedDate(2024-01-01T13:00:00.000Z)');
    expect(formattedTime).toBe('MockedTime(2024-01-01T13:00:00.000Z)');
    expect(dayOfWeek).toBe('MockedDay(2024-01-01T13:00:00.000Z)');
  });
});
