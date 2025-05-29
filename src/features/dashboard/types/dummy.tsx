import { AdminDashboard } from './dashboard-types';
import { useMantineTheme } from '@mantine/core';


export const useDashboardDummyData = (): AdminDashboard => {
  const theme = useMantineTheme();

  return {
    summaryData: {
      items: [
        { label: 'Total No. Lessees', value: '25', color: theme.colors.red[1], },
        { label: 'Monthly Rentals per Lessee Type', value: '40', color: theme.colors.yellow[1], },
        { label: 'Monthly Rentals vs. Projected', value: '80', color: theme.colors.green[1], },
        { label: 'Billing Summary (Issued vs. Unissued)', value: '100', color: theme.colors.violet[1], },
        { label: 'Expiring Contracts', value: '251', color: theme.colors.blue[1], },
      ]
    },

    trendData: {
      title: 'Total Actual vs Projected trend',
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
        {
          name: 'Projected',
          color: '#003366',
          label: 'Projected'
        },
        {
          name: 'Actual',
          color: '#A2D2FC',
          label: 'Actual'
        }
      ]

    },
    lesseeTypeData: [
      { type: 'Row', value: 10, color: theme.colors.blue[2] },
      { type: 'Big Accounts', value: 25, color: theme.colors.blue[4] },
      { type: 'MLPB', value: 25, color: theme.colors.blue[5] },
      { type: 'Others', value: 40, color: theme.colors.blue[8] }
    ],

    lesseeTypeBarData: [
      {
        type: 'Residential',
        value: 35,
        color: theme.colors.blue[6],
        description: 'Individual home rentals'
      },
      {
        type: 'Commercial',
        value: 28,
        color: theme.colors.green[6],
        description: 'Office and retail spaces'
      },
      {
        type: 'Industrial',
        value: 20,
        color: theme.colors.orange[6],
        description: 'Warehouses and factories'
      },
      {
        type: 'Agricultural',
        value: 12,
        color: theme.colors.yellow[6],
        description: 'Farmland and barns'
      },
      {
        type: 'Special Purpose',
        value: 5,
        color: theme.colors.red[6],
        description: 'Schools, hospitals, etc.'
      }
    ],
    donutChartData: [
      { label: 'Issued', value: 70, color: theme.colors.green[6] },
      { label: 'Unissued', value: 30, color: theme.colors.gray[4] }
    ],
  }
  };