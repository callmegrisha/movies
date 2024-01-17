import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesResponse } from './movies.types';
import { Movie } from '../../types';
import { TvShow } from '../../types/tvShow';

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
    getAllTvShows: builder.query<MoviesResponse<TvShow>, number | void>({
      query: (page: number = 1) => ({
        url: `/discover/tv?page=${page}`,
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
		getSearchTvShows: builder.query<MoviesResponse<TvShow>, [number, string]>({
      query: ([page = 1, query = '']) => ({
        url: `/search/tv?query=${query}&page=${page}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk5ODcyYWY3NzI0NmY2MTcwNjUyMzgwZGM3ZWMwMCIsInN1YiI6IjYzMzM0ODAwNDFlZWUxMDA4MTM0ZjM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EARIHG5wWJburSukAnsMozSkpTy8VRyoV_EAnAMX7s0',
        },
      }),
    }),
    getAllMovieGenres: builder.query({
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
		getAllTvGenres: builder.query({
      query: () => ({
        url: '/genre/tv/list',
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
	useGetAllTvShowsQuery,
  useGetAllMovieGenresQuery,
  useGetAllTvGenresQuery,
  useGetTopRatedQuery,
  useGetSearchMoviesQuery,
	useGetSearchTvShowsQuery,
} = movieApi;
