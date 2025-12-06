 import RecibeProductos from "../pages/recibeUsuarios.js";
 import Card from "./Cards";
 

 const MostradorProductos = () => {
  
 return (
    <div className="App p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Listado de Productos</h1>
      
      {/* Contenedor Flexbox para mostrar las tarjetas una al lado de la otra */}
      <div className="flex flex-wrap justify-center">
        {RecibeProductos.map(producto => (
          // Usamos la prop 'data' para pasar todo el objeto al componente Card
          <Card key={producto.id} data={producto} />
        ))}
      </div>
    </div>
  )
}

export default MostradorProductos