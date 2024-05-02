import { FC } from 'react';
import { Typography } from '@mui/material';
import { MovieItem } from '../MovieList/types';
import styles from './styles.module.scss';

interface ListItemProps {
  item: MovieItem;
}
const ListItem: FC<ListItemProps> = ({ item }) => (
  <li className={styles.listItem}>
    <Typography className={styles.title}>{item.Title}</Typography>
    <img className={styles.poster} src={item.Poster} alt="poster" />
  </li>
);

export default ListItem;
