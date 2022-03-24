import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    let queantity = 0;
    for(const product of cart){
        queantity = queantity + product.queantity;
        total = total + product.price * product.queantity;
        shipping = shipping + product.shipping;
        
    }
    const tax = (total*0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className="cart">
            <h3>Order info.</h3>
            <p>Selected Item: {queantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;