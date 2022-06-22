const getAll = require('./getAll');
const getById = require('./getById');
const getToken = require('./getToken');
const createTalker = require('./createTalker');
const updateTalker = require('./updateTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');

module.exports = { getAll,
    getById,
    getToken,
    createTalker,
    updateTalker,
    deleteTalker,
    searchTalker };