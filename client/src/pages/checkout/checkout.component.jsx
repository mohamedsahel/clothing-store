import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotale } from "../../redux/cart/cart.selectors";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { 
        CheckoutContainer,
        CheckoutHeader,
        CheckoutHeaderBlock,
        TotaleDiv,
        TestWarning
        }
        from "./checkout.styles";

const CheckoutPage = ({cartItems, cartTotale}) => (
    <CheckoutContainer>
        <CheckoutHeader>
            <CheckoutHeaderBlock>
                <span>Products</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <TotaleDiv>TOTALE: ${cartTotale}</TotaleDiv>
        <TestWarning>
             *Please use the following test credit cart for payments*
             <br/>
             4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </TestWarning>
        <StripeCheckoutButton price={cartTotale} />
    </CheckoutContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotale: selectCartTotale
})

export default connect(mapStateToProps)(CheckoutPage);