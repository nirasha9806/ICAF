const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();
<<<<<<< Updated upstream
=======
var fileUpload = require('express-fileupload');
const conferenceRoute=require('./routes/conference-route');
const researcherRoute = require('./routes/researcher-route');
const workshopRoute = require('./routes/workshopPresenter-route');

//const researcherRoute = require('./routes/researcher-route');
const accountRoute = require('./routes/research-payment-route');
const viewconferenceRoute = require('./routes/viewconferencedetails-route');
//const attendeePaymentRoute = require('./routes/attendeePayment-route');
const workshopProposalRoute = require('./routes/workshopProposal-route');
const researchPaperRoute = require('./routes/researchPaper-route');

>>>>>>> Stashed changes

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

//'/api/payment' location
app.use('/api/payment', require('./routes/payment-route'));

//app.use('/api/account', require('./routes/account-route'));
app.use('/api/account', require('./routes/account-route'));

<<<<<<< Updated upstream
app.use('/api/conference', require('./routes/retrieveeditordata-route'));
=======
//kaveena
//app.use('/api/payment',attendeePaymentRoute);
app.use('/api/workshopProposal',workshopProposalRoute);
app.use('/api/researchPaper',researchPaperRoute);
>>>>>>> Stashed changes

app.use('/api/retrieve', require('./routes/retrieveeditordetails-route'));
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
app.use('/api/getinserteditordetails', require('./routes/getinserteditordetails-route'));




<<<<<<< Updated upstream
=======
//nethmi
app.use('/api/account', accountRoute);
app.use('/api/retrieve', viewconferenceRoute);
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
app.use('/api/getinserteditordetails', require('./routes/approved-conferencedetails-route'));
>>>>>>> Stashed changes




//nirasha
app.use('/api/documentUpload', require('./routes/documentUpload-route'));



<<<<<<< Updated upstream
=======
//nirasha
//app.use('/api/researcher', researcherRoute);
app.use('/api/workshop', workshopRoute);
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