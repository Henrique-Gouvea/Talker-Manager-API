const tokenGenerate = require('../helpers/tokenGenerate');

const getToken = (req, res) => {
    try {
        const token = { token: tokenGenerate(16) };
        return res.status(200).json(token);
    } catch (error) {
        return res.status(400).json('Erro ao gerar token');
    }
};

module.exports = getToken;