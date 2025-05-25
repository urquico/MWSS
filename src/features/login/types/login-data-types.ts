import { TimeStamps } from '@/types/timestamps-types';

export type LoginDataType = {
  id: number;
  kiosk_name: string;
  kiosk_code: string;
  location: string;
  time_stamps: TimeStamps;
};
