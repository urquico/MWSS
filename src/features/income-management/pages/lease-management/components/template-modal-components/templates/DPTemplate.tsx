import BaseModal from "@/features/income-management/components/BaseModal";
import { Text, Divider, Paper, Table } from "@mantine/core";
import { getTitle } from "../../../config/generate-modal-config";

interface DPTemplateProps {
    data?: any;
    onClose: () => void;
    viewType: string;
}

const DPTemplate: React.FC<DPTemplateProps> = ({ onClose, viewType }) => {

    const table = {
        bankInfo: [
            { label: 'Bank Name', value: 'Land Bank of the Philippines - Katipunan' },
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
                <Text size="sm" className="mb-8">17 January 2025</Text>
                <div className="mb-6">
                    <Text fw={700} className="text-lg">MR. Juan Dela Cruz</Text>
                    <Text>22 Valiant Street, Fairview Park Subdivision
                        Fairview, Quezon City.</Text>

                </div>

                <Text fw={700} className="mb-4 text-lg">Subject: DEMAND TO PAY</Text>
                <Text className="mb-4">Dear Mr. Dela Cruz,</Text>
                <Text className="mb-4">
                    Your unpaid rentals for the continued use of a portion of MWSS property measuring 540 square meters now amounts to Five Hundred Fifty-Nine Thousand Five Hundred Sixty-One and 36/100 Pesos (Php559,561.36) as of 14 June 2023, the details of which are indicated in the attached Statement of Account for your reference.
                </Text>
                <Text className="mb-4">
                    Please remit payment at our Cashier's Office at the address indicated hereunder within fifteen (15) days upon receipt of this notice to avoid the imposition of additional penalties and other charges. Or you may deposit your payment directly to our bank account with the following details:                </Text>
                <Text className="mb-2">Rental for the month of February 2025</Text>
                <Paper radius="md" withBorder mb={30}>

                    <Table withColumnBorders className="overflow-hidden rounded-md">
                        <Table.Tbody>
                            {table.bankInfo.map((item) => (
                                <Table.Tr key={item.label}>
                                    <Table.Td style={{ backgroundColor: '#98B8F9', fontWeight: 500, width: 200 }} >
                                        <Text size="sm" c="white" fw={600}>{item.label}</Text>
                                    </Table.Td>
                                    <Table.Td>
                                        <Text size="sm">{item.value}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table></Paper>

                <Text className="mb-4">
                    When payment is done, please email us a copy of your payment transaction slip so we can issue a corresponding Official Receipt and update your account.                </Text>
                <Text className="mb-4">
                    For any issues concerning the lease contract or the use of subject property, please coordinate directly with Mr. Rene Zapiter, Department Manager, Asset Management Department with Landline Number 8922-3758. For concerns regarding your Statement of Account, please coordinate directly with our Finance Department with Landline Number 8920-5422, or email us at finance@mwss.gov.ph citing this notice’s Reference Number.
                </Text>

                <div className="mt-6">
                    <Text className="mb-2">Thank you.</Text>
                    <Text className="mt-8">Very truly yours,</Text>
                    <div className="mt-8">
                        <Text fw={700} className="text-lg">JUAN DELA CRUZ</Text>
                        <Text>Deputy Administrator</Text>
                        <Text>Management Service Group</Text>

                    </div>
                    <div className="mt-8">
                        <Text fw={700} className="text-lg">JUAN DELA CRUZ</Text>
                        <Text>Department Manager</Text>
                        <Text>Legal Service Department</Text>

                    </div>
                </div>
                <Divider my="md" />

            </div>
        </BaseModal>
    );
};

export default DPTemplate;