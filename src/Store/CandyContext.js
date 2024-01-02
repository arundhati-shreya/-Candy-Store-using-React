// CandyContext.js
import React, { createContext, useContext, useState } from 'react';

const CandyContext = createContext();

export const CandyProvider = ({ children }) => {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddProduct = (product) => {
    setCandies([...candies, product]);
  };

  const handleBuy = (index, quantity) => {
    const selectedCandy = candies[index];
    const existingCartItemIndex = cart.findIndex(
      (item) => item.name === selectedCandy.name
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...selectedCandy, quantity }]);
    }

    console.log(`Bought ${quantity} of ${selectedCandy.name}`);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  return (
    <CandyContext.Provider
      value={{
        candies,
        cart,
        showCart,
        handleAddProduct,
        handleBuy,
        handleIncrement,
        handleDecrement,
        setShowCart,
      }}
    >
      {children}
    </CandyContext.Provider>
  );
};

export const useCandyContext = () => useContext(CandyContext);
