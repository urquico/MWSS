import React, { ReactNode, useRef } from 'react';
import { Text, Button, Group } from '@mantine/core';
import { useFormActionStore } from '../stores/useFormActionStore';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Modal from '@/components/ui/modal/Modal';
import { IconDownload, IconFileCheck, IconPencil, IconPrinter } from '@tabler/icons-react';
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import './base-modal.css'
import FormAction from '@/components/ui/FormAction';

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
  const formAction = useFormActionStore();

  const handlePrint = async () => {
    formAction.show({
      type: 'confirmation',
      text: 'Are you sure you want to print this document as PDF?',
      confirmText: 'Print',
      cancelText: 'Cancel',
      onConfirm: async () => {
        const element = contentRef.current;
        if (!element) return;

        element.classList.add('print-area');
        await new Promise((resolve) => setTimeout(resolve, 100));

        const opt = {
          margin: 10,
          filename: 'Document.pdf',
          image: { type: 'jpeg', quality: 1 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          html2canvas: {
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true,
            letterRendering: true,
            dpi: 300,
          },
        };

        try {
          const worker = html2pdf().from(element).set(opt);
          const blob = await worker.output('blob');
          const url = URL.createObjectURL(blob);

          window.open(url, '_blank');
          const a = document.createElement('a');
          a.href = url;
          a.download = `Document_${Date.now()}.pdf`;
          a.click();

          URL.revokeObjectURL(url);

          // Show success modal
          formAction.show({
            type: 'success',
            text: 'PDF generated and download started!',
            confirmText: 'Close',
          });
        } catch (error) {
          console.error('Error generating PDF:', error);
          formAction.show({
            type: 'error',
            text: 'Failed to generate PDF.',
            confirmText: 'Close',
          });
        } finally {
          setTimeout(() => {
            element.classList.remove('print-area');
          }, 10);
        }
      },
    });
  };

  const handleExport = () => {
    formAction.show({
      type: 'confirmation',
      text: 'Are you sure you want to export this data to Excel?',
      confirmText: 'Export',
      cancelText: 'Cancel',
      onConfirm: () => {
        try {
          const worksheet = XLSX.utils.json_to_sheet(tableData ?? []);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
          XLSX.writeFile(workbook, `Export_${Date.now()}.xlsx`);

          formAction.show({
            type: 'success',
            text: 'Excel file exported successfully!',
            confirmText: 'Close',
          });
        } catch (error) {
          console.error('Error exporting Excel:', error);
          formAction.show({
            type: 'error',
            text: 'Failed to export Excel file.',
            confirmText: 'Close',
          });
        }
      },
    });
  };
  
  const formActions = (
    <Group justify="flex-end" className="no-print">
      {showEditButton && (
        <Button leftSection={<IconPencil size={16} />} variant="filled" color="#1e40af" onClick={onEdit}>Edit</Button>
      )}
      {showExportButton && (
        <Button leftSection={<IconDownload size={16} />} variant="outline" color="gray" onClick={handleExport}>{exportText}</Button>
      )}
      {showPrintButton && (
        <Button leftSection={<IconPrinter size={16} />} variant="filled" color="#1e40af" onClick={handlePrint}>{printText}</Button>
      )}
      {showSaveButton && (
        <Button leftSection={<IconFileCheck size={16} />} variant="filled" color="#1e40af" onClick={onSave}>{saveText}</Button>
      )}
    </Group>
  );
  return (
  <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      withHeaderBorder
      size={size}
      formActions={formActions} 
    >
      <div ref={contentRef}>
        {withHeader && (<ModalHeader />)}
        <Text mb="sm">{children}</Text>
        {withFooter && (<ModalFooter />)}
      </div>
      <FormAction
        open={formAction.open}
        onClose={formAction.close}
        onConfirm={formAction.onConfirm}
        type={formAction.type!}
        text={formAction.text!}
        confirmText={formAction.confirmText}
        cancelText={formAction.cancelText}
      />
    </Modal>
  );
};

export default GenerateModal;