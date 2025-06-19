import { Textarea } from "@mantine/core";
import { useState } from "react";
import { getTitle } from '../../config/create-modal-config';
import BaseModal from '@/features/income-management/components/BaseModal';

interface AddRemarksProps {
  viewType: string;
  onSubmit: (values: { remarks: string }) => void;
  onClose: () => void;
}

function AddRemarks({ viewType, onSubmit, onClose }: AddRemarksProps) {
  const [remarks, setRemarks] = useState("");

  const handleSave = () => {
    onSubmit({ remarks }); 
  };

  return (
    <BaseModal
      opened={true}
      onClose={onClose}
      title={`Add Remarks to ${getTitle(viewType)}`}
      size="55rem"
      showSaveButton={true}
      showExportButton={false}
      showPrintButton={false}
      withHeader={false}
      onSave={handleSave} 
    >
      <Textarea
        resize="vertical"
        label="Add Remarks"
        placeholder="Add remarks"
        value={remarks}
        onChange={(e) => setRemarks(e.currentTarget.value)}
      />
    </BaseModal>
  );
}

export default AddRemarks;
