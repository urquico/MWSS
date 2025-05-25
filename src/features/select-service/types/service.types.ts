export type OfficeServicesType = {
  id: number;
  service_name: string;
};

type QueueServices = {
  id: number;
};

export type TicketType = {
  ticket_number?: string;
  walk_in_name: string;
  transaction_count: number;
  is_prioritized: boolean;
  office: number;
  queue_services: QueueServices[];
  kiosk: string;
};

export type CreateTicketMutationType = {
  officeID: string;
  is_prioritized: boolean;
  queueServices: Record<string, boolean>;
  name: string;
  numberOfTransaction: number;
  resetFormAndState: () => void;
};
