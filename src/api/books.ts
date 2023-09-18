import { GetBooksParams, IResponse } from "types/types";
import api from "./http";

export class Books {
  static getBooks = async ({
    search,
    orderBy,
    offset,
    categories,
  }: GetBooksParams) => {
    const q = `${search}+subject:${categories}`;
    const result = await api.get<IResponse>("", {
      params: {
        q,
        orderBy,
        startIndex: offset,
      },
    });

    return result.data;
  };
}
