const services = require('../services');

const getById = async (req, res) => {
try {
    const { id } = req.params;
    const talker = await services.getById(id);
    return res.status(200).json(talker);
} catch (error) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}
};

module.exports = getById;