const express = require('express');
const router = require('../routes')
const { v4 } = require('uuid');
require('dotenv/config')

const app = express();

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});


const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(router);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

app.get("/api/", (req, res) => {
  return res.send("wow, it actually worked");
});

module.exports = app;