const orphanageModel = require('../models/OrphanageModel');
const admModel = require('../models/admModel');
const admloginModel = require('../models/admloginModel');

module.exports = {

    async index(request, response, next) {
        return response.render('index')
    },

    async orphanage(request, response, next) {
        return response.render('orphanage')
    },

    async orphanages(request, response, next) {
        return response.render('orphanages')    
    },

    async createOrphanage(request, response, next) {
        return response.render('create-orphanage')    
    },

    async doCreateOrphanage(request, response, next) {
        let data = request.body;
        await orphanageModel.register(data);
        response.redirect('/orphanages');
    },

    async adm(request, response, next) {
        return response.render('adm-register')  
    },

    async doadm(request, response, next) {
        let data = request.body;
        await admModel.register(data);
        response.redirect('/create-orphanage');
    },
    
    async admLogin(request, response, next) {
        return response.render('adm-login')  
    },

    async doadmLogin(request, response, next) {
        let data = request.body;
        await admloginModel.register(data);
        response.redirect('/create-orphanage');
    }
}
