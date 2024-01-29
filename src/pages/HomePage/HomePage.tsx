import classNames from 'classnames';
import { SearchBar } from 'components/SearchBar';
import { MoviesList } from 'components/MoviesList';
import { Pagination } from 'components/Pagination';
import useHomePage from './useHomePage';
import styles from './HomePage.module.scss';

export default function HomePage() {
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
    return (
      <h1 className={classNames(styles.movies__title, 'heading-l')}>
        Posts not upload...
      </h1>
    );
  }

  if (moviesLoading || searchLoading) return <h1 className={classNames(styles.movies__title, 'heading-l')}>Loading...</h1>;

  return (
    <section className={styles.movies}>
      <SearchBar
        className={styles.movies__search}
        onChange={onChangeSearch}
        value={value}
      />
      <div className={styles.movies__head}>
        <h1 className={classNames(styles.movies__title, 'heading-l')}>
          Movies
        </h1>
        <Pagination
          pageQty={pageQty}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <MoviesList movies={posts} />
    </section>
  );
}
