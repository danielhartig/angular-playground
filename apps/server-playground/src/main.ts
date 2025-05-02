/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express from 'express';
import * as path from 'path';
import cors from 'cors';
import { SUPERHERO_ACCESS_TOKEN } from './environments/environment';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server-playground!' });
});

app.get('/heroes/search/:name', async (req, res) => {
  try {
    const apiUrl = `https://superheroapi.com/api/${SUPERHERO_ACCESS_TOKEN}/search/${req.params.name}`;
    const apiResponse = await fetch(apiUrl);
    const apiResponseJson = await apiResponse.json();
    res.send(apiResponseJson);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
