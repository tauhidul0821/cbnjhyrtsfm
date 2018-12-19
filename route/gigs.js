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
	let id = req.params.id;
    Gig.findById(id)
    .then(gigs =>{
       //console.log(gigs);
       //res.sendStatus(200);
       res.json(gigs);
   })
   .catch(err => console.log(err));
});


//POST
router.post('/',(req,res)=>{
    // const data = {
    //     title: req.body.title,
    //     technologies: req.body.technologies,
    //     description: req.body.description,
    //     budget: req.body.budget,
    //     contact_email: req.body.contact_email
    // }
    // console.log(data);

    Gig.create({
        title: req.body.title,
        technologies: req.body.technologies,
        description: req.body.description,
        budget: req.body.budget,
        contact_email: req.body.contact_email
    })
    .then(gigs =>{
       //console.log(gigs);
       res.sendStatus(200);
       //res.redirect("/");
   })
   .catch(err => console.log(err));
});


//PUT

router.put('/:id',(req,res)=>{
    Gig.update({
        title: req.body.title,
        technologies: req.body.technologies,
        description: req.body.description,
        budget: req.body.budget,
        contact_email: req.body.contact_email
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(gigs =>{
        res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

//DELETE

router.delete('/:id',(req,res)=>{
    Gig.update({
        updatedAt: null
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(gigs =>{
        res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

module.exports = router;