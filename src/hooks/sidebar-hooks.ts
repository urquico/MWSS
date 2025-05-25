import { SidebarContext } from '@/provider/sidebar-provider';
import { useContext } from 'react';

/**
 *
 * @description
 * The useSidebar hook is a custom hook that provides access to the open state
 * of the sidebar and a function to update the open state.
 *
 * @returns {SidebarContextType} - The sidebar context
 *
 * @example
 *
 * const { open, setOpen } = useSidebar();
 *
 **/

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
