const { User } = require('./user.model');

exports.create = (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        User.create(user, (err, data) => {
            if (err) {
                throw new Error
            } else {
                res.status(200).send(data);
            };
        });
    } catch (error) {
        res.status(500).send(error);
    };
};

exports.getUser = (req, res) => {
    try {
        User.findOne(req.name, (err, data) => {
            if (err) {
                throw new Error;
            };
            if (!data.tokens.includes(req.token)) {
                throw new Error
            } else {
                res.status(200).send(data);
            };
        });
    } catch (error) {
        res.status(500).send(error);
    };
};