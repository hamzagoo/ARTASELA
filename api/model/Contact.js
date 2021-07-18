const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    let Contact = new Schema({
        civilite:{
          type: String
        },
        name:{
          type: String
        },
        lastName: {
          type: String
        },
        mail: {
          type: String
        },
        adresse: {
          type: String
        },
        codePostal: {
          type: Number
        },
        ville: {
          type: String
        },
        paye: {
            type: String
        },
        ville: {
            type: String
        },
        proffession: {
            type: String
        },
        message: {
            type: String
        },
    },{
        collection: 'contact'
    });
    


module.exports = mongoose.model('contact', Contact);
