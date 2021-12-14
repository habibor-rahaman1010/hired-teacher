import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const cart = props.cart;

    const name = [];
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        name.push(product.name)
        totalCost += product.salary;
    }
    console.log(totalCost)

    return (
        <div>
            <h2>Teachers Hired: {props.cart.length}</h2>
            <p>Teachers: {name.join(', ')}</p>
            <h3>Total Const: {totalCost}</h3>
        </div>
    );
};

export default Cart;