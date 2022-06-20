const authLogin = (req, res, next) => {
    const { email, password, token } = req.headers;
    if (email && password && token) {
        next();
    }
};

module.exports = authLogin;