import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Movie } from 'types';
import { useGetAllMovieGenresQuery } from 'services/movies';
import { createGenresCollection } from 'utils/createGenresCollection';
import { getFullYearFromString } from 'utils/getFullYearFromString';
import { BookmarkIcon } from 'assets/svg/BookmarkIcon.tsx';
import styles from './MovieCard.module.scss';

export function MovieCard({
  id,
  backdrop_path,
  release_date,
  genre_ids,
  title,
}: Movie) {
  const { data: { genres } = {} } = useGetAllMovieGenresQuery(null);
  const genresCollection = createGenresCollection(genres);

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img
          src={'https://image.tmdb.org/t/p/w500/' + backdrop_path}
          alt={title}
          loading="lazy"
        />
        <button className={styles.card__bookmark} type="button">
          <BookmarkIcon />
        </button>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__details}>
          <span className={classNames(styles.card__year, 'body-s')}>
            {getFullYearFromString(release_date)}
          </span>
          <ul className={classNames(styles.card__genres, 'list-reset')}>
            {genre_ids.map((genreId) => (
              <li
                className={classNames(styles.card__genre, 'body-s')}
                key={genreId}
              >
                {genresCollection.get(genreId)}
              </li>
            ))}
          </ul>
        </div>
        <Link
          className={classNames(styles.card__title, 'heading-xs')}
          to={`/${id}`}
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
