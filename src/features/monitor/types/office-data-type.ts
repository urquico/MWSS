import { TimeStamps } from '@/types/timestamps-types';

export type OfficeDataType = {
  id: number;
  office_name: string;
  office_code: string;
  location: string;
  is_hidden: boolean;
  time_stamps: TimeStamps;
  monitors: 1;
  counters: number;
};
