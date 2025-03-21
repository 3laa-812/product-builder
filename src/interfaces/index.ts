import { TProductNames } from "../types";

export interface IProduct {
    id?: string;
    title: string;
    description: string;
    price: string;
    category: string;
    imageUrl: string;
    colors: string[];
  };

  export interface IFormInput{
    id: string,
    name: TProductNames,
    label: string,
    type: string
  }

export interface ICategory {
    id: string;
    name: string;
    imageUrl: string;
  };