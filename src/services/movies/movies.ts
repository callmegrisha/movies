import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesRequest } from './movies.types';
import { Movie, TvShow } from 'types';
import { createRequest } from 'utils/createRequest';

const commonHeaders: Record<string, string> = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  authorization: import.meta.env.VITE_MOVIES_API_KEY,
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<MoviesRequest<Movie>, number | void>({
      query: (page: number = 1) =>
        createRequest(`/discover/movie?page=${page}`, 'GET', commonHeaders),
    }),
    getAllTvShows: builder.query<MoviesRequest<TvShow>, number | void>({
      query: (page: number = 1) =>
        createRequest(`/discover/tv?page=${page}`, 'GET', commonHeaders),
    }),
    getSearchMovies: builder.query<MoviesRequest<Movie>, [number, string]>({
      query: ([page = 1, query = '']) =>
        createRequest(
          `/search/movie?query=${query}&page=${page}`,
          'GET',
          commonHeaders
        ),
    }),
    getSearchTvShows: builder.query<MoviesRequest<TvShow>, [number, string]>({
      query: ([page = 1, query = '']) =>
        createRequest(
          `/search/tv?query=${query}&page=${page}`,
          'GET',
          commonHeaders
        ),
    }),
    getAllMovieGenres: builder.query({
      query: () => createRequest('/genre/movie/list', 'GET', commonHeaders),
    }),
    getAllTvGenres: builder.query({
      query: () => createRequest('/genre/tv/list', 'GET', commonHeaders),
    }),
    getTopRated: builder.query({
      query: () => createRequest('/movie/top_rated', 'GET', commonHeaders),
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useGetAllTvShowsQuery,
  useGetAllMovieGenresQuery,
  useGetAllTvGenresQuery,
  useGetTopRatedQuery,
  useGetSearchMoviesQuery,
  useGetSearchTvShowsQuery,
} = movieApi;
