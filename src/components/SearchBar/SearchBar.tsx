import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { SearchBarProps } from './SearchBar.props.ts';
import { SearchIcon } from 'assets/svg/SearchIcon.tsx';
import styles from './SearchBar.module.scss';

export function SearchBar({ className, value, onChange }: SearchBarProps) {
  return (
    <div className={classNames(styles['search-bar'], className || '')}>
      <SearchIcon className={styles['search-bar__icon']} />
      <input
        className={styles['search-bar__input']}
        placeholder="Search for movies or TV series"
        type="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
    </div>
  );
}
