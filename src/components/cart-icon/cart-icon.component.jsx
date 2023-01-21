import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import './cart-icon.styles.scss';
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon =()=>{
    const {isCartOpen,setIsCartOpen} =useContext(CartContext);
    const toogleIsCartOpen =() =>setIsCartOpen(!isCartOpen);
    return(
<div className="cart-icon-container" onClick={toogleIsCartOpen}>
<ShoppingIcon className="shoping-icon"/>
<span className="item-count">0</span>

</div>

    )
}
export default CartIcon;