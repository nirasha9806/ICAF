const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopProposalsSchema = mongoose.Schema({
    paperTitle: {
        type: String
    },

    date: {
        type: String
    },

    authorName: {
        type: String
    },

    email: {
        type: String
    }
    
},{ timesamps: true})

const WorkshopProposal = mongoose.model('WorkshopProposal', workshopProposalsSchema);

module.exports = {WorkshopProposal}