const fs = require('fs').promises;

const writeFile = async (talkers) => fs.writeFile('talker.json', JSON.stringify(talkers));

module.exports = writeFile;