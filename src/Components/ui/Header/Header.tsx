import {
  FC,
  useCallback,
  KeyboardEvent,
  useState,
  useLayoutEffect,
} from "react";
import styles from "./Header.module.scss";
import BookImage from "../../../assets/img/book.jpg";
import { Container } from "Components/common/Container";
import { TextField } from "Components/common/TextField";
import { Filters } from "../Filters";
import { categories, sorted } from "constants/filters";
import { IOptions, Categories, Sorted, GetBooksParams } from "types/types";
import { useFiltersActions } from "store/Slieces/filtersSlice";
import { useAppDispatch, useAppSelector } from "hook/redux";
import { booksActions, booksFetch } from "store/Slieces/bookSlice";

const categoriesOptions: IOptions[] = categories.map((cat) => ({
  key: cat.id,
  label: cat.name,
}));

const sortedOptions: IOptions[] = sorted.map((sort) => ({
  key: sort.id,
  label: sort.name,
}));

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { setCategories, setSorted, setOffset, setSearch } =
    useFiltersActions();
  const params = useAppSelector((state) => state.filters);
  const [search, setSearched] = useState(params.search || "");

  const handleChangeOptions = useCallback(
    (option: IOptions, fieldName: "categories" | "sorted") => {
      let param = {};
      if (fieldName === "categories") {
        param = { categories: option.label };
        setCategories(option.label as Categories);
      } else {
        param = { orderBy: option.label };
        setSorted(option.label as Sorted);
      }

      reset();
      handleSubmit({ ...params, ...param, search });
    },
    [params, search]
  );

  const reset = useCallback(() => {
    dispatch(setOffset(0));
    dispatch(booksActions.setClear(true));
  }, []);

  const handleChange = useCallback((val: string) => {
    setSearched(val.trim());
  }, []);

  const handleSubmit = useCallback(
    (args?: GetBooksParams) => {
      reset();
      dispatch(booksFetch({ ...args, search }));
      setSearch(search);
    },
    [search]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        reset();
        handleSubmit({ ...params, search });
      }
    },
    [params, search]
  );

  useLayoutEffect(() => {
    handleSubmit({ ...params, search });
  }, []);

  return (
    <header
      style={{ backgroundImage: `url(${BookImage})` }}
      className={styles.header}
    >
      <Container>
        <h1 className={styles.title}>Search for books</h1>

        <TextField
          onKeyDown={onKeyDown}
          handleSubmit={handleSubmit.bind(null, { ...params, search })}
          type="search"
          handleChange={handleChange}
          value={search}
        />

        <Filters
          categoriesOptions={categoriesOptions}
          filterCategories={params.categories}
          filterSorted={params.sorted}
          onChnage={handleChangeOptions}
          sortedOptions={sortedOptions}
        />
      </Container>
    </header>
  );
};

export default Header;
