export type QueuesType = {
  queues: string[];
};

export type CounterDataType = {
  counter_name: string;
  service_name: string;
  queues: QueuesType['queues'];
};

export type CounterType = {
  counter: CounterDataType[];
};
