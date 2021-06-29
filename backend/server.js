const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();
var fileUpload = require('express-fileupload');
const conferenceRoute=require('./routes/conference-route');
<<<<<<< Updated upstream
=======
const researcherRoute = require('./routes/researcher-route');
const workshopRoute = require('./routes/workshopPresenter-route');
const accountRoute = require('./routes/research-payment-route');
const viewconferenceRoute = require('./routes/viewconferencedetails-route');
const attendeePaymentRoute = require('./routes/payment-route');
const workshopProposalRoute = require('./routes/workshopProposal-route');
const researchPaperRoute = require('./routes/researchPaper-route');
const ApprovedResearcherRoute = require('./routes/approvedResearches-route');
const ApprovedProposalsRoute = require('./routes/approvedProposals-route');
const FileRoutes = require('./routes/fileUpload-route');
>>>>>>> Stashed changes

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

//sanduni
// conference route
app.use('/conference',conferenceRoute);
app.use('/template', FileRoutes);
app.use('/uploads', express.static('uploads'));


//kaveena
//'/api/payment' location
app.use('/api/payment', require('./routes/payment-route'));






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