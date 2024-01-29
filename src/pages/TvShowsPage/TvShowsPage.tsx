import classNames from 'classnames';
import { Pagination } from 'components/Pagination';
import { SearchBar } from 'components/SearchBar';
import { TvList } from 'components/TvList';
import useTvShowsPage from './useTvShowsPage';
import styles from 'pages/HomePage/HomePage.module.scss';

export default function TvShowsPage() {
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
    return (
      <h1 className={classNames(styles.movies__title, 'heading-l')}>
        Posts not upload...
      </h1>
    );
  }

  if (tvLoading || searchLoading) return <h1 className={classNames(styles.movies__title, 'heading-l')}>Loading...</h1>;

  return (
    <section className={styles.movies}>
      <SearchBar
        className={styles.movies__search}
        onChange={onChangeSearch}
        value={value}
      />
      <div className={styles.movies__head}>
        <h1 className={classNames(styles.movies__title, 'heading-l')}>
          TvShows
        </h1>
        <Pagination
          pageQty={pageQty}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <TvList tvs={posts} />
    </section>
  );
}
