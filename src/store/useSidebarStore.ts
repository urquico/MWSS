import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SidebarStoreType = {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

/**
 * useSidebarStore
 * Custom React hook for accessing and manipulating the sidebar state.
 *
 * @function
 * @returns {{ isOpenSidebar: boolean, toggleSidebar: () => void, openSidebar: () => void, closeSidebar: () => void }}
 *   An object containing the sidebar's open state and functions to toggle, open, or close the sidebar.
 **/

export const useSidebarStore = create<SidebarStoreType>()(
  persist(
    (set) => ({
      isOpenSidebar: true,
      toggleSidebar: () =>
        set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),
      openSidebar: () => set({ isOpenSidebar: true }),
      closeSidebar: () => set({ isOpenSidebar: false }),
    }),
    {
      name: 'sidebar-storage',
    },
  ),
);
