import AdvancedTable from '@/components/ui/table/AdvancedTable';
import { Menu } from "@mantine/core";
import { IconUserCircle, IconSend } from "@tabler/icons-react";
import { withFuzzyFilter } from '@/components/ui/table/utils/fuzzy-filter';

// Sample data
const userData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie Rose", email: "charlie@example.com", role: "Viewer" },
];

// Column definitions
const userColumns = [
  { accessorKey: "name", header: "Full Name" },
  { accessorKey: "email", header: "Email Address" },
  { accessorKey: "role", header: "User Role" },
];

// Enhance columns with fuzzy filter support
const enhancedColumns = withFuzzyFilter(userColumns);

// Row action menu
const renderRowActionMenuItems = (row: any) => (
  <>
    <Menu.Item>
      <IconUserCircle size={16} style={{ marginRight: 8 }} />
      View {row.name}'s Profile
    </Menu.Item>
    <Menu.Item>
      <IconSend size={16} style={{ marginRight: 8 }} />
      Send Email to {row.email}
    </Menu.Item>
  </>
);

export default function TableDemo() {
  return (
    <div style={{ padding: 20 }}>
      <h2>User Management Table</h2>
      <AdvancedTable
        data={userData}
        columns={enhancedColumns}
        renderRowActionMenuItems={renderRowActionMenuItems}
        enableGlobalFilter={true}
        enableColumnFilters={true}
        enableExport={true}
        globalFilterColumns={['name', 'email']}
         showColumnSearch={{ name: true, email: true, role: true }}
      />
    </div>
  );
}
