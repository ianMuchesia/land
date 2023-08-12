export interface userAuth {
  name: string;
  userId: string;
  role: string;
}
export interface typeImage{
  url:string;
}

export interface typeProperties {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  area: number;
  mainImage:typeImage;
  images: typeImage[];
  location: {
    name:string;
    _id:string;
  }
}
export type PaginationState = {
  currentPage: number;
};

export type PaginationAction =
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "NEXT_PAGE" }
  | { type: "PREVIOUS_PAGE" };
