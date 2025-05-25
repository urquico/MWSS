import { TimeStamps } from '@/types/timestamps-types';

export type DisplayMonitorDataType = {
  id: number;
  monitor_name: string;
  monitor_code: string;
  title_announcement: string;
  announcement: string;
  video_url: string;
  time_stamps: TimeStamps;
  counters: number;
};
