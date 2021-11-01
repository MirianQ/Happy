const orphanageModel = require('../models/OrphanageModel');

module.exports = {

    async index(request, response, next) {
        return response.render( 'index')
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
    }
}
