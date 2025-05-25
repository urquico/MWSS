import { lazy } from 'react';

// login
export const Login = lazy(() => import('@/routes/Login'));
export const LandingPage = lazy(() => import('@/routes/LandingPage'));
// // change password
// export const ChangePassword = lazy(() => import('@/routes/ChangePassword'));

// // profile
// export const Profile = lazy(() => import('@/routes/Profile'));

// //dashboard
// export const Dashboard = lazy(() => import('@/routes/Dashboard'));

// export const HeadDashboard = lazy(() => import('@/routes/HeadDashboard'));

// //queue
// export const QueuingManagement = lazy(
//   () => import('@/routes/QueuingManagement'),
// );

// //transactions
// export const Transactions = lazy(() => import('@/routes/Transactions'));

// export const CardsAndTable = lazy(
//   () => import('@/features/transactions/components/table/CardsAndTable'),
// );

// export const OngoingTable = lazy(
//   () => import('@/features/transactions/components/table/OngoingTable'),
// );

// export const InQueueTable = lazy(
//   () => import('@/features/transactions/components/table/InQueueTable'),
// );

// export const CancelledTable = lazy(
//   () => import('@/features/transactions/components/table/CancelledTable'),
// );

// export const NoShowTable = lazy(
//   () => import('@/features/transactions/components/table/NoShowTable'),
// );

// export const DoneTable = lazy(
//   () => import('@/features/transactions/components/table/DoneTable'),
// );

// //appointments

// export const Appointments = lazy(() => import('@/routes/Appointments'));

// export const AppointmentsTable = lazy(
//   () => import('@/features/appointments/component/table/AppointmentsTable'),
// );

// export const AppointmentsOngoing = lazy(
//   () => import('@/features/appointments/component/table/OngoingTable'),
// );
// export const AppointmentsPending = lazy(
//   () => import('@/features/appointments/component/table/PendingTable'),
// );

// export const AppointmentsCancelled = lazy(
//   () => import('@/features/appointments/component/table/CancelledTable'),
// );

// export const AppointmentsNoShow = lazy(
//   () => import('@/features/appointments/component/table/NoShowTable'),
// );

// export const AppointmentsDone = lazy(
//   () => import('@/features/appointments/component/table/DoneTable'),
// );

// export const AppointmentManagement = lazy(
//   () => import('@/routes/AppointmentManagement'),
// );

// export const AppointmentManagementTable = lazy(
//   () =>
//     import(
//       '@/features/appointment-management/component/table/AppointmentManagementTable'
//     ),
// );

// export const AddSchedule = lazy(
//   () => import('@/features/appointment-management/component/form/AddSchedule'),
// );

// export const ViewSchedule = lazy(
//   () => import('@/features/appointment-management/component/form/ViewSchedule'),
// );

// export const EditSchedule = lazy(
//   () => import('@/features/appointment-management/component/form/EditSchedule'),
// );

// //kiosk management
// export const Kiosk = lazy(() => import('@/routes/Kiosk'));

// export const KioskTable = lazy(
//   () => import('@/features/kiosk-management/component/table/KioskTable'),
// );

// export const AddKiosk = lazy(
//   () => import('@/features/kiosk-management/component/form/AddKiosk'),
// );

// export const ViewKiosk = lazy(
//   () => import('@/features/kiosk-management/component/form/ViewKiosk'),
// );

// export const EditKiosk = lazy(
//   () => import('@/features/kiosk-management/component/form/EditKiosk'),
// );

// //user's Feedback
// export const UserFeedback = lazy(() => import('@/routes/UserFeedback'));

// //feedback
// export const Feedback = lazy(() => import('@/routes/Feedback'));

// //feedback management
// export const FeedbackManagement = lazy(
//   () => import('@/routes/FeedbackManagement'),
// );

// export const QuestionsList = lazy(
//   () => import('@/features/feedback-management/component/data/QuestionsList'),
// );

// export const AddQuestion = lazy(
//   () => import('@/features/feedback-management/component/form/AddQuestion'),
// );

// export const EditQuestion = lazy(
//   () => import('@/features/feedback-management/component/form/EditQuestion'),
// );

// //office management
// export const Office = lazy(() => import('@/routes/Office'));

// export const OfficeTable = lazy(
//   () => import('@/features/office/components/table/OfficeTable'),
// );

// export const AddOffice = lazy(
//   () => import('@/features/office/components/form/office/AddOffice'),
// );

// export const ViewOffice = lazy(
//   () => import('@/features/office/components/form/office/ViewOffice'),
// );

// export const EditOffice = lazy(
//   () => import('@/features/office/components/form/office/EditOffice'),
// );

// export const MonitorTable = lazy(
//   () => import('@/features/office/components/table/MonitorTable'),
// );

// export const AddMonitor = lazy(
//   () => import('@/features/office/components/form/monitor/AddMonitor'),
// );

// export const ViewMonitor = lazy(
//   () => import('@/features/office/components/form/monitor/ViewMonitor'),
// );

// export const EditMonitor = lazy(
//   () => import('@/features/office/components/form/monitor/EditMonitor'),
// );

// //service management
// export const Service = lazy(() => import('@/routes/Service'));

// export const ServiceTable = lazy(
//   () => import('@/features/service-management/component/table/ServiceTable'),
// );

// export const AddService = lazy(
//   () =>
//     import('@/features/service-management/component/form/service/AddService'),
// );

// export const ViewService = lazy(
//   () =>
//     import('@/features/service-management/component/form/service/ViewService'),
// );

// export const EditService = lazy(
//   () =>
//     import('@/features/service-management/component/form/service/EditService'),
// );

// export const CounterAssignTable = lazy(
//   () =>
//     import('@/features/service-management/component/table/CounterAssignTable'),
// );

// export const AddCounter = lazy(
//   () =>
//     import('@/features/service-management/component/form/counter/AddCounter'),
// );

// export const ViewCounter = lazy(
//   () =>
//     import('@/features/service-management/component/form/counter/ViewCounter'),
// );

// export const EditCounter = lazy(
//   () =>
//     import('@/features/service-management/component/form/counter/EditCounter'),
// );

// //admin settings
// export const AdminSettings = lazy(
//   () => import('@/features/admin-settings/components/AdminSettings'),
// );

// export const UsersTable = lazy(
//   () => import('@/features/admin-settings/components/table/UsersTable'),
// );

// export const AddUser = lazy(
//   () => import('@/features/admin-settings/components/form/users/AddUser'),
// );

// export const ViewProfile = lazy(
//   () => import('@/features/admin-settings/components/form/users/ViewProfile'),
// );

// export const EditUser = lazy(
//   () => import('@/features/admin-settings/components/form/users/EditUser'),
// );

// export const RolesTable = lazy(
//   () => import('@/features/admin-settings/components/table/RolesTable'),
// );

// export const AddRole = lazy(
//   () => import('@/features/admin-settings/components/form/roles/AddRole'),
// );

// export const ViewRole = lazy(
//   () => import('@/features/admin-settings/components/form/roles/ViewRole'),
// );

// export const EditRole = lazy(
//   () => import('@/features/admin-settings/components/form/roles/EditRole'),
// );

// export const UserLogsTable = lazy(
//   () => import('@/features/admin-settings/components/table/UserLogsTable'),
// );
