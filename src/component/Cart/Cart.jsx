import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { strCategory, strCategoryThumb } = props.cart;
    const deleteCart = props.deleteCart;
    return (
        <div className='cart'>
            <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
            <button onClick={() =>
                deleteCart(strCategory)}><FontAwesomeIcon icon={faDeleteLeft} /></button>
        </div>
    );
};

export default Cart;