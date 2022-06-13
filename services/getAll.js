const models = require('../models');

const getAll = async () => {
    const users = models.getAll();

    if (users.length === 0) throw new Error('No users found');

    return users;
};

module.exports = getAll;