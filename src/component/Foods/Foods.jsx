import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Foods.css';
import swal from 'sweetalert';
const Foods = () => {
    const [foods, setFoods] = useState([]);

    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, []);

    const addedToCart = (food) => {
        const getCart = carts.find(cart => cart.idCategory === food.idCategory);
        if (getCart) {
            swal({
                title: "Already exists !!!",
                icon: "warning",
            });
            return;
        }
        const newCart = [...carts, food];
        setCart(newCart);
    }

    return (
        <div className='foods-container'>
            <div className='food-container'>
                {
                    foods.map(food => <Food
                        key={food.idCategory}
                        food={food}
                        addedToCart={addedToCart}
                    ></Food>)
                }
            </div>

            <div>
                <div className='cart-container'>
                    <h3>Cart summary</h3>
                    <p>Total order: {carts.length}</p>
                    {
                        carts.map(cart => <Cart
                            cart={cart}
                            key={cart.idCategory}
                        ></Cart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Foods;