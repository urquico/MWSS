import { Grid, Title } from "@mantine/core";
import BaseModal from "@/features/income-management/components/BaseModal";
import TextInput from "@/components/ui/TextInput";
import Table from "@/components/ui/table/components/Table";
import { getTitle, generateModalConfigs,  } from "../../../config/generate-modal-config";
import { FieldConfig } from "@/features/income-management/types/modal-fields";
interface SOAGenerateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

const SOAGenerate: React.FC<SOAGenerateProps> = ({ data, onClose, viewType }) => {
  const configuration = generateModalConfigs[viewType];
  if (!configuration) {
    return <div>No configuration found.</div>;
  }

  const fields: FieldConfig[] = configuration.fields ?? [];
  const columns = configuration.columns ?? [];

  const tableData = data
    ? [{
      date: data.date,
      principal: data.principal,
      arrearages: data.arrearages,
      interest: data.interest,
      vat: data.vat,
      gross:
        (Number(data.principal) || 0) +
        (Number(data.interest) || 0) +
        (Number(data.vat) || 0),
      payment: data.payment ?? "",
      orNo: data.orNo ?? "",
    }]
    : configuration.tableData ?? [];

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
              value={data?.[field.name] ?? ""}
              disabled
              mt="md"
            />
          </Grid.Col>
        ))}
      </Grid>
      <Title fz={13} fw={700} fs="italic" pl='10'>
        *subject to annual selection rate of ten percent (10%)
      </Title>
      <Table data={tableData} columns={columns} />
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