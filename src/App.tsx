
import './App.css'
import ProductCard from './components/ProductCard';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import Model from './components/Ui/Model';
import { v4 as uuid } from "uuid";
import { colors, formInputList, productList } from './data/data';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IProduct } from './interfaces';
import { productValidation } from './validation';
import ErrorMsg from './components/ErrorMsg';
import CircleColor from './components/CircleColor';
import SelectMenu from './components/Ui/SelectMenu';

function App() {

  const defaultProductObj: IProduct = {
    title: '',
    description: '',
    category: '',
    colors: [],
    imageUrl: '',
    price: "",
  }

  // * States
    const [ product , setProduct] = useState<IProduct>(defaultProductObj);
    const [ products , setProducts] = useState<IProduct[]>(productList);
    const [isOpen, setIsOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState({title: "", description: "", price: "", imageUrl: ""});
    // ^ temp state
    const [tempColor, setTempColor] = useState<string[]>([]);
  
  // * Handlers
    const modelOn = () =>  setIsOpen(true);
    const close = () =>  setIsOpen(false);
    const onChangeHabdler = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setProduct({...product, [name]: value});
      setErrorMsg({...errorMsg, [name]: ""});
    }

    const onCancel = (): void => {
      console.log('canceled');
      setProduct(defaultProductObj);
      close();
    }

    /*
    const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const errors = productValidation({title: product.title, description: product.description, category: product.category , price: product.price , imageUrl: product.imageUrl});

      // ^ check if any property has a 
value of "" && check if all properties has a valid value of ""
      const hasErrorMsg = Object.values(errors).some(value => value == "") && Object.values(product).every(value => value == "");
      
      if(!hasErrorMsg) {

        setErrorMsg(errors);
        return;
      }
      
      setProducts((prev) => {
        return(
          [{...product, id: uuid(), colors: tempColor} , ...prev]
        )
      });
      setProduct(defaultProductObj);
      setTempColor([]);
      close();
    }
*/

const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const errors = productValidation({title: product.title, description: product.description, category: product.category , price: product.price , imageUrl: product.imageUrl});
  // Check if there are any validation errors
  const hasErrorMsg = Object.values(errors).some(value => value == "") && Object.values(product).every(value => value == "");

  if (hasErrorMsg) { // If there are errors, set them and stop submission
    setErrorMsg(errors);
    return;
  }

  setProducts(prev => [{...product, id: uuid(), colors: tempColor} , ...prev]);

  setProduct(defaultProductObj);
  setTempColor([]);
  close();
};

  // * Renders
  const renderProductList = products.map((product) => {
    return ( <ProductCard key={product.id} product={product}/> );
  })

  const renderFormInput = formInputList.map((input) => {
    return(
      <div className='flex flex-col' key={input.id}>
        <label className='text-gary-700 font-medium ' htmlFor={input.id}>{input.label}</label>
        <Input type='text' id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHabdler}/>
        <ErrorMsg msg={errorMsg[input.name]}/>
      </div>
    )
  })

  const renderProductColors = colors.map((color) => {
    return(
      <CircleColor color={color} key={color} onClick={() => {
        if(tempColor.includes(color)) {
          setTempColor(prev => prev.filter(prevColor => prevColor !== color));
          return;
        }
        setTempColor(prev => [...prev, color]);
      }}
      />
    );
  })



  return (
    <main className='container mx-auto'>
      <Button  onClick={modelOn} className="bg-indigo-600 hover:bg-indigo-800">Add</Button>
      <div className="gap-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Model isOpen={isOpen} close={close} title='ADD NEW PRODUCT'>
        <form className='space-y-4' onSubmit={submitHandler}>
          {renderFormInput}
          <div className="flex items-center space-x-2 my-3">{renderProductColors}</div>
          <div className="flex items-center flex-wrap space-x-2 my-3">{tempColor.map(color => (<span className='p-1.5 mb-1 text-white rounded-xl' style={{backgroundColor: color}} key={color}>{color}</span>))}</div>
          <SelectMenu />
          <div className='flex items-center space-x-4'>
            <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-600 hover:bg-gray-800" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Model>
    </main>
  )
}

export default App;