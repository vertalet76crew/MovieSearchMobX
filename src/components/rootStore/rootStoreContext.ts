import { createContext, useContext } from 'react';
import RootStore from './rootStore';

export const RootStoreContext = createContext<RootStore | null>(null);
export const useStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error('Приложение не обёрнуто в провайдер');
  }

  return context;
};
