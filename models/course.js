const Sequelize = require('sequelize');
const db = require('../config/database');

const Course = db.define('course', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    thumbnail: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
    course_fee: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total_seat: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  
    available_seat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    }
    
 
 
});


module.exports = Course;