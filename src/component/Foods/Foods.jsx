import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'
const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, [])
    return (
        <div className='foods-container'>
            <div className='food-container'>
                {
                    foods.map(food => <Food></Food>)
                }
            </div>

            <div className='cart-container'>
                <h1>food summary</h1>
            </div>
        </div>
    );
};

export default Foods;