const express = require('express');
const router = express.Router();
const {EditorDetails} = require("../models/inserteditordetails-model");

//post method to save data
router.post("/add", (req, res) => {

    //save data got from the client into the payment collection in the DB
    const editorDetails = new EditorDetails(req.body)

         editorDetails.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

//delete
router.route('/delete/:id').post(function (req, res) {
    EditorDetails.deleteOne({ _id: req.params.id }, function (err, editorDetails) {
      if (err) res.json(err);
      else res.json('successfully removed');
    });
  });

module.exports = router;