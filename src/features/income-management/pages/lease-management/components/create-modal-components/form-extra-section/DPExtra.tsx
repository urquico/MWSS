import {
  Box,
  Text,
  Divider,
  Card,
  Select,
  Grid,
  Group,
  NumberInput,
 
  Table,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import TextInput from '@/components/ui/TextInput';

interface DemandToPayExtrasProps {
  fields: any[];

  form: UseFormReturnType<any>;
}

const inlineInputStyle = { display: 'inline-block', marginBottom: -5 };

function InlineTextInput({
  field,
  placeholder,
  width,
  form,
}: {
  field: string;
  placeholder: string;
  width: number;
  form: UseFormReturnType<any>;
}) {

  return (
    <TextInput
      size="xs"
      placeholder={placeholder}
      {...form.getInputProps(field)}
      style={{ ...inlineInputStyle, width }}
    />
  );
}

function InlineNumberInput({
  field,
  placeholder,
  width,
  form,
}: {
  field: string;
  placeholder: string;
  width: number;
  form: UseFormReturnType<any>;
}) {
  return (
    <NumberInput
      size="xs"
      placeholder={placeholder}
      {...form.getInputProps(field)}
      style={{ ...inlineInputStyle, width }}
      min={0}
    />
  );
}

function DisabledLabeledInput({
  label,
  field,
  width = 200,
  form,
}: {
  label: string;
  field: string;
  width?: number;
  form: UseFormReturnType<any>;
}) {
  return (
    <Group justify="space-between" mb="xs">
      <Text>{label}</Text>
      <TextInput w={width} disabled {...form.getInputProps(field)} />
    </Group>
  );
}

function DemandToPayExtras({ form ,fields}: DemandToPayExtrasProps) {
  // For Select options
    console.log('DemandToPayExtras props:', {  form ,fields});

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const years = Array.from({ length: 5 }, (_, i) => `${2025 + i}`);
const paymentInstructions = [
  { label: 'Merchant Name:', value: 'MWSS - CO Lease Rental' },
  { label: 'Account Number:', value: '1462 - 1037 - 40' },
  { label: 'Transaction Type:', value: 'Rental Payment' },
  {
    label: 'Payment Details:',
    value: [
      'Amount',
      'Name of Payor',
      'Purpose of Payment',
      'Reference Number',
      'Contact No.',
      'Email Address',
    ],
  },
  {
    label: 'Payment Mode:',
    value: ['Bank Name', 'Bank Account'],
  },
  {
    label: 'One Time Password:',
    value: 'To authorize this transaction, please enter your One Time Password.',
  },
];

  return (
    <Card withBorder radius="md" mt="md">
      <Box p="md">
        <Text size="sm" mb="sm" lh={3}>
          This is in reference with the rental of{' '}
          <InlineTextInput field="buildingSpace" placeholder="Building Space" width={200} form={form} />{' '}
          as stated in the{' '}
          <InlineTextInput field="contractName" placeholder="Contract of Lease" width={200} form={form} />{' '}
          located at{' '}
          <InlineTextInput field="contractLocation" placeholder="Location" width={200} form={form} />{' '}
          consisting of{' '}
          <InlineNumberInput field="squareMeters" placeholder="0" width={100} form={form} />{' '}
          square meters. Please remit the amount of{' '}
          <InlineTextInput field="amountInWords" placeholder="Amount in Words" width={250} form={form} />{' '}
          representing rent for the month/s of{' '}
          <InlineTextInput field="rentalPeriod" placeholder="Rental Period" width={200} form={form} />{' '}
          detailed as follows:
        </Text>

        <Text size="sm" mb="xs">
          You may also see attached Statement of Account for further details.
        </Text>

        <Divider my="sm" label="Payment Breakdown" labelPosition="left" />

        <Grid gutter="md">
          <Grid.Col span={12}>
            <NumberInput
              label="Arrearages"
              min={0}
              {...form.getInputProps('arrearages')}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Select
              label="Rental Month"
              placeholder="Select month"
              data={months}
              {...form.getInputProps('rentalMonth')}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Select
              label="Rental Year"
              placeholder="Select year"
              data={years}
              {...form.getInputProps('rentalYear')}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <NumberInput
              label="SQM"
              placeholder="0.00"
              min={0}
              {...form.getInputProps('sqm')}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <NumberInput
              label="Rate"
              placeholder="0.00"
              min={0}
              {...form.getInputProps('rate')}
            />
          </Grid.Col>

          {/* Disabled computed fields */}
          <Grid.Col span={12}>
            <DisabledLabeledInput label="Interest" field="interest" form={form} />
            <DisabledLabeledInput label="Total Rent Due" field="totalRentDue" form={form} />

            <Text fw={500} mt="md" mb="xs">Add:</Text>

            <DisabledLabeledInput label="12% VAT" field="vat" form={form} />
            <DisabledLabeledInput label="Gross Amount" field="grossAmount" form={form} />

            <Text fw={500} mt="md" mb="xs">Less:</Text>

            <DisabledLabeledInput label="Amount Paid" field="amountPaid" form={form} />
            <DisabledLabeledInput label="5% EWT" field="ewt" form={form} />
            <DisabledLabeledInput label="Total Deductions" field="totalDeductions" form={form} />

            <DisabledLabeledInput label="Net Amount Due" field="netAmountDue" form={form} />
          </Grid.Col>
        </Grid>

        <Divider my="md" label="Please make payment" labelPosition="left" />

        {/* Payment Instructions */}
<Box mt="sm">
      <Table withColumnBorders     className="overflow-hidden shadow-sm rounded-xl"

  >
        <Table.Tbody >
          {paymentInstructions.map((item) => (
            <Table.Tr key={item.label}>
              {/* Label Cell */}
<Table.Td className="bg-skyBlue font-medium align-top w-[40%]">
                <Text size="sm" c='white' fw={600}>{item.label}:</Text>
              </Table.Td>

              {/* Value Cell */}
              <Table.Td style={{ verticalAlign: 'top' }}>
                {Array.isArray(item.value) ? (
                  item.value.map((line, i) => (
                    <Text size="sm" key={i}>
                      {line}
                    </Text>
                  ))
                ) : (
                  <Text size="sm">{item.value}</Text>
                )}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>

        <Text mt="md" size="sm">
          There will be a corresponding bank charge which will be shouldered by the Lessee.
        </Text>

        <Text size="sm" mt="xs">
          When payment is done, kindly email us a copy of payment transaction
          slip together with the BIR Form 2307 so we can make corresponding Sales Invoice.
        </Text>

        <Text mt="sm" size="sm">Thank you.</Text>

        <Text mt="md" fw={500}>Very truly yours,</Text>
        <Select
          placeholder="Administrator"
          data={['Administrator', 'Billing Officer', 'Finance Officer']}
          {...form.getInputProps('preparedBy')}
        />
      </Box>
    </Card>
  );
}

export default DemandToPayExtras;
