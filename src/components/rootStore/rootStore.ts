import MovieListStore from '../MovieList/store/movieListStore';

class RootStore {
  movieList = new MovieListStore();
}

export default RootStore;
