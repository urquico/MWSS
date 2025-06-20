import { viewHistoryConfigs } from "../../config/view-history-config";
import BaseModal from "@/features/income-management/components/BaseModal";
import Table from '@/components/ui/table/components/Table';
import { Text } from "@mantine/core";

interface ViewHistoryProps {
  data?: any;
  onClose: () => void;
  viewType: string | undefined;
}

const ViewHistory: React.FC<ViewHistoryProps> = ({ onClose, viewType }) => {
  const config = viewType && viewHistoryConfigs[viewType]
    ? viewHistoryConfigs[viewType]
    : null;
  if (!config) throw new Error("Config is required")

  const { title, tableData, columns, label } = config;

  return (
    <BaseModal
      title={title}
      printText="Print"
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
        data={tableData}
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