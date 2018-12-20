const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//GetAll
router.get('/',(req,res)=>{
    Products.findAll(
        {
            where: {
                deletedAt: 'active'
            }
        }
    )
     .then(Products =>{
        //console.log(Products);
        //res.sendStatus(200);
        res.json(Products);
    })
    .catch(err => console.log(err));
});


//GetById
router.get('/:id',(req,res)=>{
    Products.findAll(
        {
            where: {
                id:req.params.id,
                deletedAt: 'active'
            }
        }
    )
    .then(Products =>{
       //console.log(Products);
       //res.sendStatus(200);
       res.json(Products);
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

    Products.create({
        title: req.body.title,
        technologies: req.body.technologies,
        description: req.body.description,
        budget: req.body.budget,
        contact_email: req.body.contact_email,
    })
    .then(Products =>{
       //console.log(Products);
       res.sendStatus(200);
       //res.redirect("/");
   })
   .catch(err => console.log(err));
});


//PUT

router.put('/:id',(req,res)=>{
    Products.update({
        title: req.body.title,
        technologies: req.body.technologies,
        description: req.body.description,
        budget: req.body.budget,
        contact_email: req.body.contact_email,
        updatedAt: ()=>{
            new Date();
        }
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(Products =>{
        res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

//DELETE

router.delete('/:id',(req,res)=>{
    Products.update({
        deletedAt:'deleted'
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(Products =>{
        res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

module.exports = router;