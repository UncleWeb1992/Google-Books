import { FC, useLayoutEffect } from "react";
import { Loader } from "Components/common/Loader";
import { Books as BooksUI } from "../../Components/ui/Books";
import { useAppDispatch, useAppSelector } from "hook/redux";
import { Button } from "Components/common/Button";
import { FiltersLayout } from "Components/Layouts/FiltersLauout";
import styles from "./BookList.module.scss";
import { MAX_RESULTS } from "constants/api";
import { useFiltersActions } from "store/Slieces/filtersSlice";
import { booksFetch } from "store/Slieces/bookSlice";
import { ErrorPage } from "Pages/Error";

const BookList: FC = () => {
  const dispatch = useAppDispatch();
  const booksState = useAppSelector((state) => state.book);
  const params = useAppSelector((state) => state.filters);
  const { setOffset } = useFiltersActions();

  const handleSubmit = (offset: number) =>
    dispatch(
      booksFetch({
        ...params,
        orderBy: params.sorted,
        offset,
      })
    );

  const loadMore = () => {
    const newOffset = params.offset + MAX_RESULTS;
    setOffset(newOffset);
    handleSubmit(newOffset);
  };

  if (booksState.error?.length > 0) {
    return <ErrorPage title={booksState.error} />;
  }

  return (
    <div data-testid="book-list">
      <FiltersLayout>
        <>
          <div className={styles.totalCount}>
            Found {booksState.totalCount} results
          </div>
          <BooksUI data={booksState.books} />

          {booksState.hasMore && (
            <Button
              onClick={loadMore}
              text="Load more"
              classess={styles.loadMore}
            />
          )}
          {booksState.loading && <Loader />}
        </>
      </FiltersLayout>
    </div>
  );
};

export default BookList;
