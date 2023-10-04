import React from "react"
import {useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

import CartItem from "../cart-item/cart-item.component"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { toggleCartHidden } from "../../redux/cart/cart.reducer";


const CartDropdown = ()=>{
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(toggleCartHidden())
        navigateTo("/checkout");
    }
    let cartItems = useSelector(selectCartItems)
    

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length?

                    cartItems.map(cartItem => {
                        
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })
                    : <span className="empty-message">Your Cart is empty</span>
                }
                <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown;