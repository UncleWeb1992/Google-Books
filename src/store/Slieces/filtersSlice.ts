import {
  PayloadAction,
  bindActionCreators,
  createSlice,
} from "@reduxjs/toolkit";
import { useAppDispatch } from "hook/redux";
import { Categories, Sorted } from "types/types";

const initialState = {
  categories: Categories.All,
  sorted: Sorted.Relevance,
  offset: 0,
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Categories>) => {
      state.categories = action.payload;
    },
    setSorted: (state, action: PayloadAction<Sorted>) => {
      state.sorted = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

const { reducer: filterReducer } = filtersSlice;
export const { actions: filterActions } = filtersSlice;

export const useFiltersActions = () => {
  const { setCategories, setOffset, setSorted, setSearch } = filterActions;
  const dispatch = useAppDispatch();

  return bindActionCreators(
    { setCategories, setOffset, setSorted, setSearch },
    dispatch
  );
};

export default filterReducer;
