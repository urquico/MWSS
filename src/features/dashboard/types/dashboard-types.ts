export type SeriesItem = {
  name: string;
  color: string;
  label: string;
};

export type TrendData = {
  month: string;
  projected: number;
  actual: number;
};

export type TrendChartData = {
  title?: string;
  period?: string;
  data: TrendData[];
  height?: number;
  series: SeriesItem[];
};

export type DashboardSummaryData = {
  items: {
    label: string;
    value: string | number;
    color?: string;
    textColor?: string;
  }[];
};

export type PieChartData = {
  type: string;
  value: number;
  color: string;
};

export type BarChartData = {
  type: string;
  value: number;
  color: string;
  description?: string;
};

export type DonutChartData = {
  label: string;
  value: number;
  color: string;
};

export type AdminDashboard = {
  summaryData: DashboardSummaryData;
  trendData: TrendChartData;
  lesseeTypeData: PieChartData[];
  lesseeTypeBarData: BarChartData[];
  donutChartData: DonutChartData[];
};