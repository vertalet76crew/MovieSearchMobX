export interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie' | 'series';
  Poster: string;
}

export interface MovieListResponse {
  Response: 'True' | 'False';
  Search: MovieItem[];
  totalResults: string;
  Error?: string;
}

export interface MovieListStore {
  data: MovieListResponse;
  isFetching: boolean;
}

export interface FormValues {
  search: string;
}
