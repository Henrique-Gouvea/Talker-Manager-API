const express = require('express');
const middlewares = require('../middlewares');

const loginRouter = express.Router();
const controllers = require('../controllers');

loginRouter.post('/', middlewares.authLogin, controllers.getToken);

module.exports = loginRouter;
