const getAll = require('./getAll');

const getById = async (id) => {
    const talkers = await getAll();
    const talker = talkers.find((talk) => talk.id === Number(id));
    if (talker === undefined) throw new Error();

    return talker;
};

module.exports = getById;