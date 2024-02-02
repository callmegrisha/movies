import classNames from 'classnames';
import { Movie } from 'types';
import { MovieCard } from '../MovieCard';
import { MoviesListProps } from './MoviesList.props.ts';
import styles from './MoviesList.module.scss';

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <>
      {movies && movies.length > 0 ? (
        <ul className={classNames(styles['movies-list'], 'list-reset')}>
          {movies?.map((movie: Movie) => (
            <li key={movie.id}>
              <MovieCard {...movie} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="heading-l">Movies not found</h1>
      )}
    </>
  );
}
