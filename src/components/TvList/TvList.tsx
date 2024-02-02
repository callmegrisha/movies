import classNames from 'classnames';
import { TvShow } from 'types/tvShow';
import { TvCard } from '../TvCard';
import { TvListProps } from './TvList.props.ts';
import styles from './TvList.module.scss';

export function TvList({ tvs }: TvListProps) {
  return (
    <>
      {tvs && tvs.length > 0 ? (
        <ul className={classNames(styles['tv-list'], 'list-reset')}>
          {tvs?.map((tv: TvShow) => (
            <li key={tv.id}>
              <TvCard {...tv} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="heading-l">Movies not found</h1>
      )}
    </>
  );
}
