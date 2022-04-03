import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStroedCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stroedCart = getStroedCart();
    const savedCart = [];
    for (const id in stroedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const queantity = stroedCart[id];
        addedProduct.queantity = queantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product);
    let newCart = [];
    const exist = cart.find((productOne) => productOne.id === product.id);
    if (!exist) {
      product.queantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((productOne) => productOne.id !== product.id);
      exist.queantity = exist.queantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shopping">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
