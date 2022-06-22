const getAll = require('./getAll');
const writeFile = require('../helpers/writeFile');

const deleteTalker = async (id) => {
    const talkers = await getAll();
    const removeTalker = talkers.filter((talk) => talk.id !== id);
    await writeFile(removeTalker);
};

module.exports = deleteTalker;