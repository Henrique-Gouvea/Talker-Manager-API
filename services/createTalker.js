const getAll = require('./getAll');

const createTalker = async (newTalker) => {
    const talkers = await getAll();
    talkers.push(newTalker);
    return talkers;
};

module.exports = createTalker;