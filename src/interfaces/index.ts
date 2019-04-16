import { ButtonHTMLAttributes } from "react";

export interface IDataObject {
  id: number;
  name: string;
}

export interface ITheme {
  mainColor: string;
  activeColor: string;
  secondaryColor: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export type TShow = {
  id: string;
  name: string;
  summary: string;
  image: Record<string, any>;
};

export type TGeneralResponse = {
  content: TShow[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  size: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
