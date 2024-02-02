import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { TvShow } from 'types/tvShow';
import { useGetAllTvGenresQuery } from 'services/movies';
import { createGenresCollection } from 'utils/createGenresCollection';
import { getFullYearFromString } from 'utils/getFullYearFromString';
import { BookmarkIcon } from 'assets/svg/BookmarkIcon.tsx';
import placeholder from 'assets/img/placeholder.png';
import styles from './TvCard.module.scss';

export function TvCard({
  id,
  backdrop_path,
  first_air_date,
  genre_ids,
  name,
}: TvShow) {
  const { data: { genres } = {} } = useGetAllTvGenresQuery(null);
  const genresCollection = createGenresCollection(genres);

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img
          src={
            backdrop_path
              ? 'https://image.tmdb.org/t/p/w500/' + backdrop_path
              : placeholder
          }
          alt={name}
          loading="lazy"
        />
        <button className={styles.card__bookmark} type="button">
          <BookmarkIcon />
        </button>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__details}>
          <span className={classNames(styles.card__year, 'body-s')}>
            {getFullYearFromString(first_air_date)}
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
          {name}
        </Link>
      </div>
    </div>
  );
}
