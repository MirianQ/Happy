const db = require('../database/database');

class admModel{

    constructor(){}

    async register(data){
        db.query("INSERT INTO adm(nome, email, senha, cpf) VALUES (?, ?, ?, ?)",
         [data.name, data.email, data.password, data.cpf]);
    }
}

module.exports = new admModel();