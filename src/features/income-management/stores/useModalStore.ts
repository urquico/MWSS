import { create, StateCreator } from 'zustand';
import zukeeper from 'zukeeper';
import { ModalType } from '../types/modal-types';
import { ModalData } from '../pages/lease-management/types/data-types';
interface PendingModal {
  type: ModalType;
  data: ModalData | any;
  viewType?: string;
}

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  data: ModalData | any;
  viewType?: string;
  pendingModal: PendingModal | null;
  setPendingModal: (pending: PendingModal | null) => void;
  openModal: (type: ModalType, data?: ModalData | any, viewType?: string) => void;
  closeModal: () => void;
}

const modalStoreCreator: StateCreator<ModalState> = (set) => ({
  isOpen: false,
  type: null,
  data: null,
  viewType: undefined,
  pendingModal: null,
  setPendingModal: (pending) => set({ pendingModal: pending }),
  openModal: (type, data = null, viewType = undefined) =>
    set({ isOpen: true, type, data, viewType }),
  closeModal: () =>
    set({ isOpen: false, type: null, data: null, viewType: undefined }),
});

export const useModalStore = create<ModalState>(zukeeper(modalStoreCreator));

if (typeof window !== 'undefined') {
  (window as any).store = useModalStore;
}