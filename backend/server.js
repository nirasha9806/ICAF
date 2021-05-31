const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

//'/api/payment' location
app.use('/api/payment', require('./routes/payment-route'));

//app.use('/api/account', require('./routes/account-route'));
app.use('/api/account', require('./routes/account-route'));
<<<<<<< Updated upstream
app.use('/api/retrieve', require('./routes/retrieveeditordetails-route'));
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
=======
app.use('/api/conference', require('./routes/retrieveeditordata-route'));
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));







//nirasha
app.use('/api/documentUpload', require('./routes/documentUpload-route'));




>>>>>>> Stashed changes

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));