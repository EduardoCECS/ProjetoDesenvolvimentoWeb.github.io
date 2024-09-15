const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  console.log(`Requested URL: ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'dw')));

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use("/img", express.static('img'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/sobre.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'sobre.html'));
});

app.get('/premios.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'premios.html'));
});

app.get('/cadastro.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'cadastro.html'));
});

app.get('/frequencia.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'frequencia.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/estilogeral.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'estilogeral.css'));
});

app.get('/j.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'j.js'));
});

app.listen(3000, () => {
  console.log('Server running on https://eduardocecs.github.io/');
});
