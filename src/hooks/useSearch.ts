import React, { ChangeEvent, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import useInput from './useInput';

interface UseSearchResult {
  value: string;
  query: string;
  currentPage: number;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function useSearch(): UseSearchResult {
  const { value, onChange } = useInput('');
  const [query, setQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const updateQuery = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      setCurrentPage(1);
    }, 1000),
    []
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    updateQuery(e);
  };

  return { value, query, currentPage, onChangeSearch, setCurrentPage };
}
