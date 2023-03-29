import React from 'react';
import './Food.css'

const Food = (props) => {
    console.log(props.food)

    const { strCategory, strCategoryThumb } = props.food
    return (
        <div className='food'>
            <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
        </div>
    );
};

export default Food;