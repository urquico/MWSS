import { TimeStamps } from '@/types/time-stamps';

export type Office = {
  id: number;
  is_hidden: boolean;
  location: string;
  office_code: string;
  office_name: string;
  time_stamps: TimeStamps;
};
