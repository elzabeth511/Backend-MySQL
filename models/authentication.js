// Users - Authentication table


const Sequelize = require('sequelize');
const db = require('../config/database');
const Role = require('./role');



const User = db.define('users', {
    UserID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    RoleID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references:{model:'roles',key:'RoleID'}
    }

})

Role.hasMany(User)


module.exports = User;
