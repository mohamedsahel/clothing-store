import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import { 
    CheckoutItemContainer,
    ImageContainer,
    Image,
    NameSpan,
    QuantityContainer,
    ArrowDiv,
    ValueSpan,
    PriceSpan,
    RemoveButton
    }
    from "./checkout-item.styles";

const CheckoutItem = ({cartItem, removeItem, addItem, clearItemFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt="item"/>
            </ImageContainer>
            <NameSpan> {name} </NameSpan>
            <QuantityContainer>
                <ArrowDiv onClick={() => removeItem(cartItem)}>&#10094;</ArrowDiv>
                <ValueSpan>{quantity}</ValueSpan>
                <ArrowDiv onClick={() => addItem(cartItem)}>&#10095;</ArrowDiv>
            </QuantityContainer>
            <PriceSpan> {price} </PriceSpan>
            <RemoveButton onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatcherToProps = dispatcher => ({
    clearItemFromCart: cartItem => dispatcher(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatcher(addItem(cartItem)),
    removeItem: cartItem => dispatcher(removeItem(cartItem))
});

export default connect(null, mapDispatcherToProps)(CheckoutItem) ;