const sql = require('../db/connectionsql');
const jwt = require('jsonwebtoken');

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.tokens = user.tokens;
};

User.create = (newUser, result) => {
    const token = jwt.sign({name: newUser.name}, process.env.SECRET, {})
    const newUserWithToken = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        tokens: token
    };
    console.log(newUserWithToken);
    sql.query("INSERT INTO users SET ?", newUserWithToken, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        };
        console.log("created user: ", { id: res.insertId, ...newUserWithToken });
        result(null, { id: res.insertId, ...newUserWithToken });
    });
};

User.findOne = (userName, result) => {
    sql.query(`SELECT * FROM users WHERE name = "${userName}"`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        };
        if (res.length) {
            console.log("Found user: ", res[0]);
            result(null, res[0]);
            return;
        };

        result({ message: "Not Found" }, null);
    });
};

module.exports = {User}