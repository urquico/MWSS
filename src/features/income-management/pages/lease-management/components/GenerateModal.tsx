import GenerateModal from "@/features/income-management/components/BaseModal";
import TextInput from "@/components/ui/TextInput";
import { Grid, Title } from "@mantine/core";
import Table from "@/components/ui/table/components/Table";

const GenerateSOA = () => {
  


  const leaseData = {
    lessee: "Dela Cruz, Juan Miguel",
    location: "123 Main St, Metro Manila",
    totalArea: "150 sqm",
    monthlyRental: "₱25,000.00",
    rentalPeriod: "January 2023 - December 2025"
  };

  const tableData = [
    { date: '2023-01-01', principal: 25000, arrearages: 0, interest: 0, vat: 3000, gross: 28000, payment: 28000, orNo: '12345' },
  ];

  const fields = [
    { name: 'lessee', label: 'Lessee', description: 'Last Name, First Name, & Middle Name', value: leaseData.lessee, span: 12 },
    { name: 'location', label: 'Location', value: leaseData.location, span: 3 },
    { name: 'totalArea', label: 'Total Area', value: leaseData.totalArea, span: 3 },
    { name: 'monthlyRental', label: 'Monthly Rental', value: leaseData.monthlyRental, span: 3 },
    { name: 'rentalPeriod', label: 'Rental Period', value: leaseData.rentalPeriod, span: 3 }
  ];

  const columns = [
    { accessorKey: 'date', header: 'Date' },
    { accessorKey: 'principal', header: 'Principal (a)' },
    { accessorKey: 'arrearages', header: 'Arrearages (b)' },
    { accessorKey: 'interest', header: 'Interest (c) = (b) x 2%' },
    { accessorKey: 'vat', header: '12% VAT (d)' },
    { accessorKey: 'gross', header: 'Gross (a) + (c) + (d)' },
    { accessorKey: 'payment', header: 'Payment' },
    { accessorKey: 'orNo', header: 'O.R. No.' },
  ];

  return (
    <GenerateModal
      title="Generate Statement of Account"
      exportText="Export to Excel"
      printText="Print PDF"
      tableData={tableData}
   >
      <Grid p={10}>
        {fields.map((field) => (
          <Grid.Col key={field.name} span={field.span}>
            <TextInput
              label={field.label}
              description={field.name === 'lessee' ? field.description : undefined}
              value={field.value}
              disabled
              mt="md"
            />
          </Grid.Col>
        ))}
      
      </Grid>
        <Title fz={13} fw={700} fs='italic'>
          *subject to annual selection rate of ten percent (10%)
        </Title>
      <Table data={tableData} columns={columns} className="mt-10" />
    </GenerateModal>
  );
};

export default GenerateSOA;