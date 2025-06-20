export interface SuccessResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  totalCount?: number;
  totalPages?: number;
  currentPage?: number;
}
