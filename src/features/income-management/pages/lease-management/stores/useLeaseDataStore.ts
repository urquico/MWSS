import { create } from 'zustand';

interface LeaseDataState {
  data: any[];
  setData: (data: any[]) => void;
}

export const useLeaseDataStore = create<LeaseDataState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));