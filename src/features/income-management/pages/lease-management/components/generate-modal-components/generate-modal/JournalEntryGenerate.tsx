import React from 'react';
import { Box, Grid, Paper, SimpleGrid, Stack, Table } from '@mantine/core';
import BaseModal from "@/features/income-management/components/BaseModal";
import { FieldGrid } from '@/features/income-management/components/FieldGrid';
import { generateModalConfigs, getTitle } from '../../../config/generate-modal-config';
import { FieldConfig } from '@/features/income-management/types/modal-fields';
import Text from '@/components/ui/Text'
interface JournalEntryGenerateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
  form?: any;
}

const JournalEntryGenerate: React.FC<JournalEntryGenerateProps> = ({
  data,
  onClose,
  viewType,
  form,
}) => {
  const configKey = data?.jevType === 'subsidiary' ? 'jev-subsidiary' : 'jev-general';
  const config = generateModalConfigs[configKey];

  //if config or sections missing, don't render
  if (!config || !config.sections) return <div>No config found</div>;
  const sections = config.sections;

  // Header fields (filter out undefined)
  const headerFields = sections[0]?.fields || [];
  const fundField = headerFields.find((f: FieldConfig) => f.name === 'fund');
  const noField = headerFields.find((f: FieldConfig) => f.name === 'no');
  const transactionTypeField = headerFields.find((f: FieldConfig) => f.name === 'transactionType');
  const dateField = headerFields.find((f: FieldConfig) => f.name === 'date');

  const safeForm = form || {
    values: {},
    getInputProps: () => ({}),
    setFieldValue: () => { }
  };
  return (
    <BaseModal
      title={`Generate ${getTitle(viewType)}`}
      showExportButton={false}
      showEditButton={false}
      printText="Print PDF"
      opened={true}
      onClose={onClose}
      withHeader={false}
      size="70%"
    >
         {/* Two-column JEV header */}
      <Box mb="md" p="md">
        <Grid gutter="md" align="start">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="sm">Journal Entry Voucher</Text>
            <Text size="md" fw={700} className="font-bold">METROPOLITAN WATERWORKS AND SEWERAGE SYSTEM</Text>
            <Text size="sm">Corporate Office</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Grid gutter="xs">
              <Grid.Col span={6}>
                <FieldGrid fields={[{ ...fundField, span: 12 }].filter(Boolean) as FieldConfig[]} form={safeForm} />
              </Grid.Col>
              <Grid.Col span={6}>
                <FieldGrid   fields={[{ ...noField, span: 12 }].filter(Boolean) as FieldConfig[]} form={safeForm} />
              </Grid.Col>
              <Grid.Col span={6} mt={8}>
                <FieldGrid  fields={[{ ...transactionTypeField, span: 12 }].filter(Boolean) as FieldConfig[]} form={safeForm} />
              </Grid.Col>
              <Grid.Col span={6} mt={8}>
                <FieldGrid  fields={[{ ...dateField, span: 12 }].filter(Boolean) as FieldConfig[]} form={safeForm} />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Box>
      {/* Entries Table */}
      <Box mt="xs" px="md">
     
        <Paper radius="md" withBorder mb={30} className="overflow-hidden" mt={0} p={0}>
               <Text
            size="sm"
            fw={600}
            p="xs"
            className="rounded-t-md bg-skyBlue"
            mb={0}
            style={{ borderBottom: '1px solid #fff' }}
          >
          {sections[1]?.title}
        </Text>
          <Table withColumnBorders>
            <Table.Thead className='bg-skyBlue'>
              <Table.Tr>
                {sections[1]?.table?.columns?.map((col: any) => (
                  <Table.Th key={col.accessorKey}>{col.header}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {(sections[1]?.table?.data && sections[1].table.data.length > 0
                ? sections[1].table.data
                : [{}]
              ).map((row: any, i: number) => (
                <Table.Tr key={i}>
                  {sections[1]?.table?.columns?.map((col: any) => (
                    <Table.Td key={col.accessorKey}>
                      {row[col.accessorKey] || ""}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))}
              {/* TOTAL row */}
              <Table.Tr>
                <Table.Td colSpan={3} fw={700}>
                  TOTAL
                </Table.Td>
                <Table.Td colSpan={3}></Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>

        {/* Supporting Documents Table */}
     
        <Paper radius="md" withBorder mb={30} className="overflow-hidden" mt={0} p={0}>
          <Text
            size="sm"
            fw={600}
            p="xs"
            className="rounded-t-md bg-skyBlue"
            mb={0}
            style={{ borderBottom: '1px solid #fff' }}
          >
          {sections[2]?.title}
        </Text>
          <Table withColumnBorders>
            <Table.Thead className='bg-skyBlue'>
              <Table.Tr>
                {sections[2]?.table?.columns?.map((col: any) => (
                  <Table.Th key={col.accessorKey}>{col.header}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {(sections[2]?.table?.data && sections[2].table.data.length > 0
                ? sections[2].table.data
                : [{}]
              ).map((row: any, i: number) => (
                <Table.Tr key={i}>
                  {sections[2]?.table?.columns?.map((col: any) => (
                    <Table.Td key={col.accessorKey}>
                      {row[col.accessorKey] || ""}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>

        {/* Particulars */}

        <FieldGrid fields={sections[3]?.fields || []} form={safeForm} />

        {/* Attachment */}
        {sections[4]?.fields && (
          <>
            <Text size="sm" fw={600} mb="xs" mt="md">
              {sections[4]?.title}
            </Text>
            <FieldGrid fields={sections[4]?.fields} form={safeForm} />
          </>
        )}

        {/* Signatories */}
        {sections[5]?.fields && (
          <>
            <Text size="sm" fw={600} mb="xs" mt="md">
              {sections[5]?.title}
            </Text>
            <FieldGrid fields={sections[5]?.fields} form={safeForm} />
          </>
        )}
      </Box>
    </BaseModal>
  );
};

export default JournalEntryGenerate;