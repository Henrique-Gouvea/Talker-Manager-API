const getAll = require('./getAll');

const updateTalker = async (name, age, talk, id) => {
    const talkers = await getAll();
    const updateTalk = { name, age, talk, id };
    const talkersUpdated = talkers.filter((talke) => talke.id !== id);
    talkersUpdated.push(updateTalk);
    return { updateTalk, talkersUpdated };
};

module.exports = updateTalker;