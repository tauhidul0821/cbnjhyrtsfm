const Sequelize = require('sequelize');
const db = require('../config/database');

const Products = db.define('products',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
    createdAt:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: ()=>{
            return new Date();
        }
    },
    updatedAt:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: ()=>{
            return new Date();
        }
    },
    deletedAt:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "active"
    }
});

module.exports = Products;