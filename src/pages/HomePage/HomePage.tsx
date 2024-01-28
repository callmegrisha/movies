import { Stack, Typography } from '@mui/material';
import { SearchBar } from 'components/SearchBar';
import { MoviesList } from 'components/MoviesList';
import { BasePagination } from 'components/BasePagination';
import { HomePageSkeleton } from './HomePageSkeleton';
import useHomePage from './useHomePage';

export function HomePage() {
  const {
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
  } = useHomePage();

  if (moviesError || searchError) {
    return <Typography variant="headingL">Posts not upload...</Typography>;
  }

  if (moviesLoading || searchLoading) return <HomePageSkeleton />;

  return (
    <>
      <SearchBar onChange={onChangeSearch} value={value} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={4}
      >
        <Typography variant="headingL">Movies</Typography>
        <BasePagination
          pageQty={pageQty}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Stack>
      <MoviesList movies={posts} />
    </>
  );
}
