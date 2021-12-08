const db = require('../models')
const {Op} = require('sequelize')

module.exports.search = async (query) => {

    try {
        const users = db.User.findAll({where: {email: {[Op.like]: `%${query}%`}}});
        const posts = db.Post.findAll({where: { title: {[Op.like]: `%${query}%`}}});
       
        const results = await Promise.all([users, posts]);

        return [
            ...results[0],
            ...results[1]
        ]

    } catch (error) {
        console.error("ups: ");
        return [];
    }


}