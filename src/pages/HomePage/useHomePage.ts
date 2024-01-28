import { useEffect, useState } from 'react';
import { useGetAllMoviesQuery, useGetSearchMoviesQuery } from 'services/movies';
import { Movie } from 'types';
import useSearch from 'hooks/useSearch';

export default function useHomePage() {
  const { value, query, currentPage, onChangeSearch, setCurrentPage } =
    useSearch();
  const [posts, setPosts] = useState<Movie[]>([]);
  const [pageQty, setPageQty] = useState<number>(0);
  const {
    data: movies,
    isError: moviesError,
    isLoading: moviesLoading,
  } = useGetAllMoviesQuery(currentPage);
  const {
    data: search,
    isError: searchError,
    isLoading: searchLoading,
  } = useGetSearchMoviesQuery([currentPage!, query]);

  useEffect(() => {
    const data = search?.results.length === 0 ? movies : search;

    if (data) {
      setPosts(data.results);
      setPageQty(data.total_pages);
    }
  }, [search, movies, currentPage, query]);

  return {
    value,
    onChangeSearch,
    setCurrentPage,
    currentPage,
    posts,
    pageQty,
    moviesError,
    moviesLoading,
    searchError,
    searchLoading,
  };
}
