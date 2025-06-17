import BaseModal from "@/features/income-management/components/BaseModal";
import TextInput from "@/components/ui/TextInput";
import Table from "@/components/ui/table/components/Table";
import { Grid, Tabs, Title, Group, Button, Switch, Text, Box, Anchor, Paper } from "@mantine/core";
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { getFileIcon } from "@/features/income-management/utils/file-icon";
import { useModalStore } from "@/features/income-management/stores/useModalStore";
import { formConfigs, getTitle } from "../../../config/create-modal-config";
interface LesseeInformationGenerateProps {
    data?: any;
    onClose: () => void;
    viewType: string;
}

const LesseeInformationGenerate: React.FC<LesseeInformationGenerateProps> = ({ data, onClose, viewType }) => {
    const openModal = useModalStore.getState().openModal;
    const [checked, setChecked] = useState(false);
    const [activeTab, setActiveTab] = useState('details');
    console.log('LesseeInformationGenerate data:', data);
    console.log('LesseeInformationGenerate viewType:', viewType);
    const configuration = formConfigs[viewType];
    if (!configuration) return null;
    const { sections = [], columns = [], tableData = [] } = configuration;

    const renderFileField = (field: any) => (
        <Paper
            withBorder
            radius="md"
            p="xs"
            style={{ backgroundColor: '#f1f3f5', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
            {getFileIcon(String(field.value))}
            <Anchor href="#" size="sm" underline="always">
                {field.value}
            </Anchor>
        </Paper>
    );


    return (
        <BaseModal
            title={`${getTitle(viewType)}`}
            exportText="Export to Excel"
            printText="Print PDF"
            tableData={tableData}
            opened={true}
            onClose={onClose}
            withHeader={false}
            showExportButton={activeTab === 'payments'}
            showPrintButton={activeTab === 'details'}
        >
            <Tabs
                value={activeTab}
                onChange={(value) => value && setActiveTab(value)}
                radius="md"
                mt={50}
            >
                <Tabs.List mb="md" style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                    <Group gap="xs">
                        <Tabs.Tab value="details" >
                            Lessee Information Details
                        </Tabs.Tab>
                        <Tabs.Tab value="payments">
                            Payment History
                        </Tabs.Tab>
                    </Group>

                    <Group gap="sm">
                        <Switch
                            size="md"
                            color="teal"
                            label="Reminder Notification"
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                            thumbIcon={
                                checked ? (
                                    <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
                                ) : (
                                    <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
                                )
                            }
                            labelPosition="left"
                        />
                        <Button variant="outline" color="black" mb={5} radius={5}
                            onClick={() => openModal('edit', data, viewType)}
                        >
                            <Text fz={12} fw={600}>Add Remarks</Text>
                        </Button>
                    </Group>
                </Tabs.List>


                <Tabs.Panel value="details">
                    {sections
                        .filter((section) => section.title !== 'Attachments')
                        .map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <Title order={5} mt="md" mb="xs">
                                    {section.title}
                                </Title>
                                <Grid>
                                    {section.fields &&
                                        section.fields
                                            .filter((field) => !field.name.toLowerCase().includes('file'))
                                            .map((field) => (
                                                <Grid.Col key={field.name} span={field.span}>
                                                    <TextInput label={field.label} value={field.value ?? ''} disabled />
                                                </Grid.Col>
                                            ))}
                                </Grid>

                                {/* Inject attachments after Lessee Information section */}
                                {section.title === 'Lessee Information' && (
                                    <Box mt="md">
                                        <Title order={6} mb="xs">Attachments</Title>
                                        <Grid>
                                            {sections
                                                .flatMap((s) => s.fields ?? [])
                                                .filter((field) => field.name.toLowerCase().includes('file'))
                                                .map((field) => (
                                                    <Grid.Col key={field.name} span={field.span}>
                                                        <Text size="sm" fw={500} mb={4}>
                                                            {field.label}
                                                        </Text>
                                                        {renderFileField(field)}
                                                    </Grid.Col>
                                                ))}
                                        </Grid>
                                    </Box>
                                )}
                            </div>
                        ))}

                </Tabs.Panel>

                <Tabs.Panel value="payments">
                    <Table data={tableData} columns={columns} className="mt-4" />
                </Tabs.Panel>
            </Tabs>
        </BaseModal>
    );
};

export default LesseeInformationGenerate;
