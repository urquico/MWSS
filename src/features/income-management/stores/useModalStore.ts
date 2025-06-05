import { create, StateCreator } from 'zustand';
import zukeeper from 'zukeeper';
import { ModalType } from '../types/modal-types';
interface ModalState {
  isOpen: boolean;
  type: ModalType;
  data: any;
  viewType?: string;
  openModal: (type: ModalType, data?: any, viewType?: string) => void;
  closeModal: () => void;
}

const modalStoreCreator: StateCreator<ModalState> = (set) => ({
  isOpen: false,
  type: null,
  data: null,
  viewType: undefined,
  openModal: (type, data = null, viewType = undefined) =>
    set({ isOpen: true, type, data, viewType }),
  closeModal: () =>
    set({ isOpen: false, type: null, data: null, viewType: undefined }),
});

export const useModalStore = create<ModalState>(zukeeper(modalStoreCreator));

if (typeof window !== 'undefined') {
  (window as any).store = useModalStore;
}