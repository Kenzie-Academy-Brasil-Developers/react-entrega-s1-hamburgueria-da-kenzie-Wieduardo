import './style.css';

import { useState } from "react";

function Pesquisa({productList, setFilteredProducts}){

    const [pesquisa, setPesquisa] = useState('')

    function filtroPesquisa(input){

        if(input !== ''){
            setFilteredProducts(productList.filter((produto) => { 
               return produto.name.toLowerCase().includes(input) || produto.category.toLowerCase().includes(input);
            }))
        } else {
            setFilteredProducts([])
        };
    
    }

    return(
        <>
        <div className='inputContainer'>
          <input className='inputTexto' type="text" value={pesquisa} placeholder="Digitar Pesquisa"
          onChange={(event) => setPesquisa(event.target.value)}></input>
          <button className='inputButton' onClick={()=> filtroPesquisa(pesquisa.toLowerCase())}>Pesquisar</button>
        </div>
        </>
    )
}

export default Pesquisa;