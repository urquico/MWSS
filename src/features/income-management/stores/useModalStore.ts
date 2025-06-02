import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  data: any; // ideally, type this more specifically
  openModal: (data: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  data: null,
  openModal: (data) => set({ isOpen: true, data }),
  closeModal: () => set({ isOpen: false, data: null }),
}));
