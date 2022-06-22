const services = require('../services');

const searchTalker = async (req, res) => {
    try {
        const { q } = req.query;
        const talker = await services.searchTalker(q);
        return res.status(200).json(talker);
    } catch (error) {
        return res.status(400).json('Erro ');
    }
};

module.exports = searchTalker;