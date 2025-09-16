const express = require('express');
const cors = require('cors');
const usersRouter = require('./users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', usersRouter);


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor ONLINE');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
