const express = require('express');

const server = express();
const PORT = 4000;

server.listen(PORT, () => {
console.log('Servidor corriendo en: '+ PORT)
})

server.get('/', (req, res) => {
    res.send('<h1>titulo</h1>')
})

