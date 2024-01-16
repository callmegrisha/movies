export interface MoviesResponse<T> {
  page: number;
  total_pages: number;
  results: T[];
}
