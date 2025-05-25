import IconCalendar from '@/components/icons/IconCalendar';
import IconCalendarCog from '@/components/icons/IconCalendarCog';
import IconDashboard from '@/components/icons/IconDashboard';
import IconFeedback from '@/components/icons/IconFeedback';
import IconFile from '@/components/icons/IconFile';
import IconHistory from '@/components/icons/IconHistory';
import IconKiosk from '@/components/icons/IconKiosk';
import IconMessage from '@/components/icons/IconMessage';
import IconSettings from '@/components/icons/IconSettings';
import IconSkyScraper from '@/components/icons/IconSkyScraper';
import IconUserCog from '@/components/icons/IconUserCog';
import { PermissionName } from '@/types/permission-enums';
import { ActiveRoute, PermissionRoute } from '@/types/routes-enums';
import { SidebarLabel } from '@/types/sidebar-label-enums';

/**
 *
 * @description
 * The sidebarLinks array contains the links that will be displayed in the sidebar.
 * Each link object contains an icon, label, path, and permission.
 *
 * The icon is the icon component that will be displayed in the sidebar.
 * The label is the text that will be displayed next to the icon.
 * The path is the path that the link will navigate to when clicked.
 * The permission is the permission that the user must have in order to see the link.
 *
 * @example
 *
 * const sidebarLinks = [
 *  {
 *   icon: <IconDashboard />,
 *   label: 'Dashboard',
 *   path: '/admin',
 *   permission: 'admin_dashboard',
 * },
 *
 *
 **/

export const sidebarLinks = [
  {
    icon: <IconDashboard />,
    label: SidebarLabel.ADMIN_DASHBOARD,
    active: ActiveRoute.ADMIN_DASHBOARD,
    path: PermissionRoute.ADMIN_DASHBOARD,
    permission: PermissionName.ADMIN_DASHBOARD,
  },
  {
    icon: <IconDashboard />,
    label: SidebarLabel.OFFICE_DASHBOARD,
    active: ActiveRoute.OFFICE_DASHBOARD,
    path: PermissionRoute.OFFICE_DASHBOARD,
    permission: PermissionName.OFFICE_DASHBOARD,
  },
  {
    icon: <IconFile />,
    label: SidebarLabel.QUEUEING_MANAGEMENT,
    active: ActiveRoute.QUEUEING_MANAGEMENT,
    path: PermissionRoute.QUEUEING_MANAGEMENT,
    permission: PermissionName.QUEUEING_MANAGEMENT,
  },

  {
    icon: <IconHistory />,
    label: SidebarLabel.TRANSACTIONS,
    active: ActiveRoute.TRANSACTIONS,
    path: PermissionRoute.TRANSACTIONS,
    permission: PermissionName.TRANSACTIONS,
  },
  {
    icon: <IconCalendar />,
    label: SidebarLabel.APPOINTMENTS,
    active: ActiveRoute.APPOINTMENTS,
    path: PermissionRoute.APPOINTMENTS,
    permission: PermissionName.APPOINTMENTS,
  },
  {
    icon: <IconMessage />,
    label: SidebarLabel.USERS_FEEDBACK,
    active: ActiveRoute.USERS_FEEDBACK,
    path: PermissionRoute.USERS_FEEDBACK,
    permission: PermissionName.USERS_FEEDBACK,
  },
  {
    icon: <IconFeedback />,
    label: SidebarLabel.FEEDBACK_MANAGEMENT,
    active: ActiveRoute.FEEDBACK_MANAGEMENT,
    path: PermissionRoute.FEEDBACK_MANAGEMENT,
    permission: PermissionName.FEEDBACK_MANAGEMENT,
  },
  {
    icon: <IconCalendarCog />,
    label: SidebarLabel.APPOINTMENT_MANAGEMENT,
    active: ActiveRoute.APPOINTMENT_MANAGEMENT,
    path: PermissionRoute.APPOINTMENT_MANAGEMENT,
    permission: PermissionName.APPOINTMENT_MANAGEMENT,
  },
  {
    icon: <IconKiosk />,
    label: SidebarLabel.KIOSK_MANAGEMENT,
    active: ActiveRoute.KIOSK_MANAGEMENT,
    path: PermissionRoute.KIOSK_MANAGEMENT,
    permission: PermissionName.KIOSK_MANAGEMENT,
  },
  {
    icon: <IconSkyScraper />,
    label: SidebarLabel.OFFICE_MANAGEMENT,
    active: ActiveRoute.OFFICE_MANAGEMENT,
    path: PermissionRoute.OFFICE_MANAGEMENT,
    permission: PermissionName.OFFICE_MANAGEMENT,
  },
  {
    icon: <IconSettings />,
    label: SidebarLabel.SERVICE_MANAGEMENT,
    active: ActiveRoute.SERVICE_MANAGEMENT,
    path: PermissionRoute.SERVICE_MANAGEMENT,
    permission: PermissionName.SERVICE_MANAGEMENT,
  },
  {
    icon: <IconUserCog />,
    label: SidebarLabel.ADMIN_SETTINGS,
    active: ActiveRoute.ADMIN_SETTINGS,
    path: PermissionRoute.ADMIN_SETTINGS,
    permission: PermissionName.ADMIN_SETTINGS,
  },
];
