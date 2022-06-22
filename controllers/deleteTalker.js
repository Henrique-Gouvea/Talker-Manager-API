const services = require('../services');

const deleteTalker = async (req, res) => {
    try {
        const { id } = req.params;
        await services.deleteTalker(Number(id));
        return res.status(204).end();
    } catch (error) {
        return res.status(400).json('Erro ao deletar palestrante');
    }
};

module.exports = deleteTalker;