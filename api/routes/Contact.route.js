const express = require('express');
const contact = require('../model/Contact');
const Contact = require('../model/Contact');
const app = express();
const contactRoutes = express.Router();


let contacts = require('../model/Contact');
//const contact = new Contact({})

contactRoutes.route('/add').post(function (req, res) {
    console.log("ici");
    contact = new Contact(req.body);
    
    console.log("ici");
    contact.save()
      .then(contact => {
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

  /*async function removeContact(id){
    const result = await contact.deleteOne({_id: id})
  }
  removeContact('60f2e94f8b923e19983787f8');*/

  module.exports = contactRoutes;