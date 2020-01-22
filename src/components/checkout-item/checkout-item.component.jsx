import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeItem, addItem, clearItemFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className="checkout-item" >
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price"> {price} </span>
            <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatcherToProps = dispatcher => ({
    clearItemFromCart: cartItem => dispatcher(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatcher(addItem(cartItem)),
    removeItem: cartItem => dispatcher(removeItem(cartItem))
});

export default connect(null, mapDispatcherToProps)(CheckoutItem) ;