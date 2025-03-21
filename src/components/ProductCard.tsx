import { categories } from "../data/data";
import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/Functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./Ui/Button";
interface IProps{
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  idx: number;
  setProductToEditIdx: (idx: number) => void;
  openEditModel: () => void;
}


const ProductCard = ({product , setProductToEdit , openEditModel , idx , setProductToEditIdx}:IProps) => {

  // ^ Renders


  const renderProductColors = product.colors.map((color) => {
    return(
      <CircleColor color={color} key={color}/>
    );
  })

  // ^ Handlers
  const onEdit = () => {
    setProductToEditIdx(idx);
    setProductToEdit(product);
    openEditModel();
  }

  return (
    <div className="border mx-auto max-w-sm md:max-w-lg md:mx-0 rounded-md p-3 flex flex-col m-4">
        <Image imgUrl={product.imageUrl} alt={"product"} className="rounded-md mb-2"/>
        <h3 className="font-bold text-2xl my-2">{product.title}</h3>
        <p className="text-gray-700">{textSlicer(product.description)}</p>
        <div className="flex items-center space-x-2 my-3">
          {renderProductColors}
        </div>
        <div className="flex items-center justify-between">
          <span>${product.price}</span>
          <Image imgUrl={categories.find((category) => category.name === product.category)?.imageUrl || product.imageUrl} className="w-12 h-12 rounded-full " alt="product"/>
        </div>
        <div className="flex items-center justify-between gap-2 my-2">
          <Button className="bg-indigo-700" width="w-full" onClick={onEdit}>Edit</Button>
          <Button className="bg-rose-800" >Delete</Button>
        </div>
    </div>
  )
}

export default ProductCard;