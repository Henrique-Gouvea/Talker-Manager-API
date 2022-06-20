const randToken = require('rand-token');

const tokenGenerate = (number) => randToken.generate(number);

module.exports = tokenGenerate;