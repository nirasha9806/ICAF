const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {WorkshopProposal} = require("../models/workshopProposal-model");


//get method to fetch data from workshopProposals collection
router.get('/', function(req, res){
    console.log('Get workshopProposals paper details');
    WorkshopProposal.find({})
    .exec(function(err, workshopproposals){
        if(err){
            console.log('Error retrieving')
        }else{
            res.json(workshopproposals);
        }
    });
});

//delete from database
router.post('/delete/:id',function (req,res){
    WorkshopProposal.deleteOne({_id: req.params.id}, function(err, workshopproposals){
        if(err) res.json(err);
        else res.json('Successfully Deleted');

    });
});


module.exports = router;