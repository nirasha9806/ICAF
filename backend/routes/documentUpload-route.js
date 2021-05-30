const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {ResearchPaper} = require("../models/researchPaper-model");

//post method to save data
router.post("/insertResearchPaper", (req, res) => {

    //save data got from the client into the payment collection in the DB
    const researchPaper = new ResearchPaper(req.body)

        researchPaper.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

module.exports = router;