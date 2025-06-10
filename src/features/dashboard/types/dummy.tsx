import { AdminDashboard } from './dashboard-types';
import { useMantineTheme } from '@mantine/core';


export const useDashboardDummyData = (): AdminDashboard => {
  const theme = useMantineTheme();

  return {
    summaryData: {
      items: [
        { label: 'Total No. Lessees', value: '25', color: '#FFE3E3', },
        { label: 'Monthly Rentals per Lessee Type', value: '40', color: '#FFF3BF', },
        { label: 'Monthly Rentals vs. Projected', value: '80', color: '#D3F9D8', },
        { label: 'Billing Summary (Issued vs. Unissued)', value: '100',color: '#E5DBFF' },
        { label: 'Expiring Contracts', value: '251', color: '#D0EBFF', },
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
          color: '#78A7F8',
          label: 'Projected'
        },
        {
          name: 'Actual',
          color: '#FE7D79',
          label: 'Actual'
        }
      ]

    },
    lesseeTypeData: [
      { type: 'Row', value: 10, color: '#FFC16E' },
      { type: 'Big Accounts', value: 25, color:'#DDA1FA' },
      { type: 'MLPB', value: 25, color: '#FE7D79' },
      { type: 'Others', value: 40, color: '#78A7F8' }
    ],

    lesseeTypeBarData: [
      {
        type: 'Row',
        value: 120000,
        color: '#FE7D79',
        description: 'A'
      },
      {
        type: 'Big Accounts',
        value: 90000,
        color: '#FFC16E',
        description: 'B'
      },
      {
        type: 'MLPB Lessee',
        value: 125000,
        color:'#DDA1FA',
        description: 'C'
      },
      {
        type: 'Others',
        value: 125000,
        color: '#78A7F8',
        description: 'D'
      },
    
    ],
    donutChartData: [
      { label: 'Issued', value: 70, color: theme.colors.green[6] },
      { label: 'Unissued', value: 30, color: theme.colors.gray[4] }
    ],
  }
  };