import { MonthlyVisitor } from './dashboard-types';

export type VisitorType = {
  totalVisitors: number;
  visitors: MonthlyVisitor[];
};
