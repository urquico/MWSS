import { create } from 'zustand';
import { persist } from 'zustand/middleware';


/**
 * useLinksGroupStore
 * Custom React hook for managing the state of sidebar link groups, including open/close state and the selected sidebar link.
 *
 * @function
 * @returns {{
*   opened: Record<string, boolean>,
*   toggle: (key: string) => void,
*   setOpened: (key: string, value: boolean) => void,
*   selectedSidebar: { label: string, path?: string, link?: string } | null,
*   setSelectedSidebar: (item: { label: string, path?: string, link?: string } | null) => void
* }}
*   An object containing the open state for groups, functions to toggle/set open state, and the selected sidebar link.
*/

interface LinksGroupState {
  opened: Record<string, boolean>;
  toggle: (key: string) => void;
  setOpened: (key: string, value: boolean) => void;
  selectedSidebar: { label: string; path?: string; link?: string } | null;
  setSelectedSidebar: (
    item: { label: string; path?: string; link?: string } | null,
  ) => void;
}

export const useLinksGroupStore = create<LinksGroupState>()(
  persist(
    (set) => ({
      opened: {},
      toggle: (key) =>
        set((state) => ({
          opened: { ...state.opened, [key]: !state.opened[key] },
        })),
      setOpened: (key, value) =>
        set((state) => ({
          opened: { ...state.opened, [key]: value },
        })),
      selectedSidebar: null,
      setSelectedSidebar: (item) => set({ selectedSidebar: item }),
    }),
    {
      name: 'links-group-storage',
    },
  ),
);