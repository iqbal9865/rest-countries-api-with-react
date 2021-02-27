import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = cart.reduce((totalPopulation,cart) =>  totalPopulation + cart.population, 0);
    // for (let i = 0; i < cart.length; i++) {
    //     const population = cart[i].population;
    //     totalPopulation = totalPopulation + population;
    // }
    return (
        <div>
            <h4>This is {cart.length}</h4>
            <h4>Total Population {totalPopulation} </h4>  

        </div>
    );
};

export default Cart;    <h1>This is Cart</h1>