import React from 'react';
import './Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props.food;

    const addedToCart = props.addedToCart
    return (
        <div className='food'>
            <img src={strCategoryThumb} alt="" />
            <div className='food-body'>
                <h3>{strCategory}</h3>
                <p>{strCategoryDescription.slice(1, 100)}</p>
            </div>
            <button onClick={() => addedToCart(props.food)}>Add to cart <span> <FontAwesomeIcon icon={faShoppingCart} /></span></button>
        </div>
    );
};

export default Food;