import React from "react";

import { 
        CartItemContainer,
        CartItemImage,
        CartItemDetails,
        CartItemName
       } from "./cart-item.styles";

const CartItem = ({item: { imageUrl, name, price, quantity }}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <CartItemDetails>
            <CartItemName>{name} </CartItemName>
            <span>{quantity} x ${price} </span>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;