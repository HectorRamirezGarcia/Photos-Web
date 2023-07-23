// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/years', express.static('years'));

const yearsFolderPath = path.join(__dirname, 'years');

// Rutas de la API
app.get('/years', async (req, res) => {
  try {
    const yearsFolders = await getFoldersFromDirectory(yearsFolderPath);
    res.json(yearsFolders);
  } catch (error) {
    console.error('Error fetching years data:', error);
    res.status(500).json({ error: 'Error fetching years data' });
  }
});

app.get('/years/:year', async (req, res) => {
  const year = req.params.year;
  const yearFolderPath = path.join(yearsFolderPath, year);

  try {
    const photosInYear = await getFilesFromDirectory(yearFolderPath);
    res.json(photosInYear);
  } catch (error) {
    console.error('Error fetching photos for year:', error);
    res.status(500).json({ error: 'Error fetching photos for year' });
  }
});

function getFoldersFromDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const folders = files
          .filter((file) => file.isDirectory())
          .map((folder) => folder.name);
        resolve(folders);
      }
    });
  });
}

function getFilesFromDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});
