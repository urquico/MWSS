import { AdminDashboard } from '@/features/dashboard/types/dashboard-types';
import { createContext } from 'react';

export type AdminDashboardContextType = {
  data: AdminDashboard | undefined;
};

export const AdminDashboardContext = createContext<
  AdminDashboardContextType | undefined
>({} as AdminDashboardContextType);

export function AdminDashboardProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: AdminDashboard;
}) {
  return (
    <AdminDashboardContext.Provider value={{ data }}>
      {children}
    </AdminDashboardContext.Provider>
  );
}
