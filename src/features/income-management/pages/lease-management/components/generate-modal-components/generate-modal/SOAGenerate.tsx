import { Grid, Title, Table, Paper } from "@mantine/core";
import BaseModal from "@/features/income-management/components/BaseModal";
import TextInput from "@/components/ui/TextInput";
import { StatementOfAccountData } from "../../../types/data-types";
import { getTitle, generateModalConfigs, appendTotalRow } from "../../../config/generate-modal-config";
interface SOAGenerateProps {
  data?: StatementOfAccountData;
  onClose: () => void;
  viewType: string;
}

const SOAGenerate: React.FC<SOAGenerateProps> = ({ data, onClose, viewType }) => {
  const configuration = generateModalConfigs[viewType];
  if (!configuration) {
    return <div>No configuration found.</div>;
  }

  const fields = configuration.fields ?? [];
  const columns = configuration.columns ?? [];
  const tableData = appendTotalRow(
    configuration.tableData ?? [],
    columns.map(col => ({ accessorKey: col.accessorKey }))
  );

  return (
    <BaseModal
      title={`Generate ${getTitle(viewType)}`}
      exportText="Export"
      printText="Print PDF"
      tableData={tableData}
      opened={true}
      onClose={onClose}
    >

     <Grid p={10}>
  {fields.map((field) => (
    <Grid.Col key={field.name} span={field.span}>
      <TextInput
        label={field.label}
        description={field.description}
        value={(data?.[field.name as keyof StatementOfAccountData] ?? "") as string}
        disabled
        mt="md"
      />
    </Grid.Col>
  ))}
</Grid>
      <Title fz={13} fw={700} fs="italic" pl='10'>
        *subject to annual escalation rate of ten percent (10%)
      </Title>
      <Paper radius="md" withBorder mb={30} className="overflow-hidden" mt={10} p={0} mx={10}>

        <Table withColumnBorders >
          <Table.Thead>
            <Table.Tr className="bg-skyBlue " >
              {columns.map((col) => (
                <Table.Th key={col.accessorKey} className="text-white">{col.header}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tableData.map((row, idx) => {
              const isTotal = row.date === "TOTAL";
              return (
                <Table.Tr key={idx}>
                  {columns.map((col) => (
                    <Table.Td
                      key={col.accessorKey}
                      style={
                        isTotal && col.accessorKey === "date"
                          ? { fontWeight: "bold", textTransform: "uppercase" }
                          : isTotal
                            ? { fontWeight: "bold" }
                            : {}
                      }
                    >
                      {row[col.accessorKey] ?? ""}
                    </Table.Td>
                  ))}
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table></Paper>
      <TextInput
        label='Prepared By'
        value=''
        disabled
        mt="md"
        pl='10'
      />
    </BaseModal>
  );
};

export default SOAGenerate;