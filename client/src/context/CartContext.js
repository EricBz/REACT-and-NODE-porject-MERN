// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // El estado del carrito: un array de objetos { productId, quantity }
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === productId);
      
      if (existingItem) {
        // Si el producto ya está, actualiza la cantidad
        return prevItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es nuevo, añádelo al carrito
        return [...prevItems, { productId, quantity }];
      }
    });
  };

  // Puedes añadir funciones para removeFromCart, clearCart, etc. aquí

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
