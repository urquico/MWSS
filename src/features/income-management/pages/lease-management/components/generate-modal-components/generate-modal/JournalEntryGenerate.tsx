import React from 'react';
import { Box, Paper, Table, Title } from '@mantine/core';
import BaseModal from "@/features/income-management/components/BaseModal";
import { FieldGrid } from '@/features/income-management/components/FieldGrid';
import { generateModalConfigs, getTitle } from '../../../config/generate-modal-config';

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

  if (!config?.sections) return <div>No config found</div>;

  return (
    <BaseModal
      title={`Generate ${getTitle(viewType)}`}
      showExportButton={false}
      showEditButton={false}
      printText="Print PDF"
      opened={true}
      onClose={onClose}
    >
      <Box mt="sm">
        {config.sections.map((section, idx) => (
          <Box key={idx} mb="md">
            {section.title && (
              <Title order={5} mb="xs" mt={idx === 0 ? 0 : "md"}>
                {section.title}
              </Title>
            )}

            {/* Render form fields with FieldGrid */}
            {section.fields && section.fields.length > 0 && (
              <FieldGrid fields={section.fields} form={form || { values: {}, getInputProps: () => ({}) }} />
            )}

            {/* Render tables for table sections */}
            {section.table && section.table.columns && (
              <Paper radius="md" withBorder mb={30} className="overflow-hidden" mt={20}>
                <Table withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      {section.table?.columns?.map((col: any) => (
                        <Table.Th key={col.accessorKey}>{col.header}</Table.Th>
                      ))}
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {(section.table?.data && section.table.data.length > 0
                      ? section.table.data
                      : [{}]
                    ).map((row: any, i: number) => (
                      <Table.Tr key={i}>
                        {section.table?.columns?.map((col: any) => (
                          <Table.Td key={col.accessorKey}>
                            {row[col.accessorKey] || ""}
                          </Table.Td>
                        ))}
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            )}
          </Box>
        ))}
      </Box>
    </BaseModal>
  );
};

export default JournalEntryGenerate;