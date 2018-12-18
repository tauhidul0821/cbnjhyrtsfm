const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gigs',{
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

});

// console.log(" dataaa"+Gig.findAll());

//  Gig.findById(2)
//  .then(result => console.log(result))
//  .catch(error => console.log(error));


// db.sync();


module.exports = Gig;