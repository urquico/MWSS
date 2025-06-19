import React from 'react';
import { Box, Paper, Table, Text } from '@mantine/core';
import { rawWaterBillingStatementTables, consumptionHistoryChart, getTitle } from '../../../config/generate-modal-config';
import { LabelValueItem, RawWaterMainTableItem } from '@/features/income-management/types/modal-fields';
import BaseModal from "@/features/income-management/components/BaseModal";
import MonthlyBarChart from '@/features/dashboard/chart/MonthlyBarChart';


interface RWBSTemplateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}



const isLabelValueItem = (item: any): item is LabelValueItem =>
  typeof item === 'object' && 'label' in item && 'value' in item;

const isRawWaterMainTableItem = (item: any): item is RawWaterMainTableItem =>
  item && typeof item === 'object'
  && 'unpaidBalance' in item
  && 'penalty' in item
  && 'totalCurrentDue' in item
  && 'dueDate' in item
  && 'totalAmountDue' in item;


const RWBSTemplate: React.FC<RWBSTemplateProps> = ({ data, onClose, viewType }) => {
  const mainTable = rawWaterBillingStatementTables.find(t => t.name === 'main');
  const accountInfo = rawWaterBillingStatementTables.find(t => t.name === 'accountInfo');
  const billingInfo = rawWaterBillingStatementTables.find(t => t.name === 'billingInfo');
  const charges = rawWaterBillingStatementTables.find(t => t.name === 'charges');
  const payment = rawWaterBillingStatementTables.find(t => t.name === 'payment');

  const mainRows = Array.isArray(mainTable?.data)
    ? mainTable.data.filter(isRawWaterMainTableItem)
    : [];

  return (
    <BaseModal
      title={`${getTitle(viewType)}`}
      exportText="Export to Excel"
      printText="Print PDF"
      opened={true}
      onClose={onClose}
      showExportButton={false}
      showPrintButton={true}
      withFooter={true}
      withHeader={true}
    >
      <Box mt="sm">
        {/* Main Table */}
        {mainRows.length > 0 && (
          <Paper radius="md" withBorder className="overflow-hidden" mb={10}>
            <Table withColumnBorders>
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
                <Table.Tr>
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

        <div className='mb-4'>
          <Text>Customer Name:</Text>
          <Text fw={700} className='uppercase'>JUAN DELA CRUZ</Text>
          <Text>Location:</Text>
          <Text fw={700} className='uppercase'>489 Katipunan Road, Balara, Quezon City.</Text>
          <div className="mt-2">
            <Text>Attention: Atty. Jo Kristine G. Celera - Enterprise Regulatory Affairs Director</Text>
          </div>
        </div>

        {/* ROW 1: Account Info (wider) + Consumption History */}
        <div className="flex flex-col gap-4 mb-4 md:flex-row">
          <div className="flex-1 md:max-w-[60%] ">
            {accountInfo && Array.isArray(accountInfo.data) && (
              <Paper radius="md" withBorder >
                <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                  Account Information
                </Text>
                <Table withColumnBorders className='h-[145px]'>
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
          </div>
          <div className="flex-1 md:max-w-[40%]">
            <MonthlyBarChart
              data={consumptionHistoryChart.data}
              series={consumptionHistoryChart.series}
              dataKey="month"
              title={consumptionHistoryChart.title}
              h={consumptionHistoryChart.height}
              w={consumptionHistoryChart.width}
            />
          </div>
        </div>

        {/* ROW 2: Billing Info (left), Break Down + Payment (right, stacked) */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 md:max-w-[50%]">
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
          </div>
          <div className="flex-1 md:max-w-[50%] flex flex-col gap-4">
            {charges && Array.isArray(charges.data) && (
              <Paper radius="md" withBorder>
                <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                  Break Down in PHP
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
            {payment && Array.isArray(payment.data) && (
              <Paper radius="md" withBorder>
                <Text fw={600} size="sm" className="px-4 py-2 bg-skyBlue rounded-t-md">
                  Details of Payment Made
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
        
          <div className="my-2">
          <Text fw={700}>Metropolitan Waterworks and Sewage System - Corporate Office </Text>
          <Text fw={700}>MWSS LBP ACCOUNT NO. 1462 - 1037-31</Text>
            <div className="flex flex-col mt-5">
              <Text fw={600}>Payment Options:</Text>
              <Text>• Over-the-counter</Text>
              <Text>
                • Online transfer or Bank Deposit (Please send a screenshot or photo of your proof of payment via our email address (<a href="mailto:treasury@mwss.gov.ph" className="text-blue-700 underline">treasury@mwss.gov.ph</a>))
              </Text>
              <Text>
                • Landbank Link.Biz Portal (<a href="https://tinyurl.com/yc3pb5xx" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">https://tinyurl.com/yc3pb5xx</a>)
              </Text>
            </div>
          <Text className='mt-5'>For queries or concerns regarding this billing, you may contact us at <b>(02) 8928-2252</b> </Text>
            
        </div>
            <Paper
        withBorder
        radius="md"
        p="md"
        mb="md"
      
      >
        <Text fw={500} mb={4}>Reminders</Text>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li>
            1. An account left unpaid after the due date is subject to an <b>interest charge computed at one and one-half (1-1/2%) percent per month of the amount due.</b>
          </li>
          <li>
            2. A Notice of Disconnection stating that full payment should be made within 5 days upon receipt of Demand Letters; otherwise, water service will be disconnected without further notice.
          </li>
          <li>
            3. The guarantee deposit will be applied to the arrears, and the resulting balance will be the amount payable to MWSS by the account owner.
          </li>
          <li>
            4. A customer applying for reconnection should pay in full his arrears, including accumulated interest charges.<br />
            A reconnection fee shall be charged to all approved customers for temporary or permanent reconnection.
          </li>
        </ul>
      </Paper>
    <div className="flex items-center justify-center w-full my-8">
  <Paper
    withBorder
    radius="md"
    pt="xl"
    mt="md"
    w={500}
    className="mx-auto"
  >
    <div className="w-[80%] border-b-2 border-black mx-auto mt-2" />
    <div className="text-base font-bold text-center ">
      OIC - DEPARTMENT MANAGER, FINANCE
    </div>
  </Paper>
</div>
      </Box>
    </BaseModal>
  );
};

export default RWBSTemplate;