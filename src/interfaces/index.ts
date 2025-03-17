export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    category: string;
    imgURL?: string | undefined;
    colors: string[];
  }