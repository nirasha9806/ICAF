const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let accountSchema = new Schema({

    card_number : {

        type : String
    },

    card_holder : {

        type : String
    },

    date : {

        type : String
    },

    CVC : {
        type : String
    }

},{
    timestamps:true
});

const Account = mongoose.model('Account',accountSchema);
module.exports ={Account}