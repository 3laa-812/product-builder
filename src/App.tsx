
import './App.css'
import ProductCard from './components/ProductCard';
import { productList } from './data/data';

function App() {
  // * Renders
  const renderProductList = productList.map((product) => {
    return ( <ProductCard key={product.id} product={product}/> );
  })


  return (
    <main className='container mx-auto'>
      <div className="gap-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
    </main>
  )
}

export default App
