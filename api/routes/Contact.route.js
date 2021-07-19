const express = require('express');
let Contact = require('../model/Contact');
const app = express();
const contactRoutes = express.Router();


let contacts = require('../model/Contact');
//const contact = new Contact({})

contactRoutes.route('/add').post(function (req, res) {
    console.log("debut")
    contact = new Contact(req.body);
    
    console.log("ici");
    contact.save()
      .then(res => {
        console.log("sir")
        res.status(200).json({'contact': 'contact is added successfully'});
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
  
  contactRoutes.route('/list').get(function (req, res) {
    console.log("list ici")
   //res.send(contact);
   contacts.find( function(err, contact){
    console.log(contact)
      if(err){
        console.log(err);
      }
      else {
        console.log(contact)
        res.json(contact);
      }
    });
  });

  

  module.exports = contactRoutes;