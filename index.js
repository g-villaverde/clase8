import Express from "Express";
import { v4 } from "uuid";
// import users from "./users.js";
import productos from "./productos.js";

const app = Express();
const PORT = 8080;

app.get("/", (_, res) => {
    res.json("hola")
})

/* app.get("/users", (_,res) => {
    res.json(users);
})

app.post("/users", (req, res) => {
    const newUser = {
        id: v4(),
        ...req.body
    }
    users.push(newUser)
    res.status(201).json(newUser);
}) */

app.get('/api/productos', (_ ,res) => {
    res.json(productos)
}) 

app.post("/api/productos/guardado", (req, res) => {
    
    const newProduct = {
        id: v4(),
        ...req.body,
    };
    productos.push(newProduct);
    res.json(newProduct);
}) 

app.get('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    const producto = productos.find((producto) => producto.id = id);
    res.json(producto);
}) 




app.listen(PORT, () => console.log('servidor inicializado'));