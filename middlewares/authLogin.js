const userSchema = require('../schemas/userSchema');

const authLogin = (req, res, next) => {
    const { email, password } = req.body;

    const { error } = userSchema.validate({ email, password });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    return next();
};

module.exports = authLogin;