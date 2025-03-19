
import './App.css'
import ProductCard from './components/ProductCard';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import Model from './components/Ui/Model';
import { formInputList, productList } from './data/data';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IProduct } from './interfaces';
import { productValidation } from './validation';

function App() {

  const defaultProductObj: IProduct = {
    title: '',
    description: '',
    category: '',
    colors: [],
    imageUrl: '',
    price: 0,
  }

  // * States
    const [ product , setProduct] = useState<IProduct>(defaultProductObj);
    const [isOpen, setIsOpen] = useState(false);
  
  // * Handlers
    const modelOn = () =>  setIsOpen(true);
    const close = () =>  setIsOpen(false);
    const onChangeHabdler = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setProduct({...product, [name]: value})
    }

    const onCancel = (): void => {
      console.log('canceled');
      setProduct(defaultProductObj);
      close();
    }
    const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const errors = productValidation({title: product.title, description: product.description, price: product.price , imageUrl: product.imageUrl});
      console.log(errors);
    }

  // * Renders
  const renderProductList = productList.map((product) => {
    return ( <ProductCard key={product.id} product={product}/> );
  })
  const renderFormInput = formInputList.map((input) => {
    return(
      <div className='flex flex-col' key={input.id}>
        <label className='text-white font-medium ' htmlFor={input.id}>{input.label}</label>
        <Input type='text' id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHabdler}/>
      </div>
    )
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
