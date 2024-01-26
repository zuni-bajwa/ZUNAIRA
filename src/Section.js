import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';
const Section = () => {
    const [cartItems, setCartItems] = useState([]);
  
    const handleAddToCart = (product) => {
      const existingItem = cartItems.find((item) => item.id === product.id);
  
      if (existingItem) {
        // If the item already exists, update its quantity
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
      }
    };
  
    const handleRemoveFromCart = (productId) => {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== productId)
      );
    };
  
    return (
      <div>
        <h1>React Shopping App</h1>
        <Product id={1} name="Product 1" price={20} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
        <Product id={2} name="Product 2" price={30} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
        <Product id={3} name="Product 3" price={25} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
        <Cart cartItems={cartItems} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    );
  };
export default Section;
