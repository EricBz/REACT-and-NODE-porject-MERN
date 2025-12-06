import { useState, useEffect } from "react"
import Card from "../components/Cards"

const RecibeProductos = () => {
    const [data, setData] = useState([]) /*Hay que poner un array vacio sino se trabara
    hasta que cargue el array con el json debe ser un array vacio, no nul ni ""*/ 

    useEffect(
        () => {
            fetch("/usuarios")
            .then(res => {
                return res.json()
            })
            .then(data => setData(data))
            .catch((err) => console.log(err))
        }, []
    )
   console.log(data)
   return(
       <div className="App p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our products</h1>
      
      {/* Contenedor Flexbox para mostrar las tarjetas una al lado de la otra */}
      <div className="flex flex-wrap justify-center">
        {data.map(producto => (
          // Usamos la prop 'data' para pasar todo el objeto al componente Card
          <Card key={producto.id} data={producto} />
        ))}
      </div>
    </div>
   )
}

export default RecibeProductos