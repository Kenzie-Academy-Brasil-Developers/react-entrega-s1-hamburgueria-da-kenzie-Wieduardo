import './style.css';

function Products({produto, handleClick}){

    return(
        <>
            <div className='cardProduto'>
                <div className='cardImg'>
                    <img src={produto.img} alt={produto.name}></img>
                </div>
                <div className='cardText'>
                    <span className='cardName'>{produto.name}</span>
                    <span className='cardCategory'>{produto.category}</span>
                    <span className='cardPrice'>R$ {produto.price}</span>
                    <button className='cardButton' onClick={()=>handleClick(produto.id)}>Adicionar</button>
                </div>
            </div>
        </>
    )
}

export default Products;