const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();

var fileUpload = require('express-fileupload');
const conferenceRoute=require('./routes/conference-route');
const researcherRoute = require('./routes/researcher-route');
const workshopRoute = require('./routes/workshopPresenter-route');
const accountRoute = require('./routes/research-payment-route');
const viewconferenceRoute = require('./routes/viewconferencedetails-route');
const researcherRoute = require('./routes/researcher-route');
const attendeePaymentRoute = require('./routes/attendeePayment-route');
const workshopProposalRoute = require('./routes/workshopProposal-route');
const researchPaperRoute = require('./routes/researchPaper-route');
const ApprovedResearcherRoute = require('./routes/approvedResearches-route');
const ApprovedProposalsRoute = require('./routes/approvedProposals-route');

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
app.use('/api/payment',attendeePaymentRoute);
app.use('/api/workshopProposal',workshopProposalRoute);
app.use('/api/researchPaper',researchPaperRoute);
app.use('/api/ApprovedResearcher',ApprovedResearcherRoute);
app.use('/api/ApprovedProposals',ApprovedProposalsRoute);




//kaveena
//app.use('/api/payment',attendeePaymentRoute);
app.use('/api/workshopProposal',workshopProposalRoute);
app.use('/api/researchPaper',researchPaperRoute);
app.use('/api/retrieve', require('./routes/retrieveeditordetails-route'));
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
app.use('/api/getinserteditordetails', require('./routes/getinserteditordetails-route'));



//nethmi
app.use('/api/account', accountRoute);
app.use('/api/retrieve', viewconferenceRoute);
app.use('/api/inserteditordetails', require('./routes/inserteditordetails-route'));
app.use('/api/getinserteditordetails', require('./routes/approved-conferencedetails-route'));
app.use('/api/viewresearchpaper', require('./routes/viewresearchpaper-route'));
app.use('/api/viewproposal', require('./routes/viewproposal-route'));




//nirasha
app.use('/api/documentUpload', require('./routes/documentUpload-route'));





//nirasha
app.use('/api/researcher', researcherRoute);
app.use('/api/workshop', workshopRoute);


//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));