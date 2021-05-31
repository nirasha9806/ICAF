const express=require('express');
const AccountRoutes=express.Router();
let {Account}= require('../models/account-model');

AccountRoutes.route('/add').post(function(req,res){
    let account=new Account(req.body);
    account.save()
    .then(account=>{
        res.status(200).json({'account': 'account is added succesfully'});
    })
    .catch(err=>{
        res.status(400).send("unable to save database");
    });
});

module.exports = AccountRoutes;