const services = require('../services');

const createTalker = async (req, res) => {
    try {
        const talkers = await services.createTalker(req.body);
        return res.status(200).json(talkers);
    } catch (error) {
        return res.status(200).json([]);
    }
};

module.exports = createTalker;