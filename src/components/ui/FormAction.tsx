import React from "react";
import { Modal, Button, Group, Text } from "@mantine/core";

type FormActionType = "confirmation" | "success" | "error";

interface FormActionProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  type: FormActionType;
  text: string;
  confirmText?: string;
  cancelText?: string;
}

const colorByType = {
  confirmation: "#1e40af",
  success: "#1e40af",
  error: "#e03131",
};

export const FormAction: React.FC<FormActionProps> = ({
  open,
  onClose,
  onConfirm,
  type,
  text,
  confirmText = "Yes",
  cancelText = "No",
}) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      withCloseButton={false}
      centered
      size="xs"
      zIndex={1000} 
      overlayProps={{
        backgroundOpacity: 0.08,
        blur: 0,
      }}
      styles={{
        body: { padding: 32, textAlign: "center" },
      }}
    >
      <Text mb="md" size="lg" fw={500}>
        {text}
      </Text>
      <Group justify="center" mt="md">
        {type === "confirmation" && (
          <>
            <Button
              variant="outline"
              color="gray"
              onClick={onClose}
              style={{ minWidth: 100 }}
            >
              {cancelText}
            </Button>
            <Button
              color={colorByType[type]}
              style={{ minWidth: 100 }}
              onClick={onConfirm} // Only call onConfirm!
            >
              {confirmText}
            </Button>
          </>
        )}
        {(type === "success" || type === "error") && (
          <Button
            color={colorByType[type]}
            style={{ minWidth: 160 }}
            onClick={onClose}
          >
            {confirmText || "Close"}
          </Button>
        )}
      </Group>
    </Modal>
  );
};

export default FormAction;