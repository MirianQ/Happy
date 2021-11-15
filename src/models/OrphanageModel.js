const db = require('../database/database');

class OrphanageModel{

    constructor(){}

    async register(data){
        db.query("INSERT INTO orfanato(nome, sobre, whatsapp, link, instrucoes, horario) VALUES (?, ?, ?, ?, ?, ?)",
         [data.name, data.about, data.Whatsapp, data.images, data.instructions, data['opening-hours']]);
    }
}

module.exports = new OrphanageModel();