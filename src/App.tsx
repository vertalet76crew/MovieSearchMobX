import MovieList from './components/MovieList';
import RootStore from './components/rootStore/rootStore';
import { RootStoreContext } from './components/rootStore/rootStoreContext';

const rootStore = new RootStore();
const App = () => (
  <RootStoreContext.Provider value={rootStore}>
    <MovieList />
  </RootStoreContext.Provider>
);
export default App;
