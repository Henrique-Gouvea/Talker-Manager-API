const services = require('../services');

const getAll = async (req, res) => {
    try {
        const talkers = await services.getAll();
        return res.status(200).json(talkers);
    } catch (error) {
        return res.status(200).json([]);
    }
};

module.exports = getAll;