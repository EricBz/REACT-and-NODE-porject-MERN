import './App.css'
import RecibeProductos from './pages/recibeUsuarios';
import Contact from './pages/contact';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  //console.log({Recibe})
  const img1 = "/coffeeart.jpg"
  const img2 = "/coffeesweet.jpg"
  const backgroundStyle = {
    backgroundImage: "url(/wallpaper.jpg)"
  }

  return (
    <BrowserRouter>
      <div id="root" className='min-h-screen bg-gray-100 bg-cover bg-center bg-fixed' style={backgroundStyle}>
        <div className="text-center">
          <h1 className="text-6xl text-red-600 italic hover:text-white">International coffee great</h1>
          <h3 className="text-3x1 text-white">The best coffee in you home...</h3>
        </div>
        <div className="flex justify-center gap-4 p-4">
          <img src={img1} alt='cofeeart' className="w-44 h-auto shadow-lg" />
          <div>
            <h3 className='text-white'>The world's finest coffees are brought to your table.
              They are selected by renowned coffee tasters.
              You can easily purchase them through our website or contact us if you'd like to distribute them directly. Pure pleasure, just a cup away. The coffee bean is transformed into coffee through a process that begins with the cultivation and harvesting of the coffee cherry, followed by pulping, drying, roasting, and grinding to finally prepare the beverage. Each stage, from the processing of the green bean to the final brewing method, influences the flavor of the resulting product. The coffee process encompasses several stages: cultivation of the coffee trees, harvesting of the ripe fruits, processing (where the pulp and mucilage are separated from the beans, using methods such as washed or natural), drying in the sun or in machines, threshing to remove the parchment, and finally, roasting and grinding the bean to obtain the final product ready to be prepared.</h3>

            <Link to="/contact" className='text-white bg-black no-underline rounded-md p-2'>Contact with us!</Link>
            {/*<a href="/contact"  target="_blank" rel="noopener noreferrer" className='text-white bg-black no-underline rounded-md p-2'>Contact with us!</a>*/}
          </div>
          <img src={img2} alt='cofeesweet' className="w-44 h-auto shadow-lg" />
        </div>
        <div>
          <Routes>
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<RecibeProductos/>}/>
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
