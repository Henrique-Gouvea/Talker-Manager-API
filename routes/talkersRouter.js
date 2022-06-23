const express = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const talkersRouter = express.Router();

talkersRouter.get('/search', middlewares.authToken, controllers.searchTalker);

talkersRouter.get('/', controllers.getAll);

talkersRouter.post('/', middlewares.authCadaster, controllers.createTalker);

talkersRouter.get('/:id', controllers.getById);

talkersRouter.put('/:id', middlewares.authCadaster, controllers.updateTalker);

talkersRouter.delete('/:id', middlewares.authToken, controllers.deleteTalker);

module.exports = talkersRouter;