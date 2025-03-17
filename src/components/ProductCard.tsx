import { IProduct } from "../interfaces";
import { texrSlicer } from "../utils/Functions";
import Image from "./Image";
import Button from "./Ui/Button";
interface IProps{
  product: IProduct,
}


const ProductCard = ({product}:IProps) => {
  return (
    <div className="border m-x-auto max-w-sm md:max-w-lg md:mx-0 rounded-md p-3 flex flex-col m-4">
        <img  alt="" />
        <Image imgUrl={product.imgURL} alt={"product"} className="rounded-md mb-2"/>
        <h3 className="font-bold text-2xl my-2">{product.title}</h3>
        <p className="text-gray-700">{texrSlicer(product.description)}</p>
        <div className="flex items-center space-x-2 my-3">
          <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"/>
          <span className="w-5 h-5 bg-gray-500 rounded-full cursor-pointer"/>
          <span className="w-5 h-5 bg-green-800 rounded-full cursor-pointer"/>
        </div>
        <div className="flex items-center justify-between">
          <span>${product.price}</span>
          <Image imgUrl={product.imgURL} className="w-12 h-12 rounded-full " alt="product"/>
        </div>
        <div className="flex items-center justify-between gap-2 my-2">
          <Button className="bg-cyan-700" width="w-full">Edit</Button>
          <Button className="bg-rose-800" >Delete</Button>
        </div>
    </div>
  )
}

export default ProductCard;