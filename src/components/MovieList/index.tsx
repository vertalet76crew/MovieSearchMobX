import { observer } from 'mobx-react-lite';
import { Box, Button, LinearProgress, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useForm } from 'react-hook-form';
import { useStore } from '../rootStore/rootStoreContext';
import { FormValues } from './types';
import FormContainer from '../FormContainer';
import List from '../List';

const MovieList = () => {
  const context = useForm<FormValues>();
  const {
    register,
    formState: { isDirty, isSubmitted }
  } = context;
  const {
    movieList: { getMovieList, isFetching, movieData }
  } = useStore();
  const movies = movieData?.Search || [];
  const onSubmit = (data: FormValues) => {
    getMovieList(data.search);
  };

  if (isFetching) {
    return <LinearProgress />;
  }
  return (
    <FormContainer context={context} onSubmit={onSubmit}>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <TextField variant="outlined" size="small" {...register('search')} name="search" />
        <Button startIcon={<SearchOutlinedIcon />} variant="contained" disabled={isFetching} type="submit">
          find
        </Button>
      </Box>
      {!!movies.length && <List items={movies} />}
      {isDirty && isSubmitted && !movies.length && <div>No data</div>}
    </FormContainer>
  );
};

export default observer(MovieList);
