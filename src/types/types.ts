export enum Categories {
  All = "all",
  Art = "art",
  Biography = "biography",
  Computers = "computers",
  History = "history",
  Medical = "medical",
  Poetry = "poetry",
}

export enum Sorted {
  Relevance = "relevance",
  Newest = "newest",
}

export interface IResponse {
  totalItems: number;
  kind: string;
  items: IBook[];
}

export interface IOptions {
  key: string | number;
  label: string;
}

export interface IBookAccessInfo {
  accessViewStatus: string;
  country: string;
}

export interface IBookVolumeInfo {
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  title: string;
  authors?: string[];
  categories?: string[];
  description?: string;
}

export interface IBook {
  accessInfo: IBookAccessInfo;
  etag: string;
  id: string;
  kind: string;
  selfLink: string;
  volumeInfo: IBookVolumeInfo;
}

export interface GetBooksParams {
  search?: string;
  orderBy?: Sorted;
  offset?: number;
  categories?: Categories;
}
