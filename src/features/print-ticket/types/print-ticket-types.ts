import { TimeStamps } from '@/types/timestamps-types';

export type QueueService = {
  id: number;
  service: {
    service_name: string;
    service_code: string;
  };
}[];

export type Office = {
  id: number;
  office_name: string;
  office_code: string;
};

export type PrintTicket = {
  id: number;
  ticket_number: string;
  transaction_count: number;
  walk_in_name: string;
  queue_number: string;
  office: Office;
  time_stamps: TimeStamps;
  queue_services: QueueService;
};
