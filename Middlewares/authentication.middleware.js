const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config ()


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log(user);
        if (req.user.RoleID === 1)
            next();
        else { console.log("Not admin"); return res.sendStatus(403); }
    })
}

module.exports = authenticateToken;