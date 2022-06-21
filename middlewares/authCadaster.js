const schema = require('../schemas');

const authLogin = (req, res, next) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const { error } = schema
    .cadasterSchema.validate({ name, age, talk: { watchedAt, rate } });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    return next();
};

module.exports = authLogin;