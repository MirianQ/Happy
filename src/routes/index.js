const express = require('express');
const controllers = require('../controllers');

const router = express.Router();
router.get('/', controllers.index);
router.get('/orphanage', controllers.orphanage);
router.get('/orphanages', controllers.orphanages);
router.get('/create-orphanage', controllers.createOrphanage);
router.post('/create-orphanage', controllers.doCreateOrphanage);

module.exports = router;

