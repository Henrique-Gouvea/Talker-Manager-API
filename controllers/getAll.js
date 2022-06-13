const services = require('../services');

const getAll = async (req, res) => {
    try {
        const users = await services.getAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = getAll;