// Routes 
const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/', controller.returnName);

module.exports = routes;
