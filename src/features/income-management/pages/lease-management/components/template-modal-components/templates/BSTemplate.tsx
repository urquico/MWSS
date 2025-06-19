import BaseModal from "@/features/income-management/components/BaseModal";
import { Text, Divider, Table, Flex, Box } from "@mantine/core";
import { getTitle } from "../../../config/generate-modal-config";
import CurrentDate from "@/utils/CurrentDate";
import { generateModalConfigs } from "../../../config/generate-modal-config";

interface BSTemplateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

const BSTemplate: React.FC<BSTemplateProps> = ({ onClose, viewType }) => {
  const { formattedDate } = CurrentDate()
 
  const rows = [
    { description: '4,153 sqm @ php1,087.09 sqm.', amount: 'Php 4,515,108.74' },
    { description: 'Add: 12% VAT', amount: '541,813.05' },
    { description: 'Gross Amount', amount: 'Php 5,056,921.79' },
    { description: 'Less: 5% EWT', amount: '(225,755.44)' },
    { description: 'Net Amount', amount: '4,831,166.35' },
  ];
  const paymentRows = [
    { label: 'Merchant Name', value: 'MWSS - CO Lease Rental' },
    { label: 'Account Name', value: '1462-1037-49' },
    { label: 'Transaction Type', value: 'Rental Payment' },
    {
      label: 'Payment Details',
      value: (
        <Text size="sm">
          Payment:<br />
          Name of Payor:<br />
          Purpose of Payment:<br />
          Reference Number:<br />
          Contact No.:<br />
          Email Address:
        </Text>
      ),
    },
    {
      label: 'Payment Mode',
      value: (
        <Text size="sm">
          Bank Name:<br />
          Bank Account:
        </Text>
      ),
    },
    {
      label: 'One-Time Password',
      value: (
        <Text size="sm">
          To authorize this transaction, please enter your One-Time-Password (OTP) sent through your
          registered mobile number/email address and your JAL, then click your PIN on the PIN pad
        </Text>
      ),
    },
  ];

  return (
    <BaseModal
      title={`Create ${getTitle(viewType)}`}
      printText="Print"
      opened={true}
      onClose={onClose}
      showExportButton={false}
      withFooter
      size="57%"
    >
      <Box >
        <Flex justify="space-between" mb="md" w="100%">
          <Text >{formattedDate}</Text>
          <Text ml="auto" fw={700} className="text-blue-600">MWSS-FD-BS-25-001</Text>
        </Flex>
        <div className="mb-6">
          <Text fw={700} className="text-lg">MR. J. V. EMMANUELA A. DE DIOS</Text>
          <Text>President and Chief Executive Officer</Text>
          <Text>MANILA WATER COMPANY, INC.</Text>
          <Text>Administration Building, MWSS Complex</Text>
          <Text>489 Katipunan Road, Balara, Quezon City.</Text>

          <div className="mt-2">
            <Text>Attention: Atty. Jo Kristine G. Celera - Enterprise Regulatory Affairs Director</Text>
          </div>
        </div>

        <Text fw={700} className="mb-4 text-lg">Subject: Rental of Building Space</Text>

        <Text className="mb-4">Dear Mr. De Dios,</Text>

        <Text className="mb-6">
          In accordance with the contract of lease between MWSS and MWCI relative to the rental of building space at MWSS Complex and pending execution of the Supplemental Agreement pertaining to the lease of additional office space pursuant to MWSS Board Resolution No. 2024-162-CO dated 13 November 2024, please remit the amount of Four Million Eight Hundred Thirty-One Thousand One Hundred Sixty-Six and 35/100 Pesos (Php4,831,166.35) representing rent for the month of February 2025, detailed as follows:
        </Text>

        <Text className="flex justify-center mb-2">Rental for the month of February 2025</Text>

        <div className="px-44">
          <Table
            withColumnBorders={false}
            withRowBorders={false}
            verticalSpacing={1}
            className="w-full"
          >
            <Table.Tbody>
              {rows.map((row, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{row.description}</Table.Td>
                  <Table.Td style={{ textAlign: 'right' }}>
                    <Text fw={index === rows.length - 1 ? 700 : 400}>
                      {row.amount}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>

        <Text className="my-4">
          Please make payment thru Land Bank's LBP Link Biz Portal by filling up the details as follows:
        </Text>
        <Box className="overflow-hidden border rounded-xl border-gray"
        ><Table
          withRowBorders={true}
          verticalSpacing="xs"
          horizontalSpacing="md"
          highlightOnHover={false}
        >
            <Table.Tbody>
              {paymentRows.map((row, index) => (
                <Table.Tr key={index}>
                  <Table.Td
                    style={{
                      width: '30%',
                      fontWeight: 500,
                      verticalAlign: 'top',
                      padding: '8px',
                      backgroundColor: '#f9f9f9',
                    }}
                  >
                    {row.label}
                  </Table.Td>
                  <Table.Td style={{ padding: '8px' }}>{row.value}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table></Box>



        <div className="mt-5">
          <Text className="mb-3">
            In compliance with Republic Act No. 11976 or the Ease of paying Taxes Law, attached with this billing is the Sales Invoice corresponding to the amount due. Please send the BIR Form 2307 promptly as soon as payment is done.
          </Text>

          <Text className="mb-2">Thank you.</Text>

          <Text className="mt-5">Very truly yours,</Text>

          <div className="mt-5">
            <Text fw={700} className="text-lg">LEONOR C. CLEOFAS, CESO IV</Text>
            <Text>Administrator</Text>
          </div>
        </div>
        <Divider my="md" />

      </Box>
    </BaseModal>
  );
};

export default BSTemplate;