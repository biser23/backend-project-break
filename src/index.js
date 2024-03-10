require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Base de datos conectada');
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Error al conectar a la base de datos:', err));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tienda de Ropa</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <nav id="menu">
            <div class="div1">
                <div><a href="">Productos</a></div>
                <div><a href="">Camisetas</a></div>
                <div><a href="">Pantalones</a></div>
                <div><a href="">Zapatos</a></div>
                <div><a href="">Accesorios</a></div>
                <div><a href="">Login</a></div>
            </div>
        </nav>
        <h1>Productos</h1>
        <div class="boxContainer0">
                
                <div class="boxOne">Style Shoes
                <button class="ver-button" onclick="redirectToPage('/pagina1.html')">Ver</button>
                </div>
                 
                <div class="boxTwo">T Shirts
                <button class="ver-button" onclick="redirectToPage('/pagina2.html')">Ver</button>
                </div>
               
                <div class="boxThree">Lions Zone
                <button class="ver-button" onclick="redirectToPage('/pagina3.html')">Ver</button>
                </div>
                
                <div class="boxFour">Sunglasses
                <button class="ver-button" onclick="redirectToPage('/pagina4.html')">Ver</button>
                </div>
    

        </div>
        <main>
        <h2></h2>
        </main>
      </body>
    </html>
  `);
});


const productRoutes = require('./routes/productRoutes');
app.use('/productos', productRoutes);

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});