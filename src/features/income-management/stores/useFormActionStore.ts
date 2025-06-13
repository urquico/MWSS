import { create } from "zustand";

type FormActionType = "confirmation" | "success" | "error";
interface FormActionState {
  open: boolean;
  type?: FormActionType;
  text?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  show: (params: Omit<FormActionState, 'open' | 'show' | 'close'>) => void;
  close: () => void;
}

export const useFormActionStore = create<FormActionState>((set) => ({
  open: false,
  type: undefined,
  text: "",
  confirmText: "Yes",
  cancelText: "No",
  onConfirm: undefined,
  show: (params) => set({ ...params, open: true }),
  close: () => set({ open: false }),
}));