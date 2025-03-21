
import './App.css'
import ProductCard from './components/ProductCard';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import Model from './components/Ui/Model';
import { v4 as uuid } from "uuid";
import { categories, colors, formInputList, productList } from './data/data';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IProduct } from './interfaces';
import { productValidation } from './validation';
import ErrorMsg from './components/ErrorMsg';
import CircleColor from './components/CircleColor';
import SelectMenu from './components/Ui/SelectMenu';
import { TProductNames } from './types';

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
    const [ productToEdit, setProductToEdit ] = useState<IProduct>(defaultProductObj);
    const [ productToEditIdx, setProductToEditIdx ] = useState<number>(0);
    const [ isOpen, setIsOpen] = useState(false);
    const [ isOpenEditModel, setIsOpenEditModel] = useState(false);
    const [ errorMsg, setErrorMsg] = useState({title: "", description: "", price: "", imageUrl: ""});
    const [ selectedCategory, setSelectedCategory] = useState(categories[0]);

    // ^ temp state
    const [tempColor, setTempColor] = useState<string[]>([]);
  
  // * Handlers
    const modelOn = () =>  setIsOpen(true);
    const close = () =>  setIsOpen(false);
    const closeEditModel = () => setIsOpenEditModel(false);
    const openEditModel = () => setIsOpenEditModel(true);
    
    const onChangeHabdler = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setProduct({...product, [name]: value});
      setErrorMsg({...errorMsg, [name]: ""});
    }

    const onChangeEditHabdler = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setProductToEdit({...productToEdit, [name]: value});
      setErrorMsg({...errorMsg, [name]: ""});
    }

    const onCancel = (): void => {
      setProduct(defaultProductObj);
      close();
    }

    const onCancelEdit = (): void => {
      setProductToEdit(defaultProductObj);
      closeEditModel();
    }

const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const errors = productValidation({
    title: product.title, 
    description: 
    product.description, 
    category: product.category,
    price: product.price , 
    imageUrl: product.imageUrl
  });
  // Check if there are any validation errors
  const hasErrorMsg = Object.values(errors).some(value => value == "");

  if (hasErrorMsg) { // If there are errors, set them and stop submission
    setErrorMsg(errors);
    return;
  }

  setProducts(prev => [{...product, 
    id: uuid(), 
    colors: tempColor , 
    category: selectedCategory.name} ,
    ...prev]);
  setProduct(defaultProductObj);
  setTempColor([]);
  close();
};

const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const errors = productValidation({
    title: productToEdit.title,
    description: productToEdit.description,
    category: productToEdit.category ,
    price: productToEdit.price ,
    imageUrl: productToEdit.imageUrl});
  // Check if there are any validation errors
  const hasErrorMsg = Object.values(errors).some(value => value !== "");
    if (hasErrorMsg) { // If there are errors, set them and stop submission
    setErrorMsg(errors);
    return;
  }

  const updatedProducts = [...products];
  updatedProducts[productToEditIdx] = {...productToEdit , colors: tempColor.concat(productToEdit.colors)};
  setProducts(updatedProducts);
  setProductToEdit(defaultProductObj);
  setTempColor([]);
  closeEditModel();
};

  // * Renders
  const renderProductList = products.map((product, idx) => {
    return ( 
      <>
        <ProductCard 
          key={product.id}
          product={product} 
          setProductToEdit={setProductToEdit} 
          openEditModel={openEditModel} 
          setProductToEditIdx={setProductToEditIdx}
          idx={idx}
        />
      </>
    );
  })

  const renderProductEditWithErrorMsg = (id: string , name: TProductNames, label: string) => {
    return(
      <div className='flex flex-col'>
        <label className='text-gary-700 font-medium ' htmlFor={id}>{label}</label>
        <Input type='text' id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHabdler}/>
        <ErrorMsg msg={errorMsg[name]}/>
      </div>
    )
  }

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
      <CircleColor
      color={color} 
      key={color} 
      
      onClick={() => {
        if(tempColor.includes(color)) {
          setTempColor(prev => prev.filter(prevColor => prevColor !== color));
          return;
        }

        if(productToEdit.colors.includes(color)) {
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
      // * Add model
      <Model isOpen={isOpen} close={close} title='ADD NEW PRODUCT'>
        <form className='space-y-4' onSubmit={submitHandler}>
          {renderFormInput}
          <div className="flex items-center space-x-2 my-3">{renderProductColors}</div>
          <div className="flex items-center flex-wrap space-x-2 mb-3">{tempColor.map(color => (<span className='p-1.5 mb-1 text-white rounded-xl' style={{backgroundColor: color}} key={color}>{color}</span>))}</div>
          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className='flex items-center space-x-4'>
            <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-600 hover:bg-gray-800" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Model>
      // * Edit model
      <Model isOpen={isOpenEditModel} close={closeEditModel} title='EDIT THIS PRODUCT'>
        <form className='space-y-4' onSubmit={submitEditHandler}>
          
            {renderProductEditWithErrorMsg('title', 'title', 'Product Title')}
            {renderProductEditWithErrorMsg('description', 'description', 'Product Description')}
            {renderProductEditWithErrorMsg('imageUrl', 'imageUrl', 'Product Image Url')}
            {renderProductEditWithErrorMsg('price', 'price', 'Product Price')}

          <div className="flex items-center space-x-2 my-3">{renderProductColors}</div>
          <div className="flex items-center flex-wrap space-x-2 mb-3">
            {tempColor.concat(productToEdit.colors).map(color => (<span className='p-1.5 mb-1 text-white rounded-xl' 
            style={{backgroundColor: color}} 
            key={color}
            >
              {color}
            </span>
          ))}
          </div>
          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className='flex items-center space-x-4'>
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-600 hover:bg-gray-800" onClick={onCancelEdit}>Cancel</Button>
          </div>
        </form>
      </Model>

    </main>
  )
}

export default App;