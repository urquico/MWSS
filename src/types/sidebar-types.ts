// types/sidebar-types.ts
import { Icon } from '@tabler/icons-react';

export interface SidebarLinkItem {
  label: string;
  path: string;
  permission?: string;
  icon?: Icon;
  children?: SidebarLinkItem[];
  module?: string;
}

export interface SidebarParentItem extends SidebarLinkItem {
  icon: Icon; // Parent items must have icons
  children: SidebarLinkItem[];
   module?: string; // Parent items must have children
}