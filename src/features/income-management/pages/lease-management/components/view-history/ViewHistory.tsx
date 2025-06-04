import { viewHistoryConfigs } from "../../config/view-history-config";
import BaseModal from "@/features/income-management/components/BaseModal";
import Table from '@/components/ui/table/components/Table';
import { Text, Divider } from "@mantine/core";

interface ViewHistoryProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

const ViewHistory: React.FC<ViewHistoryProps> = ({ data, onClose, viewType }) => {
  const config = viewHistoryConfigs[viewType];
  if (!config) return null;

  const { title, tableData, columns, label } = config;

  return (
    <BaseModal
      title={title}
      printText="Print & Save"
      tableData={tableData}
      opened={true}
      onClose={onClose}
      showExportButton={false}
      showPrintButton={false}
      withFooter={false}
      withHeader={false}
      size="57%"
    >
      <Text fw={700} mb="md">{label}</Text>

      <Table
        data={ tableData}
        columns={columns}
        features={{
          filtering: { fuzzy: true, global: true },
          export: { filename: `${viewType}-export` },
          sorting: true,
          pagination: true,
        }}
      />
    </BaseModal>
  );
};

export default ViewHistory;