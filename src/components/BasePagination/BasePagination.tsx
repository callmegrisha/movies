import React from 'react';
import { Link as PaginationLink } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';

interface BasePaginationProps {
  pageQty: number;
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
}

export function BasePagination({
  pageQty,
  currentPage,
  setCurrentPage,
}: BasePaginationProps) {
  return (
    <>
      {!!pageQty && (
        <Pagination
          variant="outlined"
          color="secondary"
          showFirstButton
          showLastButton
          count={pageQty}
          page={currentPage}
          onChange={(_, num) => setCurrentPage(num)}
          renderItem={(item) => (
            <PaginationItem
              component={PaginationLink}
              to={`?page=${item.page}`}
              {...item}
            />
          )}
        />
      )}
    </>
  );
}
