import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceforStripe = price * 100;
    const publishableKey = 'pk_test_faHJGq006n1UBYzKKCaxMhJi';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceforStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment, please make sure you use the provided credit cart')
        })
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CROWN Clothing Lyd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceforStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;