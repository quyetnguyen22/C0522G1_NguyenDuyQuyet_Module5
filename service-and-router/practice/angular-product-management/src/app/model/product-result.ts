export interface ProductResult<T> {
  data: T[];
  pagination: {
    _page: number;
    _limit: number;
    _totalRows: number;
  };
}
