import { SetStateAction } from 'react';

export interface BasePaginationProps {
  pageQty: number;
  currentPage: number;
  setCurrentPage: (value: SetStateAction<number>) => void;
}
