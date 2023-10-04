import React from "react"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss"

const CheckoutPage = () =>{

    const { cartItems , totalPrice} = useSelector(
        createStructuredSelector({
          cartItems: selectCartItems,
          totalPrice: selectCartTotal,
        })
      );
 
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="hearder-block">
                    <span>Product</span>
                </div>
                <div className="hearder-block">
                    <span>Description</span>
                </div>
                <div className="hearder-block">
                    <span>Quantity</span>
                </div>
                <div className="hearder-block">
                    <span>Price</span>
                </div>
                <div className="hearder-block">
                    <span>Remove</span>
                </div>

            </div>

            {
                cartItems.map(cartItem =>{
                    return  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }

            <div className="total">
                <span>TOTAL: ${totalPrice}</span>
            </div>
        </div>
    )
}

export default CheckoutPage;