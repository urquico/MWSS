import React, { ReactNode, useRef } from 'react';
import { Text, Button, Group } from '@mantine/core';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Modal from '@/components/ui/Modal';
import { IconDownload, IconFileCheck, IconPencil, IconPrinter } from '@tabler/icons-react';
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import './base-modal.css'

interface GenerateModalProps {
  title: string;
  exportText?: string;
  printText?: string;
  saveText?: string;
  children: ReactNode;
  tableData?: any[];
  showExportButton?: boolean;
  showPrintButton?: boolean;
  showSaveButton?: boolean;
  showEditButton?: boolean;
  size?: string;
  withHeaderBorder?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
  opened: boolean;
  onEdit?: () => void;
  onClose: () => void;
  onSave?: () => void;

}

const GenerateModal: React.FC<GenerateModalProps> = ({
  title,
  exportText = "Export",
  printText = "Print",
  
  children,
  tableData,
  showExportButton = true,
  showPrintButton = true,
  showEditButton = false,
  size = "60%",
  opened,
  onClose,
  withFooter = false,
  withHeader = true,
  showSaveButton = false,
  saveText = "Save",
  onSave = () => { },
  onEdit = () => { },

}) => {

  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = async () => {
    const element = contentRef.current;
    if (!element) return;

    element.classList.add('print-area');

    const opt = {
      margin: 10,
      filename: 'Statement_of_Account.pdf',
      image: { type: 'jpeg', quality: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      html2canvas: {
        scale: 2, // Higher scale = better quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
        dpi: 300, // Higher DPI for better quality
      },
    };

    try {
      const worker = html2pdf().from(element).set(opt);
      const blob = await worker.output('blob');
      const url = URL.createObjectURL(blob);

      // Preview
      window.open(url, '_blank');

      // Download
      const a = document.createElement('a');
      a.href = url;
      a.download = `Statement_of_Account_${Date.now()}.pdf`;
      a.click();

      // Clean up
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setTimeout(() => {
        element.classList.remove('print-area');
      }, 10);
    }
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData ?? []);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Statement of Account");
    XLSX.writeFile(workbook, "StatementOfAccount.xlsx");
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      withHeaderBorder
      size={size}
    >
      <Group justify="flex-end" mb="md" className="no-print">
         {showEditButton && (
          <Button
            leftSection={<IconPencil size={16} />}
            variant="filled"
            color="#1e40af"
            onClick={onEdit}
          >Edit
            </Button>
        )}
        {showExportButton && (
          <Button
            leftSection={<IconDownload size={16} />}
            variant="outline"
            color="gray"
            onClick={handleExport}
          >
            {exportText}
          </Button>
        )}
        {showPrintButton && (
          <Button
            leftSection={<IconPrinter size={16} />}
            variant="filled"
            color="#1e40af"
            onClick={() => handlePrint()}
          >
            {printText}
          </Button>
        )}
         
        {showSaveButton && (
          <Button
            leftSection={<IconFileCheck size={16} />} // You'll need to import IconSave
            variant="filled"
            color="#1e40af"
            onClick={onSave}
          >
            {saveText}
          </Button>
        )}
      </Group>
      <div ref={contentRef} >
        {withHeader && (<ModalHeader />)}
        <Text mb="sm">
          {children}
        </Text>
        {withFooter && (<ModalFooter />)}
      </div>
    </Modal>
  );
};

export default GenerateModal;