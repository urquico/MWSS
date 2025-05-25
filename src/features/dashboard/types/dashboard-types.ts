export interface AdminDashboard {
  visitors: VisitorsToday;
  servingWaitingTime: Times;
  satisfactionRate: SatisfactionRate;
  overAllExperience: OverallExperience;
  feedbackSummary: FeedbackSummary;
  offices: OfficeWithVisitors[];
}

export interface HeadDashboard {
  visitors: VisitorsToday;
  servingWaitingTime: Times;
  satisfactionRate: SatisfactionRate;
  overAllExperience: OverallExperience;
  feedbackSummary: FeedbackSummary;
  services: ServiceWithVisitors[];
}

export interface VisitorsToday {
  totalVisitors: number;
  visitors: {
    month: string;
    visitors: number;
  }[];
}

export interface OfficeWithVisitors {
  id: number;
  office_name: string;
  visitors: number;
}

export interface ServiceWithVisitors {
  id: number;
  service_name: string;
  visitors: number;
}

export interface TransactionToday {
  currentServing: number;
  walkIn: {
    ongoing: number;
    done: number;
  };
  online: {
    ongoing: number;
    done: number;
  };
}

export interface Times {
  times: {
    month: string;
    averageServingTime: number;
    averageWaitingTime: number;
    totalQueues: number;
  }[];
}

export interface SatisfactionRate {
  total: number;
  percentage: number;
  satisfiedClients: number;
  description: string;
}

export interface OverallExperience {
  total: number;
  oneStarRatings: number;
  twoStarRatings: number;
  threeStarRatings: number;
  fourStarRatings: number;
  fiveStarRatings: number;
}

export interface FeedbackSummary {
  totalFeedbacks: number;
  overallRating: number;
  oneStarRatings: number;
  twoStarRatings: number;
  threeStarRatings: number;
  fourStarRatings: number;
  fiveStarRatings: number;
}
