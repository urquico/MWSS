import { Office } from '@/types/offices-types';
import { TimeStamps } from '@/types/time-stamps';

export type MonitorType = {
  id: number;
  monitor_name: string;
  monitor_code: string;
  title_announcement: string;
  announcement: string;
  video_url: string;
  time_stamps: TimeStamps;
  office: Office;
};
