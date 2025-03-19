
import './App.css'
import ProductCard from './components/ProductCard';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import Model from './components/Ui/Model';
import { formInputList, productList } from './data/data';
import { useState } from 'react';

function App() {
  // * States
    const [isOpen, setIsOpen] = useState(false);
  
  // * Handlers
    function modelOn() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
  

  // * Renders
  const renderProductList = productList.map((product) => {
    return ( <ProductCard key={product.id} product={product}/> );
  })
  const renderFormInput = formInputList.map((input) => {
    return(
      <div className='flex flex-col'>
        <label className='text-white font-medium ' htmlFor={input.id}>{input.label}</label>
        <Input type='text' id={input.id} name={input.name}/>
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
        <form className='space-y-4'>
          {renderFormInput}
          <div className='flex items-center space-x-4'>
            <Button className="bg-indigo-600 hover:bg-indigo-800">Cancel</Button>
            <Button className="bg-gray-600 hover:bg-gray-800">Delete</Button>
          </div>
        </form>
      </Model>
    </main>
  )
}

export default App
