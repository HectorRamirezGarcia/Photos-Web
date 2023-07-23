const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo prefieres

app.use(bodyParser.json());
app.use(cors());

// Rutas de la API
app.get('/years', (req, res) => {
  // Aquí deberías obtener y devolver las carpetas de años desde tu almacenamiento (por ejemplo, una base de datos o un sistema de archivos)
  console.log(req.params);
  const yearsFolders = ['2020', '2021']; // Ejemplo de datos estáticos
  res.json(yearsFolders);
});

app.get('/years/:year/', (req, res) => {
  const year = req.params.year;
  // Aquí deberías obtener y devolver las fotos para el año específico desde tu almacenamiento (por ejemplo, una base de datos o un sistema de archivos)
  console.log(year);
  const photosInYear = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg']; // Ejemplo de datos estáticos
  res.json(photosInYear);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});
