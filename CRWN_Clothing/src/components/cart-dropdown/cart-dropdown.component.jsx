import React from "react"

import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import {useSelector } from "react-redux/es/hooks/useSelector"
import CartItem from "../cart-item/cart-item.component"
import { selectCartItems } from "../../redux/cart/cart.selectors"

const CartDropdown = ()=>{
    const cartItems = useSelector(selectCartItems)

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                        
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })
                }
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown;