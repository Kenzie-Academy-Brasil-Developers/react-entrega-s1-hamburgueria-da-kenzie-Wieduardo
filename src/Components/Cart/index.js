import './style.css';
import CartProduct from "../CartProduct";

function Cart({currentSale, setCurrentSale}){
    return(
        <>
            <div className="cart">
                <div className="headerCart">
                    <h3>Carrinho de Compras</h3>
                </div>
                <ul className="listaCart">
                {currentSale.length >= 1 ? currentSale?.map((produto) => <CartProduct produto={produto} setCurrentSale={setCurrentSale} currentSale={currentSale} key={produto.id}/>) : <h3>Sua sacola está vazia</h3>}
                </ul>
            </div>
        </>
    )
}

export default Cart;