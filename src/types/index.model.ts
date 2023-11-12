export interface ServerResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  sortBy?: string;
  name?: string;
}
