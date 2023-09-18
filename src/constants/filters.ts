import { Categories, Sorted } from "types/types";
import { randomId } from "utils/randomId/randomId";

export const categories = Object.values(Categories).map((cat) => ({
  name: cat,
  id: randomId(),
}));

export const sorted = Object.values(Sorted).map((sort) => ({
  name: sort,
  id: randomId(),
}));
