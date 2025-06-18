import BaseModal from "@/features/income-management/components/BaseModal";
import { Text, Divider, Paper, Table, Flex } from "@mantine/core";
import { getTitle } from "../../../config/generate-modal-config";
import CurrentDate from "@/utils/CurrentDate";

interface RWDPTemplateProps {
    data?: any;
    onClose: () => void;
    viewType: string;
}

const RWDPTemplate: React.FC<RWDPTemplateProps> = ({ onClose, viewType }) => {
    const { formattedDate } = CurrentDate()

    const table = {
        bankInfo: [
            { label: 'Bank Name', value: 'Land Bank of the Philippines - Katipunan' },
            { label: 'Bank Address', value: 'Land Bank of the Philippines - Katipunan' },
            { label: 'SWIFT Code', value: 'TLBPPHMM' },
            { label: 'Account Name', value: 'MWSS-CO Lease Rental' },
            { label: 'Account Number', value: '1462-1037-40' },
        ],

    };
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
            <div className="font-sans leading-relaxed">
                <Flex justify="space-between" mb="md" w="100%">
                    <Text >{formattedDate}</Text>
                    <Text ml="auto" fw={700} className="text-blue-600">MWSS-FD-DP-25-002</Text>
                </Flex>
                <div className="mb-6">
                    <Text fw={700}>MR. Juan Dela Cruz</Text>
                    <Text>22 Valiant Street, Fairview Park Subdivision
                        Fairview, Quezon City.</Text>

                </div>

                <Text fw={700} className="text-center">DEMAND TO PAY</Text>
                <Text className="mb-2">Dear Sir:</Text>
                <Text className="mb-2">
                    This has reference to the unpaid water charges under the Account Number 06-1630-5050-0 for the period April to May 2022 issued and acknowledge by your office.                </Text>
                <Text className="mb-2">
                    We are sending you this demand letter to settle your obligation on the unpaid water billing to avoid any inconvenience and disconnection.
                </Text>
                <Text className="mb-2">
                    Attached herewith is a copy of the unpaid Statement of Account (SOA)<sup>1</sup> with the total amount due of <b>TWO MILLION TWO HUNDRED THIRTY-NINE THOUSAND THREE HUNDRED TWENTY-FOUR PESOS & 90/100 (Pbp 2,239,324.90).</b></Text>
                <Text className="mb-2">We ask that you settle your account <b>on or before 15 July 2022</b> at the MWSS Treasury, thru Real Time Gross Settlement (RTGS) or direct deposit to our account with the following bank details:</Text>
                <Paper radius="md" withBorder my={10}>
                    <Table withColumnBorders className="overflow-hidden rounded-md">
                        <Table.Tbody>
                            {table.bankInfo.map((item) => (
                                <Table.Tr key={item.label} >
                                    <Table.Td  className="bg-skyBlue"  >
                                        <Text size="sm" fw={600} color="white">{item.label}</Text>
                                    </Table.Td>
                                    <Table.Td>
                                        <Text size="sm">{item.value}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>

                </Paper>

                <Text className="mb-2">
                    Kindly provide us with a copy of the Credit Advice or validated deposit slip for us to immediately issue an Official Receipt on your payment.</Text>
                <Text className="mb-2">
                    Should you have any clarification and concerns, kindly send an email to finance@mwss.gov.ph.                </Text>

                <div>
                    <Text className="mb-2">Thank you.</Text>
                    <Text className="mt-5">Very truly yours,</Text>
                    <div className="mt-5">
                        <Text fw={700}>WALTER M. PARTOSA</Text>
                        <Text>Deputy Administrator, MSG</Text>
                        <Text>Management Service Group</Text>
                        <span className="mt-2">_______________________________</span>
                        <Text>  <sup>1</sup>SOA April to May 2022
</Text>

                    </div>
                    
                </div>
                <Divider my="md" />

            </div>
        </BaseModal>
    );
};

export default RWDPTemplate;