import './style.css';
import Products from "../Product";

function ProductList({productList, handleClick}){

    return(
        <>
        <div className="vitrine">
            {productList?.map((produto) => <Products produto={produto} handleClick={handleClick} key={produto.id}/>)}
        </div>
        </>
    )
}

export default ProductList;