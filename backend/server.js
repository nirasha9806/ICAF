const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();
const conferenceRoute=require('./routes/conference-route');

const researcherRoute = require('./routes/researcher-route');
const attendeePaymentRoute = require('./routes/attendeePayment-route');
const workshopProposalRoute = require('./routes/workshopProposal-route');
const researchPaperRoute = require('./routes/researchPaper-route');


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

//sanduni
// conference route
app.use('/conference',conferenceRoute);





//kaveena
app.use('/api/payment',attendeePaymentRoute);
app.use('/api/workshopProposal',workshopProposalRoute);
app.use('/api/researchPaper',researchPaperRoute);





//nethmi
app.use('/api/account', require('./routes/account-route'));







//nirasha
app.use('/api/documentUpload', require('./routes/documentUpload-route'));




//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));