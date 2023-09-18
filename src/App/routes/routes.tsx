import { RouteProps } from "react-router-dom";
import { Book } from "../../Pages/Book";
import { BookList } from "../../Pages/BookList";

export enum AppRoutes {
  Main = "main",
  Book = "book",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.Book]: "/book",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePaths.main,
    element: <BookList />,
  },
  [AppRoutes.Book]: {
    path: RoutePaths.book,
    element: <Book />,
  },
};
