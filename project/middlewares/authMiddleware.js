const jwt = require('jsonwebtoken');
const { MY_SECRET_KEY } = require('../config/jwt');
const db = require('../models');

const authorizationMiddleware = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization) {
        try {
            const isValid = jwt.verify(authorization.replace('Bearer ', ''), MY_SECRET_KEY);
            const userId = isValid.id;

            const user = await db.User.findByPk(userId);
            if(user) {
                req.user = user;
                next();
            }

            next();
        } catch(e) {
            next();
        }
    } else {
        next();
    }
}

module.exports = authorizationMiddleware;