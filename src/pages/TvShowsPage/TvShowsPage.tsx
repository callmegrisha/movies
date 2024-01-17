import { Stack, Typography } from "@mui/material";
import { TvShowsSkeleton } from "./TvShowsSkeleton";
import useTvShowsPage from "./useTvShowsPage";
import { BasePagination } from "../../components/BasePagination";
import { SearchBar } from "../../components/SearchBar";
import { TvList } from "../../components/TvList";

export function TvShowsPage() {
	const {
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
  } = useTvShowsPage();
  if (tvError || searchError) {
    return <Typography variant="headingL">Posts not upload...</Typography>;
  }

  if (tvLoading || searchLoading) return <TvShowsSkeleton />;
  return (
    <>
      <SearchBar onChange={onChangeSearch} value={value} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={4}
      >
        <Typography variant="headingL">TvShows</Typography>
        <BasePagination
          pageQty={pageQty}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Stack>
      <TvList tvs={posts} />
    </>
	);
}
