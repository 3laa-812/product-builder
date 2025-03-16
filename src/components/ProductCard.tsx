import Image from "./Image";
import Button from "./Ui/Button";
interface IProps{

}


const ProductCard = ({}:IProps) => {
  return (
    <div className="border rounded-md p-3 flex flex-col m-4">
        <img  alt="" />
        <Image imgUrl={"https://europeanautosource.com/cdn/shop/files/DSC08920_1200x1200.jpg?v=1723246215"} alt={"product"} className="rounded-md mb-2"/>
        <h3>porche 992.2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Exercitationem accusamus earum ad dolorum aliquid quas blanditiis vero, 
          tempora culpa cupiditate 
          quis itaque repellendus ratione tenetur ab quos corrupti ipsa facere!
        </p>
        <div className="flex items-center space-x-2 my-3">
          <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"/>
          <span className="w-5 h-5 bg-gray-500 rounded-full cursor-pointer"/>
          <span className="w-5 h-5 bg-green-800 rounded-full cursor-pointer"/>
        </div>
        <div className="flex items-center justify-between">
          <span>$1000.0000</span>
          <Image imgUrl="https://europeanautosource.com/cdn/shop/files/DSC08920_1200x1200.jpg?v=1723246215" className="w-12 h-12 rounded-full " alt="product"/>
        </div>
        <div className="flex items-center justify-between gap-2 my-2">
          <Button className="bg-cyan-700" > Edit </Button>
          <Button className="bg-rose-800" > Delete </Button>
        </div>
    </div>
  )
}

export default ProductCard;