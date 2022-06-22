const services = require('../services');
const writeFile = require('../helpers/writeFile');

const createTalker = async (req, res) => {
    try {
        const data = await services.createTalker(req.body);
        writeFile(data.talkers);
        return res.status(201).json(data.newTalker);
    } catch (error) {
        return res.status(400).json('Erro ao criar palestrante');
    }
};

module.exports = createTalker;