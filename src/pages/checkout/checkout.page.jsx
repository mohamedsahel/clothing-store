import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotale } from "../../redux/cart/cart.selectors";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, cartTotale}) => (
    <div className="checkout-page">
        <div className='checkout-header' >
            <div className='checkout-block' >
                <span>Products</span>
            </div>
            <div className='checkout-block' >
                <span>Description</span>
            </div>
            <div className='checkout-block' >
                <span>Quantity</span>
            </div>
            <div className='checkout-block' >
                <span>Price</span>
            </div>
            <div className='checkout-block' >
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total">
            <span>TOTALE: ${cartTotale}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotale: selectCartTotale
})

export default connect(mapStateToProps)(CheckoutPage);