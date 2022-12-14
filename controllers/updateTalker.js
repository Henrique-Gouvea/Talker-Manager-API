const services = require('../services');
const writeFile = require('../helpers/writeFile');

const updateTalker = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, talk } = req.body;
        const data = await services.updateTalker(name, age, talk, Number(id));
        writeFile(data.talkersUpdated);
        return res.status(200).json(data.updateTalk);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = updateTalker;