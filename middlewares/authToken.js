const schema = require('../schemas');

const authToken = (req, res, next) => {
    const token = req.headers.authorization;
    const tokenMessage = schema.tokenSchema.validate({ token });

    if (tokenMessage.error) {
        return res.status(401).json({ message: tokenMessage.error.message });
    }

    return next();
};

module.exports = authToken;