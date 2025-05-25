import { z } from 'zod';

export const serviceSchema = z.object({
  name: z.string().optional(),
  number_of_transaction: z.number().refine((value) => value > 0, {
    message: 'Number of transaction is required',
  }),
  queue_services: z.record(z.boolean()).refine(
    (services) => {
      const trueCount = Object.values(services).filter(
        (value) => value === true,
      ).length;
      return trueCount === 1;
    },
    { message: 'Please select one service' },
  ),
});

export type ServiceSchemaType = z.infer<typeof serviceSchema>;
