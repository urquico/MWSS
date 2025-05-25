import { Office } from '@/types/offices-types';
import { TimeStamps } from '@/types/time-stamps';

export type ServiceType = {
  id: number;
  service_name: string;
  service_code: string;
  is_hidden: boolean;
  time_stamps: TimeStamps;
  office: Office;
};
