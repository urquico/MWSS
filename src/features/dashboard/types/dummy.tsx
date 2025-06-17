import { AdminDashboard } from './dashboard-types';

// Central dummy data for both dashboards (uses only hardcoded colors)
export const DASHBOARD_DUMMY_DATA: { [key: string]: AdminDashboard } = {
  lease: {
    summaryData: {
      items: [
        { label: 'Total No. Lessees', value: '25', color: '#FFE3E3' },
        { label: 'Monthly Rentals per Lessee Type', value: '40', color: '#FFF3BF' },
        { label: 'Monthly Rentals vs. Projected', value: '80', color: '#D3F9D8' },
        { label: 'Billing Summary (Issued vs. Unissued)', value: '100', color: '#E5DBFF' },
        { label: 'Expiring Contracts', value: '251', color: '#D0EBFF' },
      ]
    },
    trendData: {
      title: 'Total Actual vs Projected Trend',
      period: 'Last 7 Months',
      height: 350,
      data: [
        { month: 'Jan', projected: 1000, actual: 1200 },
        { month: 'Feb', projected: 2000, actual: 16800 },
        { month: 'Mar', projected: 3000, actual: 3200 },
        { month: 'Apr', projected: 4000, actual: 3800 },
        { month: 'May', projected: 5900, actual: 5200 },
        { month: 'Jun', projected: 6000, actual: 5800 },
        { month: 'Jul', projected: 7000, actual: 7200 },
      ],
      series: [
        { name: 'Projected', color: '#78A7F8', label: 'Projected' },
        { name: 'Actual', color: '#FE7D79', label: 'Actual' },
      ]
    },
    lesseeTypeData: [
      { type: 'Row', value: 10, color: '#FFC16E' },
      { type: 'Big Accounts', value: 25, color: '#DDA1FA' },
      { type: 'MLPB', value: 25, color: '#FE7D79' },
      { type: 'Others', value: 40, color: '#78A7F8' }
    ],
    lesseeTypeBarData: [
      { type: 'Row', value: 120000, color: '#FE7D79', description: 'A' },
      { type: 'Big Accounts', value: 90000, color: '#FFC16E', description: 'B' },
      { type: 'MLPB Lessee', value: 125000, color: '#DDA1FA', description: 'C' },
      { type: 'Others', value: 125000, color: '#78A7F8', description: 'D' },
    ],
    donutChartData: [
      { label: 'Issued', value: 70, color: '#6EE7B7' },    // Custom green
      { label: 'Unissued', value: 30, color: '#A0AEC0' }   // Custom gray
    ],
  },

  rawWater: {
    summaryData: {
      items: [
        { label: 'Total Water Income', value: '25', color: '#B6E0FE' },
        { label: 'Number of Raw Water Accounts', value: '40', color: '#FFD6A5' },
        { label: 'Number of Billings Issued', value: '80', color: '#C3F584' },
        { label: 'Number of Billings Unissued', value: '100', color: '#A5D8FF' },
        { label: 'Pending Tests', value: '6', color: '#FFD6E0' },
      ]
    },
    monthlyBarData: [
      { month: 'January', issued: 42000, unissued: 20000 },
      { month: 'February', issued: 44000, unissued: 26000 },
      { month: 'March', issued: 34000, unissued: 29000 },
      { month: 'April', issued: 39000, unissued: 22000 },
      { month: 'May', issued: 32000, unissued: 24000 },
      { month: 'June', issued: 35000, unissued: 29000 },
      { month: 'July', issued: 41000, unissued: 27000 },
    ],
    donutChartData: [
      { label: 'Industrial', value: 40, color: '#76A9F9' },    
      { label: 'Commercial', value: 30, color: '#DDA1F7' }, 
          { label: 'Government', value: 25, color: '#FE7D78' },    
      { label: 'Agriculture', value: 15, color: '#FFBF6E' },     
    ],
     lesseeTypeData: [
    { type: 'River', value: 5, color: '#5B9BD5' },
    { type: 'Lake', value: 2, color: '#70AD47' },
    { type: 'Dam', value: 3, color: '#ED7D31' },
    { type: 'Reservoir', value: 2, color: '#FFC000' }
  ],
  }
};

// React Query fetcher for dashboard data
export const useDashboardData = (dashboard: 'lease' | 'rawWater') => {
  // In a real app, replace this with an async fetch from an API
  return DASHBOARD_DUMMY_DATA[dashboard];
};