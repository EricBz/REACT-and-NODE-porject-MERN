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

app.listen(PORT, () => console.log("API listening on port " + PORT))