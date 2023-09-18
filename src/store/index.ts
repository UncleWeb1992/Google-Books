import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./Slieces/bookSlice";
import filterReducer from "./Slieces/filtersSlice";

const rootReducer = combineReducers({
  book: bookReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
