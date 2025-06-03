import { create, StateCreator } from 'zustand';
import zukeeper from 'zukeeper';

type ModalType =

  | 'create'
  | 'generate'
  | 'template'
  | 'viewHistory'
  | null;

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  data: any;
  viewType?: string;
  openModal: (type: ModalType, data?: any, viewType?: string) => void;
  closeModal: () => void;
}

// Explicitly type your store creator
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

// Wrap it with zukeeper
export const useModalStore = create<ModalState>(zukeeper(modalStoreCreator));

// Optional: expose for DevTools
if (typeof window !== 'undefined') {
  (window as any).store = useModalStore;
}
