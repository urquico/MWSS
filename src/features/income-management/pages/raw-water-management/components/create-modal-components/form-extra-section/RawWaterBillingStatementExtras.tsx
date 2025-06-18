import React from 'react';
import { Box, Paper, Table, Text } from '@mantine/core';
import { rawWaterBillingStatementTables } from '../../../config/create-modal-config';
import { LabelValueItem, RawWaterMainTableItem } from '@/features/income-management/types/modal-fields';

const isLabelValueItem = (item: any): item is LabelValueItem =>
  typeof item === 'object' && 'label' in item && 'value' in item;

const isRawWaterMainTableItem = (item: any): item is RawWaterMainTableItem =>
  item && typeof item === 'object'
  && 'unpaidBalance' in item
  && 'penalty' in item
  && 'totalCurrentDue' in item
  && 'dueDate' in item
  && 'totalAmountDue' in item;

const RawWaterBillingStatementExtras = () => {
  const mainTable = rawWaterBillingStatementTables.find(t => t.name === 'main');
  const accountInfo = rawWaterBillingStatementTables.find(t => t.name === 'accountInfo');
  const billingInfo = rawWaterBillingStatementTables.find(t => t.name === 'billingInfo');
  const charges = rawWaterBillingStatementTables.find(t => t.name === 'charges');
  const payment = rawWaterBillingStatementTables.find(t => t.name === 'payment');

  // Filter only RawWaterMainTableItem rows
  const mainRows = Array.isArray(mainTable?.data)
    ? mainTable.data.filter(isRawWaterMainTableItem)
    : [];
  return (
    <Box mt="sm">
       {/* Main Table with complex header and correct layout */}
      {mainRows.length > 0 && (
<Paper radius="md" withBorder mb={30} className="overflow-hidden">
  <Table withColumnBorders mb="md">
    <Table.Thead>
      <Table.Tr className="bg-skyBlue">
        <Table.Th colSpan={2} style={{ textAlign: 'center' }}>Balance from Previous Billing</Table.Th>
        <Table.Th colSpan={2} style={{ textAlign: 'center' }}>Current Billing</Table.Th>
        <Table.Th rowSpan={2} style={{ textAlign: 'center', verticalAlign: 'middle' }}>Total Amount Due</Table.Th>
      </Table.Tr>
      <Table.Tr className="bg-skyBlue">
        <Table.Th style={{ textAlign: 'center' }}>Unpaid Balance</Table.Th>
        <Table.Th style={{ textAlign: 'center' }}>Penalty</Table.Th>
        <Table.Th style={{ textAlign: 'center' }}>Total Current Due</Table.Th>
        <Table.Th style={{ textAlign: 'center' }}>Due Date</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      <Table.Tr >
        <Table.Td style={{ textAlign: 'center' }}>{mainRows[0].unpaidBalance}</Table.Td>
        <Table.Td style={{ textAlign: 'center' }}>{mainRows[0].penalty}</Table.Td>
        <Table.Td style={{ textAlign: 'center' }}>{mainRows[0].totalCurrentDue}</Table.Td>
        <Table.Td style={{ textAlign: 'center' }}>{mainRows[0].dueDate}</Table.Td>
        <Table.Td rowSpan={1} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
          {mainRows[0].totalAmountDue}
        </Table.Td>
      </Table.Tr>
    </Table.Tbody>
  </Table>
</Paper>
      )}

      {/* Vertical/Label-Value Tables */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-4">
          {/* Account Info */}
          {accountInfo && Array.isArray(accountInfo.data) && (
            <Paper radius="md" withBorder>
              <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                Account Information
              </Text>
              <Table withColumnBorders>
                <Table.Tbody>
                  {(accountInfo.data as LabelValueItem[]).map((item) =>
                    isLabelValueItem(item) ? (
                      <Table.Tr key={item.label}>
                        <Table.Td className="font-medium w-[200px]">
                          <Text size="sm" fw={600}>{item.label}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm">{item.value}</Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : null
                  )}
                </Table.Tbody>
              </Table>
            </Paper>
          )}

          {/* Charges */}
          {charges && Array.isArray(charges.data) && (
            <Paper radius="md" withBorder>
              <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                Charges
              </Text>
              <Table withColumnBorders>
                <Table.Tbody>
                  {(charges.data as LabelValueItem[]).map((item) =>
                    isLabelValueItem(item) ? (
                      <Table.Tr key={item.label}>
                        <Table.Td className="font-medium w-[200px]">
                          <Text size="sm" fw={600}>{item.label}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm">{item.value}</Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : null
                  )}
                </Table.Tbody>
              </Table>
            </Paper>
          )}
        </div>

        <div className="flex flex-col flex-1 gap-4">
          {/* Billing Info */}
          {billingInfo && Array.isArray(billingInfo.data) && (
            <Paper radius="md" withBorder>
              <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                Billing Information
              </Text>
              <Table withColumnBorders>
                <Table.Tbody>
                  {(billingInfo.data as LabelValueItem[]).map((item) =>
                    isLabelValueItem(item) ? (
                      <Table.Tr key={item.label}>
                        <Table.Td className="font-medium w-[200px]">
                          <Text size="sm" fw={600}>{item.label}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm">{item.value}</Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : null
                  )}
                </Table.Tbody>
              </Table>
            </Paper>
          )}

          {/* Payment */}
          {payment && Array.isArray(payment.data) && (
            <Paper radius="md" withBorder>
              <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                Payment
              </Text>
              <Table withColumnBorders>
                <Table.Tbody>
                  {(payment.data as LabelValueItem[]).map((item) =>
                    isLabelValueItem(item) ? (
                      <Table.Tr key={item.label}>
                        <Table.Td className="font-medium w-[200px]">
                          <Text size="sm" fw={600}>{item.label}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm">{item.value}</Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : null
                  )}
                </Table.Tbody>
              </Table>
            </Paper>
          )}
        </div>
      </div>
    </Box>
  );
};

export default RawWaterBillingStatementExtras;