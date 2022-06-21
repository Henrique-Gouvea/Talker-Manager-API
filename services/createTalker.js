const getAll = require('./getAll');

const createTalker = async (newTalker) => {
    const talkers = await getAll();
    const lastTalker = talkers[talkers.length - 1];
    const newId = (lastTalker.id !== talkers.length) ? talkers.length : talkers.length + 1;
    console.log(newTalker);
    // newTalker['id'] = newId;
    Object.assign(newTalker, { id: newId });
    console.log(newTalker);
    talkers.push(newTalker);
    return talkers;
};

module.exports = createTalker;