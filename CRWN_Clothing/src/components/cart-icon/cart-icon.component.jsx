import React from "react"
import shopLogo from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"

import {useDispatch, useSelector} from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.reducer"
import { selectCartItemsCount, selectCartItems} from "../../redux/cart/cart.selectors"

const CartIcon = () =>{
    const dispatch = useDispatch();
    // const cartItems = useSelector(selectCartItems);
    const itemCount = useSelector(selectCartItemsCount)

    return (
        <div className="cart-icon" onClick={()=> dispatch(toggleCartHidden())}>
            <img className="shopping-icon" src={`${shopLogo}`} alt="shopping cart icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

export default CartIcon;

