import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces/index";

export const productList: IProduct[] = [
    {
      "id": uuid(),
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": "9.99", 
      "imageUrl":"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      "colors" : ["#FF0000", "#00FF00", "#A006FF"],

    },
    {
      "id": uuid(),
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": "19.99",
      "imageUrl":"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      "colors" : ["#FF0000", "#00FF00", "#A006FF"],
    },
    {
      "id": uuid(),
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": "14.99",
      "imageUrl":"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      "colors" : ["#FF0000", "#00FF00", "#A006FF"]
    },
    {
      "id": uuid(),
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": "12.99",
      "imageUrl":"https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      "colors" : ["#FF0000", "#00FF00", "#A006FF"]
    },
    {
      "id": uuid(),
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": "8.99",
      "imageUrl":"https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
      "colors" : ["#FF0000", "#00FF00", "#A006FF"]
    },
    {
      "id": uuid(),
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "price": "49.99",
      "imageUrl":"https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
      "colors" : ["#FF0000", "#00FF00", "#A006FF"]
    },
  ];

  export const formInputList: IFormInput[] = [
    {
      id: "title",
      name: "title",
      label: "Product Title",
      type: "text",
    },
    {
      id: "desription",
      name: "description",
      label: "Product desription",
      type: "text",
    },
    {
      id: "image",
      name: "imageUrl",
      label: "Product Image Url",
      type: "text",
    },
    {
      id: "price",
      name: "price",
      label: "Product Price",
      type: "text",
    },
  ]

  export const colors = [
    "#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032", "#FF0000", "#00FF00", "#A006FF",
  ]

  export const categories: ICategory[] = [
    {
      id: uuid(),
      name: "Fragrances",
      imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      id: uuid(),
      name: "Furniture",
      imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
      id: uuid(),
      name: "Groceries",
      imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
      id: uuid(),
      name: "Home Decoration",
      imageUrl: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
    },
    {
      id: uuid(),
      name: "Kitchen Accessories",
      imageUrl: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
    },
    {
      id: uuid(),
      name: "Laptops",
      imageUrl: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png"
    },
    {
      id: uuid(),
      name: "Mens Shirts",
      imageUrl: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
    },
    {
      id: uuid(),
      name: "Mens Shoes",
      imageUrl: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
    },
  ]