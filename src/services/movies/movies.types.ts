export interface MoviesRequest<T> {
  page: number;
  total_pages: number;
  results: T[];
}
