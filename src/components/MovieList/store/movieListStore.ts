import { makeAutoObservable, runInAction } from 'mobx';
import { MovieListResponse } from '../types';
import { movieApi } from '../api';

class MovieListStore {
  constructor() {
    makeAutoObservable(this);
  }

  movieData: MovieListResponse | null = null;

  isFetching = false;

  getMovieList = async (val: string) => {
    try {
      this.isFetching = true;
      const response = await movieApi.getMovies(val);

      runInAction(() => {
        this.movieData = response.data;
        this.isFetching = false;
      });
    } catch (error) {
      this.isFetching = false;
    }
  };
}

export default MovieListStore;
