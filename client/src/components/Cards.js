// Card.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Card = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Obtiene la función para añadir al carrito

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(data.id, quantity);
      alert(`Añadido ${quantity} de ${data.nombre} al carrito!`);
    }
  };


  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
      <div className="rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
        {/* Nombre (Titulo) */}
        <div className="font-bold text-xl mb-2 text-gray-800">
          {data.nombre}
        </div>

        {/* Tipo y Origen (Tags/Badges) */}
        <div className="mb-4">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2">
            {data.tipo}
          </span>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800">
            {data.origen}
          </span>
        </div>
        <div> <img src={data.image} alt='cofeesweet' className="w-44 h-auto shadow-lg" /></div>
        {/* Descripción */}
        <p className="text-gray-700 text-base mb-4">
          {data.descripcion}
        </p>

        {/* Precio */}
        <div className="text-right font-bold text-2xl text-indigo-600">
          ${data.precio}
        </div>
        
        
        <div>
          <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
        style={{ width: '50px', marginRight: '10px' }}
      />
      
      {/* Botón de Añadir al Carrito */}
      <button onClick={handleAddToCart}>
        Añadir al Carrito
      </button>
        </div>
        

      </div>
     
    </div>
  );
};

export default Card;
