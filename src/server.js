//importar pacote 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
//utilizando arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criar um caminho
 
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.get('*', (request, response) => {
    response.redirect('/');
})


//ligar  o servidor 
server.listen(5500) 