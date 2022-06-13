const fs = require('./fs');

const getAll = async () => {
    const users = fs.getAll();

    if (users.length === 0) throw new Error('No users found');
    
    return users;
};

module.exports = getAll;