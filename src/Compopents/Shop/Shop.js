import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shopping">
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    handleAddToCart = {handleAddToCart}
                    product = {product}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h3>Order info.</h3>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;