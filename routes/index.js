// Routes 
const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/', controller.returnName);

routes.use('/', require('./contacts'))

module.exports = routes;