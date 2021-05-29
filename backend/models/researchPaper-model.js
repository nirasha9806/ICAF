const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchPaperSchema = mongoose.Schema({
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

const ResearchPaper = mongoose.model('ResearchPaper', researchPaperSchema);

module.exports = {ResearchPaper}