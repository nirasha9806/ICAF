const express = require('express');
const router = express.Router();
<<<<<<< Updated upstream
const {EditorDetails} = require("../models/inserteditordetails-model");

//post method to save data
=======
let { EditorDetails } = require('../models/inserteditordetails-model');

///post method to save data
>>>>>>> Stashed changes
router.post("/add", (req, res) => {

    //save data got from the client into the payment collection in the DB
    const editorDetails = new EditorDetails(req.body)

<<<<<<< Updated upstream
         editorDetails.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
=======
    editorDetails.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
>>>>>>> Stashed changes
});

//delete
router.route('/delete/:id').post(function (req, res) {
<<<<<<< Updated upstream
    EditorDetails.deleteOne({ _id: req.params.id }, function (err, editorDetails) {
=======
  EditorDetails.deleteOne({ _id: req.params.id }, function (err, EditorDetails) {
>>>>>>> Stashed changes
      if (err) res.json(err);
      else res.json('successfully removed');
    });
  });

module.exports = router;