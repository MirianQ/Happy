const db = require('../database/database');

class admloginModel{

    constructor(){}

    async register(data){
        db.query("INSERT INTO adm(email, senha) VALUES (?, ?)", 
         [data.email, data.password])
    }
}

module.exports = new admloginModel();