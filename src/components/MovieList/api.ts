import { axiosInstance, baseUrl } from '../api/instance';

const getMovies = (val: string) =>
  axiosInstance.get(baseUrl, {
    params: {
      s: val
    }
  });

export const movieApi = { getMovies };
