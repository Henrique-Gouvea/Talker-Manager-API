// const schema = require('../schemas');

// const getAuthToken = (req, res, next) => {
//     const { authorization } = req.header;
//     const { error } = schema.tokenSchema(authorization);
//     if (error) {
//         return res.status(401).json({ message: error.message });
//     }
//     return next();
// };

// module.exports = getAuthToken;