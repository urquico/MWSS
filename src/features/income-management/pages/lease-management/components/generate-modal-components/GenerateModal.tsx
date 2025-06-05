import BaseModal from "@/features/income-management/components/BaseModal";
import TextInput from "@/components/ui/TextInput";
import { Grid, Title } from "@mantine/core";
import Table from "@/components/ui/table/components/Table";
import { generateModalConfigs } from "../../config/generate-modal-config";

interface GenerateModalProps {
  data?: any;
  onClose: () => void;
  config: any
}

const GenerateModal: React.FC<GenerateModalProps> = ({ data, onClose, config }) => {
  const configuration = generateModalConfigs[config.viewType];
  if (!configuration) return null;
  console.log(configuration)
  const { fields, columns } = configuration;
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
    : configuration.tableData;
  return (
    <BaseModal
      title={`Create ${config.title.replace(/-/g, ' ')}`}
      exportText="Export to Excel"
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

      <Title fz={13} fw={700} fs="italic">
        *subject to annual selection rate of ten percent (10%)
      </Title>

      <Table data={tableData} columns={columns} className="mt-10" />
    </BaseModal>
  );
};

export default GenerateModal;
