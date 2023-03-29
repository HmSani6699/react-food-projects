import React from 'react';
import './Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    console.log(props.food)

    const { strCategory, strCategoryThumb, strCategoryDescription } = props.food
    return (
        <div className='food'>
            <img src={strCategoryThumb} alt="" />
            <div className='food-body'>
                <h3>{strCategory}</h3>
                <p>{strCategoryDescription.slice(1, 100)}</p>
            </div>
            <button >Add to cart <span> <FontAwesomeIcon icon={faShoppingCart} /></span></button>

        </div>
    );
};

export default Food;