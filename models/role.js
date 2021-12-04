const Sequelize = require('sequelize');
const db = require('../config/database');



//RoleTable
const Role = db.define('roles', {
    RoleID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RoleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: false
    }

})


module.exports = Role;






