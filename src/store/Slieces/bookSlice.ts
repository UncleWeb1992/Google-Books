import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Books } from "api/books";
import { RootState } from "store";
import { GetBooksParams, IBook } from "types/types";

const initialState = {
  loading: false,
  error: "",
  clear: false,
  books: [] as IBook[],
  hasMore: false,
  totalCount: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setClear: (state, action: PayloadAction<boolean>) => {
      state.clear = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(booksFetch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(booksFetch.fulfilled, (state, action) => {
      const { items, totalItems } = action.payload;
      state.loading = false;
      state.totalCount = totalItems;

      if (!items) {
        state.books = [];
        return;
      }

      if (state.clear) {
        state.books = items;
        state.clear = false;
      } else {
        state.books = [...state.books, ...items];
      }

      const isMore = totalItems > [...state.books, ...items]?.length;

      state.hasMore = isMore;
    });
    builder.addCase(booksFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const booksFetch = createAsyncThunk(
  "books/fetchBooks",
  async function (params: GetBooksParams) {
    const response = await Books.getBooks(params);
    return response;
  }
);

const { reducer: bookReducer } = bookSlice;
export const { actions: booksActions } = bookSlice;

export const getBookOfId = (id: string) => (state: RootState) =>
  state.book.books.find((book) => book.id === id);

export default bookReducer;
