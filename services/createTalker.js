const getAll = require('./getAll');

const createTalker = async (newTalker) => {
    const talkers = await getAll();
    const lastTalker = talkers[talkers.length - 1];
    const newId = (lastTalker.id !== talkers.length) ? talkers.length : talkers.length + 1;
    
    Object.assign(newTalker, { id: newId });
    talkers.push(newTalker);
    
    return { talkers, newTalker };
};

module.exports = createTalker;