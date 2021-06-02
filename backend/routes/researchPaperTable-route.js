const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {ResearchPaper} = require("../models/researchPaper-model");


//get method to fetch data from research paper collection
router.get('/', function(req, res){
    console.log('Get research paper details');
    ResearchPaper.find({})
    .exec(function(err, researchpapers){
        if(err){
            console.log('Error retrieving')
        }else{
            res.json(researchpapers);
        }
    });
});

//delete from database
router.post('/delete/:id',function (req,res){
    ResearchPaper.deleteOne({_id: req.params.id}, function(err, researchpapers){
        if(err) res.json(err);
        else res.json('Successfully Deleted');

    });
});


module.exports = router;