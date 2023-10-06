import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51NyENqAD4PGXATHs49xCy2uT4kes8aoKbWAcbot3q4o90U2zohDCBrdViFRMdor0WHb1X53Z4gGWkIJ7lD62LO9d00rd88nSmq"
    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        /> 
    )
}

export default StripeCheckoutButton;