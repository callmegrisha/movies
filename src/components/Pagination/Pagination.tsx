import { Button } from 'components/Button';
import { BasePaginationProps } from './Pagination.props.ts';
import styles from './Pagination.module.scss';

export function Pagination({
  pageQty,
  currentPage,
  setCurrentPage,
}: BasePaginationProps) {
  return (
    <>
      {!!pageQty && (
        <div className={styles.pagination}>
          <Button onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
          <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
        </div>
      )}
    </>
  );
}
