import BaseModal from "@/features/income-management/components/BaseModal";
import { Grid, Title, Text, Divider } from "@mantine/core";
import Table from "@/components/ui/table/components/Table";
import { generateModalConfigs } from "../../config/generate-modal-config";

interface GenerateTemplateProps {
  data?: any;
  onClose: () => void;
  viewType: string;
}

const GenerateTemplate: React.FC<GenerateTemplateProps> = ({ data, onClose, viewType }) => {
  const config = generateModalConfigs[viewType];

  if (!config) return null;

  const {  fields, tableData, columns } = config;

  return (
    <BaseModal
      title={`Create ${viewType.replace(/-/g, ' ')}`}
      printText="Print & Save"
      tableData={tableData}
      opened={true}
      onClose={onClose}
      showExportButton={false}
      withFooter
      size="57%"
    >
      <div className="font-sans leading-relaxed">
        <Text size="sm" className="mb-8">17 January 2025</Text>
        
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
        
        <Text className="mb-2">Rental for the month of February 2025</Text>
        
        <div className="my-4">
          <Table
            data={[
              { description: '4,153 sqm @ php1,087.09 sqm.', amount: 'Php 4,515,108.74' },
              { description: 'Add: 12% VAT', amount: '541,813.05' },
              { description: 'Gross Amount', amount: 'Php 5,056,921.79' },
              { description: 'Less: 5% EWT', amount: '(225,755.44)' },
              { description: 'Net Amount', amount: '4,831,166.35' },
            ]}
            columns={[
              { accessorKey: 'description', header: 'Description' },
              { accessorKey: 'amount', header: 'Amount' }
            ]}
            className="w-full"
          />
        </div>
        
        <Text className="my-4">
          Please make payment thru Land Bank's LBP Link Biz Portal by filling up the details as follows:
        </Text>
        
        <div className="p-4 rounded-md bg-gray-50">
          <Grid gutter="md">
            <Grid.Col span={4}>
              <Text fw={600}>Merchant Name</Text>
            </Grid.Col>
            <Grid.Col span={8}>
              <Text>MWSS - CO Lease Rental</Text>
            </Grid.Col>
            
            <Grid.Col span={4}>
              <Text fw={600}>Account Name</Text>
            </Grid.Col>
            <Grid.Col span={8}>
              <Text>1462-1037-49</Text>
            </Grid.Col>
            
            <Grid.Col span={4}>
              <Text fw={600}>Transaction Type</Text>
            </Grid.Col>
            <Grid.Col span={8}>
              <Text>Rental Payment</Text>
            </Grid.Col>
          </Grid>
        </div>
        
        
        <div className="mt-6">
          <Text className="mb-4">
            In compliance with Republic Act No. 11976 or the Ease of paying Taxes Law, attached with this billing is the Sales Invoice corresponding to the amount due. Please send the BIR Form 2307 promptly as soon as payment is done.
          </Text>
          
          <Text className="mb-2">Thank you.</Text>
          
          <Text className="mt-8">Very truly yours,</Text>
          
          <div className="mt-8">
            <Text fw={700} className="text-lg">LEONOR C. CLEOFAS, CESO IV</Text>
            <Text>Administrator</Text>
          </div>
        </div>
                <Divider my="md" />

      </div>
    </BaseModal>
  );
};

export default GenerateTemplate;