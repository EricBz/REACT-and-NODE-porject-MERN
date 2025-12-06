import { useState } from "react"


const Contact = () => {
  const [texto, settexto] = useState("")
  const [name, setname] = useState("")
  const [mail, setmail] = useState("")
  const [textoEnviado, settextoEnviado] = useState("")  // Esto es para que aparezca abajo mensaje

  //Esta funcion envia el texto a la consola.
  const handleSubmit = (e) => {
    e.preventDefault();          // evita que la página recargue
    console.log(texto); // muestra lo que escribiste
    settextoEnviado(texto)
    settexto("")         //Para limpiar el texto del input 
  };
  //El boton del form dispara el evento onsubmit, este contiene la funcion que envia a la consola
  return (
    <> {/*Agregado luego de que apareza el texto abajo porque ahora tiene mas de 1 elemento*/}
      <div className="flex justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md mt-10 mb-10">
          <form onSubmit={handleSubmit}>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="block text-base font-medium text-gray-700 mb-2">Name:</span> 
              <input type="text" name="name" placeholder="Escribe aqui..."
                value={name}
                //Este evento toma los cambio y los actualiza en el array del estados
                onChange={(e) => { setname(e.target.value) }} lassName="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </label>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
               <span className="block text-base font-medium text-gray-700 mb-2">Email:</span>
              <input type="email" name="email" placeholder="Escribe aqui..."
                value={mail}
                onChange={(e) => { setmail(e.target.value) }} lassName="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </label >
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="block text-base font-medium text-gray-700 mb-2">Text:</span>
              <input type="text" name="text" placeholder="Escribe aqui..."
                value={texto}
                onChange={(e) => { settexto(e.target.value) }} lassName="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </label >
            </div>
            <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Enviar</button>
          </form>
          {
            textoEnviado && (<p className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">texto enviado...</p>)
          }
        </div>
      </div>
    </>
  )

}

export default Contact