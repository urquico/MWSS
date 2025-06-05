import { Box, Paper, Table, Text } from '@mantine/core';

const InvoiceExtra = () => {
  // Main table data (header row)
  const mainTableData = [
    { description: '', quantity: 0, unitPrice: 0, amount: 0 }
  ];

  // Left side tables (vertical headers)
  const leftTables = {
    salesInfo: [
      { label: 'Vatable Sales', value: '0.00' },
      { label: 'VAT', value: '0.00' },
      { label: 'Zero-Rated Sales', value: '0.00' },
      { label: 'VAT-Exempt Sales', value: '0.00' },
    ],
    discounts: [
      { label: '(SC/PWD/NAAC/MOV/) Solo Parent ID No.:', value: '' },
      { label: '(SC/PWD/NAAC/MOV/SP) Signature:', value: '' },
    ]
  };

  // Right side table (vertical headers)
  const rightTable = [
    { label: 'Total Sales (VAT Inclusive)', value: '0.00' },
    { label: 'Less: VAT', value: '0.00' },
    { label: 'Amount: Net of VAT', value: '0.00' },
    { label: 'Less: Discount (SC/PWD/NAAC/MOV/SP)', value: '0.00' },
    { label: 'Add: VAT', value: '0.00' },
    { label: 'Less: Withholding Tax', value: '0.00' },
    { label: 'TOTAL AMOUNT DUE', value: '0.00', isBold: true },
  ];

  return (
    <Box mt="sm">
      {/* Main Horizontal Table */}
      <Paper radius="md" withBorder mb={30}>
      <Table withColumnBorders  className="" mb="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Item Description/Nature of Service</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Unit Cost/Price</Table.Th>
            <Table.Th>Amount</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {mainTableData.map((row, index) => (
            <Table.Tr key={index}>
              <Table.Td>{row.description}</Table.Td>
              <Table.Td>{row.quantity}</Table.Td>
              <Table.Td>{row.unitPrice.toFixed(2)}</Table.Td>
              <Table.Td>{row.amount.toFixed(2)}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table></Paper>

      {/* Two-column layout for vertical tables */}
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Left Column */}
        <div className="flex-1">
          {/* Sales Info Table */}
                <Paper radius="md" withBorder mb={30}>

          <Table withColumnBorders className="overflow-hidden rounded-md">
            <Table.Tbody>
              {leftTables.salesInfo.map((item) => (
                <Table.Tr key={item.label}>
                  <Table.Td style={{ backgroundColor: '#98B8F9', fontWeight: 500, width:200 }} >
                    <Text size="sm" c="white" fw={600}>{item.label}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">{item.value}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table></Paper>

          {/* Discounts/Signature Table */}
               <Paper radius="md" withBorder >

          <Table withColumnBorders className="overflow-hidden rounded-md">
            <Table.Tbody>
              {leftTables.discounts.map((item) => (
                <Table.Tr key={item.label}>
                  <Table.Td style={{ backgroundColor: '#98B8F9', fontWeight: 500, width:200 }} >
                    <Text size="sm" c="white" fw={600}>{item.label}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">{item.value}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table></Paper>
        </div>

        {/* Right Column */}
        <div className="flex-1">
               <Paper radius="md" withBorder >

          <Table withColumnBorders className="overflow-hidden rounded-md">
            <Table.Tbody>
              {rightTable.map((item) => (
                <Table.Tr key={item.label}>
                  <Table.Td style={{ backgroundColor: '#98B8F9', fontWeight: 500, width:200 }} >
                    <Text size="sm" c="white" fw={600}>{item.label}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" fw={item.isBold ? 700 : 400}>{item.value}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table></Paper>
        </div>
      </div>
    </Box>
  );
};

export default InvoiceExtra;