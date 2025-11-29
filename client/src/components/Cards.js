// Card.jsx

const Card = ({ data }) => {
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

      {/* Descripción */}
      <p className="text-gray-700 text-base mb-4">
        {data.descripcion}
      </p>

      {/* Precio */}
      <div className="text-right font-bold text-2xl text-indigo-600">
        ${data.precio}
      </div>
        </div>
    </div>
  );
};

export default Card;
