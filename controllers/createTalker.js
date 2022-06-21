const services = require('../services');
const writeFile = require('../helpers/writeFile');

const createTalker = async (req, res) => {
    try {
        const talkers = await services.createTalker(req.body);
        writeFile(talkers);
        return res.status(201).json(talkers);
    } catch (error) {
        return res.status(400).json('Erro ao criar palestrante');
    }
};

module.exports = createTalker;