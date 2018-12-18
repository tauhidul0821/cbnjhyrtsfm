const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//GetAll
router.get('/',(req,res)=>{
    // db.query("SELECT * FROM gigs")
    // .then(myTableRows => {
    //     console.log(myTableRows)
    // })

     Gig.findAll()
     .then(gigs =>{
        //console.log(gigs);
        //res.sendStatus(200);
        res.json(gigs);
    })
    .catch(err => console.log(err));
});


//GetById
router.get('/:id',(req,res)=>{
	var id = req.params.id;
    Gig.findById(id)
    .then(gigs =>{
       //console.log(gigs);
       //res.sendStatus(200);
       res.json(gigs);
   })
   .catch(err => console.log(err));
});


//POST
router.get('/add',(req,res)=>{
    const data = {
        title:"sdfd",
        technologies:"sdfsdf",
        description:"sdfsdf",
        budget:"sdfsdf",
        contact_email: "sdfsdf",
    }
    let {
        
        title,
        technologies,
        description,
        budget,
        contact_email,
    } = data;

    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email,
    })
    .then(gigs =>{
       //console.log(gigs);
       //res.sendStatus(200);
       res.redirect("/");
   })
   .catch(err => console.log(err));
});


module.exports = router;