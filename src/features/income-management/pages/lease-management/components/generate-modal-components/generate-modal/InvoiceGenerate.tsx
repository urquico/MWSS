

import { Box, Grid, Paper, Table, Text } from '@mantine/core';
import BaseModal from "@/features/income-management/components/BaseModal";
import { generateModalConfigs } from "../../../config/generate-modal-config";
import { getTitle } from "../../../config/generate-modal-config";
import { invoiceTrackingTables } from '../../../config/create-modal-config';
import type { MainTableItem, LabelValueItem, TableDataItem } from '../../../config/create-modal-config';
import TextInput from '@/components/ui/TextInput';

interface InvoiceGenerateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

const InvoiceGenerate: React.FC<InvoiceGenerateProps> = ({ data, onClose, viewType }) => {
  const configuration = generateModalConfigs[viewType];
  if (!configuration) {
    return <div>No configuration found.</div>;
  }

  const fields = configuration.fields ?? [];

  // Get table configurations from invoiceTrackingTables with proper types
  const mainTableConfig = invoiceTrackingTables.find(table => table.name === 'main');
  const salesInfoConfig = invoiceTrackingTables.find(table => table.name === 'salesInfo');
  const discountsConfig = invoiceTrackingTables.find(table => table.name === 'discounts');
  const totalsConfig = invoiceTrackingTables.find(table => table.name === 'totals');

  // Type guard to check if item is LabelValueItem
  const isLabelValueItem = (item: TableDataItem): item is LabelValueItem => {
    return 'label' in item && 'value' in item;
  };

  return (

    <BaseModal
      title={`Create ${getTitle(viewType)}`}
      showExportButton={false}
      showEditButton={false}
      printText="Print PDF"
      opened={true}
      onClose={onClose}
    >
      <Box mt="sm">
        <Grid>
          {fields.map((field) => (
            <Grid.Col key={field.name} span={field.span}>
              <TextInput
                label={field.label}
                description={field.description}
                value={data?.[field.name] ?? ""}
                disabled
                mt="md"
              />
            </Grid.Col>
          ))}
        </Grid>

        {/* Main Horizontal Table */}
        {mainTableConfig && mainTableConfig.columns && (
        <Paper radius="md" withBorder mb={30} className='overflow-hidden'>
            <Table withColumnBorders mb="md">
              <Table.Thead>
              <Table.Tr className='bg-skyBlue'>
                  {mainTableConfig.columns.map(column => (
                    <Table.Th key={column.accessor}>{column.header}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {mainTableConfig.data.map((row, index) => (
                  <Table.Tr key={index}>
                    {mainTableConfig.columns.map(column => (
                      <Table.Td key={column.accessor}>
                        {['unitPrice', 'amount'].includes(column.accessor)
                          ? Number((row as MainTableItem)[column.accessor as keyof MainTableItem]).toFixed(2)
                          : (row as MainTableItem)[column.accessor as keyof MainTableItem]}
                      </Table.Td>
                    ))}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        )}
        {/* Two-column layout for vertical tables */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left Column */}
          <div className="flex-1">
            {/* Sales Info Table */}
            {salesInfoConfig && (
              <Paper radius="md" withBorder mb={30}>
                <Table withColumnBorders>
                  <Table.Tbody>
                    {salesInfoConfig.data.map((item, index) => (
                      <Table.Tr key={isLabelValueItem(item) ? item.label : index}>
                        {isLabelValueItem(item) && (
                          <>
                            <Table.Td className=" font-medium w-[200px]">
                              <Text size="sm"  fw={600}>
                                {item.label}
                              </Text>
                            </Table.Td>
                            <Table.Td>
                              <Text size="sm">{item.value}</Text>
                            </Table.Td>
                          </>
                        )}
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            )}

            {/* Discounts/Signature Table */}
            {discountsConfig && (
              <Paper radius="md" withBorder>
                <Table withColumnBorders>
                  <Table.Tbody>
                    {discountsConfig.data.map((item, index) => (
                      <Table.Tr key={isLabelValueItem(item) ? item.label : index}>
                        {isLabelValueItem(item) && (
                          <>
                            <Table.Td className=" font-medium w-[200px]">
                              <Text size="sm" fw={600}>
                                {item.label}
                              </Text>
                            </Table.Td>
                            <Table.Td>
                              <Text size="sm">{item.value}</Text>
                            </Table.Td>
                          </>
                        )}
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            )}
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {totalsConfig && (
              <Paper radius="md" withBorder>
                <Table withColumnBorders>
                  <Table.Tbody>
                    {totalsConfig.data.map((item, index) => (
                      <Table.Tr key={isLabelValueItem(item) ? item.label : index}>
                        {isLabelValueItem(item) && (
                          <>
                            <Table.Td
                              style={{  fontWeight: 500, width: 200 }}
                            >
                              <Text size="sm" fw={600}>
                                {item.label}
                              </Text>
                            </Table.Td>
                            <Table.Td>
                              <Text size="sm" fw={item.isBold ? 700 : 400}>
                                {item.value}
                              </Text>
                            </Table.Td>
                          </>
                        )}
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            )}
          </div>
        </div>
        <div className="flex justify-end w-full mt-10">
          <div className="text-left">
            <Text className="mb-10" fw={700}>Prepared by:</Text>
            <Text fw={700}>____________________________________________</Text>
            <Text fw={700} td='underlined'>(Cashier/Authorized Representative)</Text>
          </div>
        </div>
      </Box>
    </BaseModal>
  );
};



export default InvoiceGenerate;


