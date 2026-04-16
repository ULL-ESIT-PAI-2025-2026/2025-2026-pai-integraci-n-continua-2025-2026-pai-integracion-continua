/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 25, 2023
 *        Updated Mar 21 2024
 * @description This code sets up a static file server in an Express.js application 
 *              by telling Express to serve static files from a specific directory on the file system.
 * @see {@link https://expressjs.com/en/starter/static-files.html}
 * @see {@link https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express}
 * @see {@link https://github.com/nodejs/help/issues/2907#issuecomment-757446568}
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.set('port', 8080);

app.get('/data', async (req, res) => {
  try {
    const URL = 'https://www.santacruzdetenerife.es/opendata/.../canchas_deportivas.json';
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`Upstream error: ${response.status}`);
    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../../www')));

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});