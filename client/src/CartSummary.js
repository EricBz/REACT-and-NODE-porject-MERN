// src/components/CartSummary.js
import React from 'react';
import { useCart } from './context/CartContext';



const CartSummary = () => {
  const { cartItems } = useCart();

  const handleCheckout = async () => {
    // Aquí es donde envías los datos a tu backend de Node Express
    console.log("Enviando al backend:", cartItems);

    try {
      const response = await fetch('http://localhost:8080/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Incluye tokens de autenticación si los usas
        },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar el pago en el backend');
      }

      const result = await response.json();
      alert(`¡Compra exitosa! ID de transacción: ${result.orderId}`);
      // Llama a clearCart() aquí si lo implementas
    } catch (error) {
      console.error("Error durante el checkout:", error);
      alert("Hubo un error con tu compra.");
    }
  };

  if (cartItems.length === 0) {
    return <div className="flex justify-center bg-gray-100">El carrito está vacío.</div>;
  }

  return (
    <div className="flex justify-center bg-gray-100">
      <h2>Tu Carrito de Compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            Producto ID: {item.productId} {item.nombre} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartSummary;
