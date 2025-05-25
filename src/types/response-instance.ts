export interface SuccessResponse<T = undefined> {
  data?: T;
  totalCount?: number;
  statusCode: number;
  message: string;
  currentPage?: number;
  totalPages?: number;
}
