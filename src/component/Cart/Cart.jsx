import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { strCategory, strCategoryThumb } = props.cart;
    return (
        <div className='cart'>
            <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
        </div>
    );
};

export default Cart;