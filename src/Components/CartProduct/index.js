import './style.css';

function CartProduct({produto, setCurrentSale, currentSale}){

    function removeCarrinho(idRemover){

        setCurrentSale(currentSale.filter((item) =>  item.id !== idRemover ));
        
    }

    return(
        <>
        <li className='cartItem'>
            <div className='cartImg'>
                <img src={produto.img} alt={produto.name}></img>
            </div>
            <div className='cartInfo'>
                <h3 className='cartName'>{produto.name.slice(0,10)}</h3>
                <span className='cartPrice'>R$ {produto.price}</span>
                <span className='cartCategory'>{produto.category}</span>
            </div>
                <button className='cartButton' onClick={()=>removeCarrinho(produto.id)}>Remover</button>
        </li>
        </>
    )
}

export default CartProduct;