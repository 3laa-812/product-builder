export interface IProduct {
    id?: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    colors: string[];
  };

  export interface IFormInput{
    id: string,
    name: 'title' | 'description' | 'imageUrl' | 'price',
    label: string,
    type: string
  }