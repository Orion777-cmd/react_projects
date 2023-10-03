import React from "react"
import shopLogo from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"

import {useDispatch} from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.reducer"

const CartIcon = () =>{
    const dispatch = useDispatch();
    
    return (
        <div className="cart-icon" onClick={()=> dispatch(toggleCartHidden())}>
            <img className="shopping-icon" src={`${shopLogo}`} alt="shopping cart icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;