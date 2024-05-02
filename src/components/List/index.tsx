import { FC, memo } from 'react';
import { MovieItem } from '../MovieList/types';
import ListItem from '../ListItem';
import styles from './styles.module.scss';

interface ListProps {
  items: MovieItem[];
}
const List: FC<ListProps> = ({ items }) => (
  <ul className={styles.list}>
    {items.map((el) => (
      <ListItem key={el.imdbID} item={el} />
    ))}
  </ul>
);

export default memo(List);
