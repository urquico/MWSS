import { Office } from '@/types/offices-types';
import { TimeStamps } from '@/types/time-stamps';

export type Counter = {
  id: number;
  counter_code: string;
  counter_name: string;
  is_break: boolean;
  is_recalling: boolean;
  time_stamps: TimeStamps;
  office: Office;
};
