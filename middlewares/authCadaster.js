const schema = require('../schemas');

const authCadaster = (req, res, next) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const token = req.headers.authorization;
    const tokenMessage = schema.tokenSchema.validate({ token });

    if (tokenMessage.error) {
        return res.status(401).json({ message: tokenMessage.error.message });
    }

    const { error } = schema
    .cadasterSchema.validate({ name, age, talk: { watchedAt, rate } });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    return next();
};

module.exports = authCadaster;