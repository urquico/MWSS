import { Office } from '@/features/select-office/types/select-office';
import { create } from 'zustand';

interface OfficeStore {
  office: Office;
  setOffice: (office: Office) => void;
}

export const useOfficeStore = create<OfficeStore>((set) => ({
  office: { id: 0, office_name: '' },
  setOffice: (office) => set({ office }),
}));
