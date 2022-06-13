const fs = require('fs/promises');

const read = async () => {
try {
    const data = fs.readFile('talker.json', 'utf8');
    return JSON.parse(data);
} catch (error) {
    console.log(error);
}
};

module.exports = read;