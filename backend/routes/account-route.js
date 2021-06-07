const express = require('express');
const accountRoutes = express.Router();

let {Account} = require('../models/account-model');
accountRoutes.route('/add').post(function(req,res){

    let account = new Account(req.body);
    account.save()
            .then(account=>{
                res.status(200).json({'account':'Account details are added successfully'});

            })
            .catch(err=>{
                res.status(400).send("Unable to save to database");
            });

});


module.exports = accountRoutes;