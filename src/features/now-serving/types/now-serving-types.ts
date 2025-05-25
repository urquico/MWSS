import { TimeStamps } from '@/types/timestamps-types';

export type MonitorType = {
  id: number;
  monitor_name: string;
  title_announcement: string;
  announcement: string;
  video_url: string;
};

export type CurrentCounterType = {
  id: number;
  counter_name: string;
  counter_code: string;
  is_break: boolean;
  is_recalling: boolean;
  is_next: boolean;
  time_stamps: TimeStamps;
};

export type CurrentServiceType = {
  id: number;
  service_name: string;
  service_code: string;
};

export type QueueServiceType = {
  id: number;
  walk_in_name: string;
  queue_number: string;
  cancelled_at: string | null;
  current_counter: CurrentCounterType;
  current_service: CurrentServiceType;
};

export type QueueType = {
  now_serving: QueueServiceType[] | null;
  recalling_counters: QueueServiceType[] | null;
  next_serving: QueueServiceType[] | null;
  empty_counters: QueueServiceType[];
  total: number;
};

export type NowServingType = {
  monitor: MonitorType;
  queues: QueueType;
};
