export interface DataReturn<T> {
  data: T[];
  pagination: {
    _page: number;
    _limit: number;
    _totalRows: number;
  };
}
