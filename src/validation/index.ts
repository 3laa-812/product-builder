// ** productObj == ErrorsObj ( TITLE, DESCRIPTION, PRICE, IMAGE )

export const productValidation = ( product:{ title: string; description: string; price: string; category: string; imageUrl: string;}) => {
  // ^ Returns an object

  const errors: { title: string; description: string; price: string; imageUrl: string;} = {
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  };

  const validateUrl = /^(ftp|http|https):\/\/[^"]+$/.test(product.imageUrl);

  if(!product.title.trim() || product.title.length < 10 || product.title.length > 80) errors.title = "Product title must be between 10 and 80 characters";
  if(!product.description.trim() || product.description.length < 10 || product.description.length > 900) errors.description = "Product description must be between 10 and 900 characters";
  if(!product.price.trim() || isNaN(Number(product.price))) errors.price = "Valid Price is required";
  if(!product.imageUrl.trim() || !validateUrl) errors.imageUrl = "Valid Image URL is required";

  return errors;
}