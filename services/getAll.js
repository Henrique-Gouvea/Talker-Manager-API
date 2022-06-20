const fs = require('fs').promises;

const getAll = async () => {
    const data = await fs.readFile('talker.json', 'utf8');
    const talkers = JSON.parse(data);

    return talkers;
};

module.exports = getAll;