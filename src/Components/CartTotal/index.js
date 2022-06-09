import './style.css';

function CartTotal({currentSale, setCurrentSale}){

    function zeraCart(){
        setCurrentSale([])
    }

    return(
        <>
            <div className='totalContainer'>
                <div className='totalInfo'>
                    <span className='totalText'>Valor Total:</span>
                    <span className='totalValor'>R$ {currentSale.reduce((acumula, entrada) => {
                    acumula += entrada.price
                    return acumula;},0)}</span>
                </div>
                <button className='totalButton' onClick={()=> zeraCart()}>Remover todos</button>
            </div>
        </>
    )
}

export default CartTotal;