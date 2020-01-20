import React from 'react';


import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({toggleCartHidden}) => (
    <div className='cart-dropdown' onClick={toggleCartHidden}>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;
