import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesResponse } from './movies.types';
import { Movie } from '../../types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<MoviesResponse<Movie>, number | void>({
      query: (page: number = 1) => ({
        url: `/discover/movie?page=${page}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk5ODcyYWY3NzI0NmY2MTcwNjUyMzgwZGM3ZWMwMCIsInN1YiI6IjYzMzM0ODAwNDFlZWUxMDA4MTM0ZjM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EARIHG5wWJburSukAnsMozSkpTy8VRyoV_EAnAMX7s0',
        },
      }),
    }),
    getSearchMovies: builder.query<MoviesResponse<Movie>, [number, string]>({
      query: ([page = 1, query = '']) => ({
        url: `/search/movie?query=${query}&page=${page}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk5ODcyYWY3NzI0NmY2MTcwNjUyMzgwZGM3ZWMwMCIsInN1YiI6IjYzMzM0ODAwNDFlZWUxMDA4MTM0ZjM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EARIHG5wWJburSukAnsMozSkpTy8VRyoV_EAnAMX7s0',
        },
      }),
    }),
    getAllGenres: builder.query({
      query: () => ({
        url: '/genre/movie/list',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk5ODcyYWY3NzI0NmY2MTcwNjUyMzgwZGM3ZWMwMCIsInN1YiI6IjYzMzM0ODAwNDFlZWUxMDA4MTM0ZjM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EARIHG5wWJburSukAnsMozSkpTy8VRyoV_EAnAMX7s0',
        },
      }),
    }),
    getTopRated: builder.query({
      query: () => ({
        url: '/movie/top_rated',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk5ODcyYWY3NzI0NmY2MTcwNjUyMzgwZGM3ZWMwMCIsInN1YiI6IjYzMzM0ODAwNDFlZWUxMDA4MTM0ZjM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EARIHG5wWJburSukAnsMozSkpTy8VRyoV_EAnAMX7s0',
        },
      }),
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useGetAllGenresQuery,
  useGetTopRatedQuery,
  useGetSearchMoviesQuery,
} = movieApi;
