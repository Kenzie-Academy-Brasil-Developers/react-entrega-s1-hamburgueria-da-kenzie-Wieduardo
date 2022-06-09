import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from './Components/ProductsList';
import Cart from './Components/Cart';
import CartTotal from './Components/CartTotal';
import Pesquisa from './Components/Pesquisa';

function App() {

  const [productList, setProductList]= useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response) => response.json())
    .then((response) => setProductList(response))
    .catch((err) => console.log(err))
  }, [])

  function handleClick(idProduto){
    if(currentSale.find((produto) => produto.id === idProduto) !== undefined){

    } else{
      const adiciona= productList.find((produto) => produto.id === idProduto)
      setCurrentSale([...currentSale, adiciona])
    }
  }
  

  return (
    <>
      <header className='header'>
          <h1 className='h1'>Burguer <span className='h1Span'>Kenzie</span></h1>
          <Pesquisa productList={productList} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}></Pesquisa>
      </header>
      <main className='main'>
        {filteredProducts.length >= 1 ? <ProductList productList={filteredProducts} handleClick={handleClick}></ProductList> : <ProductList productList={productList} handleClick={handleClick}></ProductList>}
        <div className='cartmain'>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}></Cart>
          {currentSale.length >=1 && <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale}></CartTotal>}
        </div>
      </main>
    </>
  );
}

export default App;
