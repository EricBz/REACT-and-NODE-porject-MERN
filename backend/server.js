import express from "express"
import usuarios from "./data/data.json" with {"type": "json"}
import path from "path"
import { fileURLToPath } from "url"

const PORT = process.env.PORT || 8080

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.json())


//app.get("/", (req, res) => res.json({ok: true}))
app.get("/data", (req, res) => res.send("Hello from express..."))

app.get("/usuarios", (req, res) => res.status(200).json(usuarios))

app.get("/images", (req, res) => { res.send(`<img src="/coffeeart.jpg">`) })

app.post("/pedidos", (req, res) => { 
    const { items } = req.body; // Recibes el array de items del frontend

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'El carrito está vacío.' });
  }

  try {
    // --- Lógica Crítica del Backend ---
    // 1. Validar productos y precios en la BD (¡nunca confíes en los precios del frontend!)
    // 2. Calcular el total real del pedido
    // 3. Integrar con pasarela de pagos (Stripe/PayPal)
    // 4. Descontar el stock en la base de datos
    // 5. Guardar el pedido final en tu base de datos

    console.log("Procesando pedido para:", items);

    // Simulación de respuesta exitosa
    res.status(200).json({ 
        message: 'Pedido procesado con éxito', 
        orderId: 'TX123456789' 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
})

app.listen(PORT, () => console.log("API listening on port " + PORT))