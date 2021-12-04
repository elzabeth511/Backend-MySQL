const Sequelize = require('sequelize');
const db = require('../config/database');

const Resource = db.define('resource', {
    resource_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resource_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    thumbnail: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rent: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = Resource;