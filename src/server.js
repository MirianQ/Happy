//importar pacote 
const express = require('express');
const path = require('path');

//iniciando o express
const server = express();

server
//utilizando arquivos estáticos
.use(express.urlencoded({extended: true}))
.use(express.json())
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//rotas
.use('/', require('./routes'))

//trata erros
.use((req, res, next) => {
    let error = new Error('Página não encontrada');
    error.status = 404;
    next(error);
})

.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(error.status || 500);
    res.json({
        mensagem: error.message
    });
});


module.exports = server;