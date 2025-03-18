
import './App.css'
import ProductCard from './components/ProductCard';
import Button from './components/Ui/Button';
import Model from './components/Ui/Model';
import { productList } from './data/data';
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


  return (
    <main className='container mx-auto'>
      <Button  onClick={modelOn} className="bg-indigo-600 hover:bg-indigo-800">Add</Button>
      <div className="gap-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Model isOpen={isOpen} close={close} title='ADD NEW PRODUCT'>
        <div className='flex items-center space-x-4'>
          <Button className="bg-indigo-600 hover:bg-indigo-800">Cancel</Button>
          <Button className="bg-gray-600 hover:bg-gray-800">Delete</Button>
        </div>
      </Model>
    </main>
  )
}

export default App
