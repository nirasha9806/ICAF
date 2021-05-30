const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();
var fileUpload = require('express-fileupload');
const conferenceRoute=require('./routes/conference-route');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

//sanduni
// conference route
app.use('/conference',conferenceRoute);

// file upload
app.use(fileUpload());

app.post('/upload',(req,res)=>{
    if(req.files===null){
        return res.status(400).json({msg: 'No file uploaded'});

    }
    const file = req.files.file;
    file.mv('${__dirname}/ICAF/frontend/public/uploads/${file.name}', err=>{
        if(err){
            consile.error(err);
            res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: '/uploads/${file.name}'});
    });
})




//kaveena
//'/api/payment' location
app.use('/api/payment', require('./routes/payment-route'));






//nethmi
app.use('/api/account', require('./routes/account-route'));







//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));