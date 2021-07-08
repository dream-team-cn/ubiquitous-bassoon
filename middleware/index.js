  
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    // console.log("tessssssssst")
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRET);
        req.name = decoded.name;
        req.token = token;
    } catch (error) {
        res.status(401).send({ message: 'User Not Found' });
    };
    next();
}
