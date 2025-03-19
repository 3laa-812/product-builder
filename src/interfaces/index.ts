export interface IProduct {
    id?: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imgURL: string;
    colors: string[];
  };

  export interface IFormInput{
    id: string,
    name: string,
    label: string,
    type: string
  }