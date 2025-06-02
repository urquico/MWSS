import React, { ReactNode, useRef } from 'react';
import { Text, Button, Group } from '@mantine/core';
import { useModalStore } from '../stores/useModalStore';
import ModalHeader from './ModalHeader';
import Modal from '@/components/ui/Modal';
import { IconDownload, IconPrinter } from '@tabler/icons-react';
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import './generate-modal.css'


interface GenerateModalProps {
  title: string;
  exportText?: string;
  printText?: string;
  children: ReactNode;
  tableData: any[];
}

const GenerateModal: React.FC<GenerateModalProps> = ({
  title,
  exportText = "Export",
  printText = "Print",
  children,
  tableData,

}) => {
  const { isOpen, closeModal } = useModalStore();

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = async () => {
    const element = contentRef.current;
    if (!element) return;

    element.classList.add('print-area'); // Apply styles only for PDF

    const opt = {
      margin: 10,
      filename: 'Statement_of_Account.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
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
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Statement of Account");
    XLSX.writeFile(workbook, "StatementOfAccount.xlsx");
  };


  return (

    <Modal
      opened={isOpen}
      onClose={closeModal}
      title={title}
      withHeaderBorder
      size="60%"
    >
      <Group justify="flex-end" mb="md" className="no-print">
        <Button
          leftSection={<IconDownload size={16} />}
          variant="outline"
          color="gray"
          onClick={handleExport}
        >
          {exportText}
        </Button>
        <Button
          leftSection={<IconPrinter size={16} />}
          variant="filled"
          color="#1e40af"
          onClick={() => handlePrint()}
        >
          {printText}
        </Button>
      </Group>
      <div ref={contentRef} >

        <ModalHeader />
        <Text mb="sm">
          {children}
        </Text>
      </div>
    </Modal>

  );
};

export default GenerateModal;