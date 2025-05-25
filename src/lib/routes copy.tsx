import Loader from '@/components/ui/Loader';
// import Maintenance from '@/components/ui/Maintenance';
import ErrorPage from '@/components/ui/error/ErrorPage';
import AppShell from '@/components/ui/shell/AppShell';
import {
  AddCounter,
  AddKiosk,
  AddMonitor,
  AddOffice,
  AddQuestion,
  AddRole,
  AddSchedule,
  AddService,
  AddUser,
  AdminSettings,
  AppointmentManagement,
  AppointmentManagementTable,
  Appointments,
  AppointmentsCancelled,
  AppointmentsDone,
  AppointmentsNoShow,
  AppointmentsOngoing,
  AppointmentsPending,
  AppointmentsTable,
  CancelledTable,
  CardsAndTable,
  ChangePassword,
  CounterAssignTable,
  Dashboard,
  DoneTable,
  EditCounter,
  EditKiosk,
  EditMonitor,
  EditOffice,
  EditQuestion,
  EditRole,
  EditSchedule,
  EditService,
  EditUser,
  Feedback,
  FeedbackManagement,
  HeadDashboard,
  InQueueTable,
  Kiosk,
  KioskTable,
  Login,
  MonitorTable,
  NoShowTable,
  Office,
  OfficeTable,
  OngoingTable,
  Profile,
  QuestionsList,
  QueuingManagement,
  RolesTable,
  Service,
  ServiceTable,
  Transactions,
  UserFeedback,
  UserLogsTable,
  UsersTable,
  ViewCounter,
  ViewKiosk,
  ViewMonitor,
  ViewOffice,
  ViewProfile,
  ViewRole,
  ViewSchedule,
  ViewService,
} from '@/lib/lazy';
import AuthGuard from '@/provider/auth-guard';
import SessionProvider from '@/provider/session-provider';
import { SidebarProvider } from '@/provider/sidebar-provider';
import { Outlet, createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter(
  [
    {
      id: 'login',
      path: '/',
      errorElement: <ErrorPage />,
      element: (
        <AuthGuard>
          <Login />
        </AuthGuard>
      ),
    },

    {
      id: 'root',
      path: '/admin',
      errorElement: <ErrorPage />,
      element: (
        <SessionProvider>
          <SidebarProvider>
            <AuthGuard>
              <AppShell>
                <Outlet />
              </AppShell>
            </AuthGuard>
          </SidebarProvider>
        </SessionProvider>
      ),
      children: [
        {
          id: 'admin-profile',
          path: 'profile',
          element: <Profile />,
        },
        {
          id: 'change-password',
          path: 'change-password',
          element: <ChangePassword />,
        },
        {
          id: 'admin-dashboard',
          path: 'admin-dashboard',
          element: <Dashboard />,
        },
        {
          id: 'office-dashboard',
          path: 'office-dashboard',
          element: <HeadDashboard />,
        },
        {
          id: 'queueing-management',
          path: 'queueing-management',
          element: <QueuingManagement />,
        },
        {
          path: 'transactions',
          element: (
            <Transactions>
              <Outlet />
            </Transactions>
          ),
          children: [
            {
              index: true,
              element: <CardsAndTable />,
            },
            {
              id: 'ongoing',
              path: 'ongoing',
              element: <OngoingTable />,
            },
            {
              id: 'in-queue',
              path: 'in-queue',
              element: <InQueueTable />,
            },
            {
              id: 'cancelled',
              path: 'cancelled',
              element: <CancelledTable />,
            },
            {
              id: 'no-show',
              path: 'no-show',
              element: <NoShowTable />,
            },
            {
              id: 'done',
              path: 'done',
              element: <DoneTable />,
            },
          ],
        },
        {
          id: 'appointments',
          path: 'appointments',
          element: (
            <Appointments>
              <Outlet />
            </Appointments>
          ),
          children: [
            {
              id: 'appointments-list',
              index: true,
              element: <AppointmentsTable />,
            },
            {
              id: 'appointments-ongoing',
              path: 'ongoing',
              element: <AppointmentsOngoing />,
            },
            {
              id: 'appointments-pending',
              path: 'pending',
              element: <AppointmentsPending />,
            },
            {
              id: 'appointments-cancelled',
              path: 'cancelled',
              element: <AppointmentsCancelled />,
            },
            {
              id: 'appointments-no-show',
              path: 'no-show',
              element: <AppointmentsNoShow />,
            },
            {
              id: 'appointments-done',
              path: 'done',
              element: <AppointmentsDone />,
            },
          ],
        },
        {
          id: 'appointment-management',
          path: 'appointment-management',
          element: (
            <AppointmentManagement>
              <Outlet />
            </AppointmentManagement>
          ),
          children: [
            {
              id: 'appointment-management-list',
              index: true,
              element: <AppointmentManagementTable />,
            },
            {
              id: 'create-schedule',
              path: 'create-schedule',
              element: <AddSchedule />,
            },
            {
              id: 'view-schedule',
              path: 'view-schedule',
              element: <ViewSchedule />,
            },
            {
              id: 'edit-schedule',
              path: 'edit-schedule',
              element: <EditSchedule />,
            },
          ],
        },
        {
          path: '/admin/kiosk-management',
          element: (
            <Kiosk>
              <Outlet />
            </Kiosk>
          ),
          children: [
            {
              index: true, // Default route for /admin/kiosk-management
              element: <KioskTable />,
            },
            {
              path: 'view-kiosk',
              element: <ViewKiosk />, // View Kiosk page
            },
            {
              path: 'add-new-kiosk',
              element: <AddKiosk />, // Add New Kiosk page
            },
            {
              path: 'edit-kiosk',
              element: <EditKiosk />, // Edit Kiosk page
            },
          ],
        },

        {
          id: 'user-feedback',
          path: 'users-feedback',
          element: <UserFeedback />,
        },
        {
          id: 'feedback',
          path: 'feedback',
          element: <Feedback />,
        },
        {
          id: 'feedback-management',
          path: 'feedback-management',
          element: (
            <FeedbackManagement>
              <Outlet />
            </FeedbackManagement>
          ),
          children: [
            {
              id: 'question-list',
              index: true,
              element: <QuestionsList />,
            },
            {
              id: 'add-question',
              path: 'add-question',
              element: <AddQuestion />,
            },
            {
              id: 'edit-question',
              path: 'edit-question',
              element: <EditQuestion />,
            },
          ],
        },
        {
          id: 'office-management',
          path: 'office-management',
          element: (
            <Office>
              <Outlet />
            </Office>
          ),
          children: [
            {
              id: 'offices',
              path: 'offices',
              element: <Outlet />,
              children: [
                {
                  id: 'office-list',
                  index: true,
                  element: <OfficeTable />,
                },
                {
                  id: 'add-office',
                  path: 'add-new-office',
                  element: <AddOffice />,
                },
                {
                  id: 'office',
                  path: 'office',
                  element: <Outlet />,
                  children: [
                    {
                      id: 'view-office',
                      index: true,
                      element: <ViewOffice />,
                    },
                    {
                      id: 'edit-office',
                      path: 'edit-office',
                      element: <EditOffice />,
                    },
                  ],
                },
              ],
            },
            {
              id: 'monitors',
              path: 'monitors',
              element: <Outlet />,
              children: [
                {
                  id: 'monitor-list',
                  index: true,
                  element: <MonitorTable />,
                },
                {
                  id: 'add-monitor',
                  path: 'add-new-monitor',
                  element: <AddMonitor />,
                },
                {
                  id: 'monitor',
                  path: 'monitor',
                  element: <Outlet />,
                  children: [
                    {
                      id: 'view-monitor',
                      index: true,
                      element: <ViewMonitor />,
                    },
                    {
                      id: 'edit-monitor',
                      path: 'edit-monitor',
                      element: <EditMonitor />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'service-management',
          path: 'service-management',
          element: (
            <Service>
              <Outlet />
            </Service>
          ),
          children: [
            {
              id: 'services',
              path: 'services',
              element: <Outlet />,
              children: [
                {
                  id: 'service-list',
                  index: true,
                  element: <ServiceTable />,
                },
                {
                  id: 'add-service',
                  path: 'add-new-service',
                  element: <AddService />,
                },
                {
                  id: 'service',
                  path: 'service',
                  element: <Outlet />,
                  children: [
                    {
                      id: 'view-service',
                      index: true,
                      element: <ViewService />,
                    },
                    {
                      id: 'edit-service',
                      path: 'edit-service',
                      element: <EditService />,
                    },
                  ],
                },
              ],
            },
            {
              id: 'counter-assignments',
              path: 'counter-assignments',
              element: <Outlet />,
              children: [
                {
                  id: 'counter-assignment-list',
                  index: true,
                  element: <CounterAssignTable />,
                },
                {
                  id: 'assign-counter',
                  path: 'assign-counter',
                  element: <AddCounter />,
                },
                {
                  id: 'counter-assignment',
                  path: 'counter-assignment',
                  element: <Outlet />,
                  children: [
                    {
                      id: 'view-counter',
                      index: true,
                      element: <ViewCounter />,
                    },
                    {
                      id: 'edit-counter',
                      path: 'edit-counter',
                      element: <EditCounter />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'admin-settings',
          path: 'admin-settings',
          element: (
            <AdminSettings>
              <Outlet />
            </AdminSettings>
          ),
          children: [
            {
              id: 'users',
              path: 'users',
              element: <Outlet />,
              children: [
                {
                  id: 'users-list',
                  index: true,
                  element: <UsersTable />,
                },
                {
                  id: 'add-user',
                  path: 'add-new-user',
                  element: <AddUser />,
                },
                {
                  id: 'profile',
                  path: 'profile',
                  element: <Outlet />,
                  children: [
                    {
                      id: 'view-profile',
                      index: true,
                      element: <ViewProfile />,
                    },
                    {
                      id: 'edit-profile',
                      path: 'edit-profile',
                      element: <EditUser />,
                    },
                  ],
                },
              ],
            },
            {
              id: 'roles',
              path: 'roles',
              element: <Outlet />,
              children: [
                {
                  id: 'roles-list',
                  index: true,
                  element: <RolesTable />,
                },
                {
                  id: 'add-role',
                  path: 'add-new-role',
                  element: <AddRole />,
                },
                {
                  id: 'role',
                  path: 'role',
                  element: <Outlet />,
                  children: [
                    {
                      id: 'view-role',
                      index: true,
                      element: <ViewRole />,
                    },
                    {
                      id: 'edit-role',
                      path: 'edit-role',
                      element: <EditRole />,
                    },
                  ],
                },
              ],
            },
            {
              id: 'user-logs',
              path: 'user-logs',
              element: <UserLogsTable />,
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
    hydrationData: {
      loaderData: {
        root: <Loader />,
      },
    },
  },
);
