import { useEffect, useState } from 'react';

interface Counter {
  id: number;
  counter_name: string;
  counter_code: string;
  is_break: boolean;
  is_recalling: boolean;
  time_stamps: {
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
  };
}

const useCounter = () => {
  // Initialize state directly from localStorage if available
  const initialCounter = JSON.parse(
    localStorage.getItem('counters') || 'null',
  ) as Counter | null;
  const [counter, setCounter] = useState<Counter | null>(initialCounter);

  useEffect(() => {
    // Optionally, sync the localStorage in case it changes outside of this hook's scope
    const storedCounter = JSON.parse(
      localStorage.getItem('counters') || 'null',
    ) as Counter;
    if (storedCounter !== counter) {
      setCounter(storedCounter);
    }
  }, []);

  const defaultCounter = {
    id: 0,
    counter_name: '',
    counter_code: '',
    is_break: false,
    is_recalling: false,
    time_stamps: {
      deleted_at: null,
      created_at: '',
      updated_at: '',
    },
  };

  return {
    id: counter ? counter.id : defaultCounter.id,
    counterName: counter ? counter.counter_name : defaultCounter.counter_name,
    counterCode: counter ? counter.counter_code : defaultCounter.counter_code,
    isBreak: counter ? counter.is_break : defaultCounter.is_break,
    isRecalling: counter ? counter.is_recalling : defaultCounter.is_recalling,
  };
};

export default useCounter;
