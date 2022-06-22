const getAll = require('./getAll');

const searchTalker = async (query) => {
    const talkers = await getAll();
    if (!query) return talkers;
    const talkerSearch = talkers.filter((talk) => talk.name.includes(query));
    return talkerSearch;
};

module.exports = searchTalker;