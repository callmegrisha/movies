import { useEffect, useState } from 'react';
import {
  useGetAllTvShowsQuery,
	useGetSearchTvShowsQuery,
} from '../../services/movies';
import useSearch from '../../hooks/useSearch';
import { TvShow } from '../../types/tvShow';
export default function useTvShowsPage() {
  const { value, query, currentPage, onChangeSearch, setCurrentPage } =
    useSearch();
  const [posts, setPosts] = useState<TvShow[]>([]);
  const [pageQty, setPageQty] = useState<number>(0);
  const {
    data: tv,
    isError: tvError,
    isLoading: tvLoading,
  } = useGetAllTvShowsQuery(currentPage);
  const {
    data: search,
    isError: searchError,
    isLoading: searchLoading,
  } = useGetSearchTvShowsQuery([currentPage!, query]);

  useEffect(() => {
    const data = search?.results.length === 0 ? tv : search;

    if (data) {
      setPosts(data.results);
      setPageQty(data.total_pages);
    }
  }, [search, tv, currentPage, query]);

  return {
    value,
    onChangeSearch,
    setCurrentPage,
    currentPage,
    posts,
    pageQty,
    tvError,
    tvLoading,
    searchError,
    searchLoading,
  };
}
