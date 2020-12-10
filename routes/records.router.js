const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();



const Record = require("../models/record.model");

// const recordData = [listingId, artist, title, label, catno,format, releaseId, status, price, listed, comments, mediaCondition, sleeveCondition, acceptOffer, externalId, weight, formatQuantity, flatShipping, location, favouritedBy, image]

//get all records
router.get("/records", (req, res, next) => {
    Record.find()
      
      .then((allTheRecords) => {
        res.status(200).json(allTheRecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

//get a record by id
router.get("/records/:id", (req, res) => {

        const { id } = req.params;
      
        if (!mongoose.Types.ObjectId.isValid(id)) {
          res
            .status(400) //  Bad Request
            .json({ message: "Specified id is not valid" });
          return;
        }
      
        Record.findById(id)
         
   .populate("favoritedBy")
          .then((foundRecord) => {
            res.status(200).json(foundRecord); // OK
          })
          .catch((err) => {
            res.status(500).json(err); // Internal Server Error
          });
      });
  
//create new record
router.post("/records", (req, res, next) =>{

  const {listingId, artist, title, label, catno,format, releaseId, status, price, listed, comments, mediaCondition, sleeveCondition, acceptOffer, externalId, weight, formatQuantity, flatShipping, location, favouritedBy, image} = req.body;
  
  
Record.create({listingId, artist, title, label, catno,format, releaseId, status, price, listed, comments, mediaCondition, sleeveCondition, acceptOffer, externalId, weight, formatQuantity, flatShipping, location, favoritedBy, image})
    .then((createdRecord) => {
      res.status(201).json(createdRecord);
    })
    .catch((err) => {
      res
        .status(500) // Internal Server Error
        .json(err);
    });
});

//update a record
router.put("/records/:id", (req, res, next) => {
    const { id } = req.params;
    const {listingId, artist, title, label, catno,format, releaseId, status, price, listed, comments, mediaCondition, sleeveCondition, acceptOffer, externalId, weight, formatQuantity, flatShipping, location, favoritedBy, image} = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Record.findByIdAndUpdate(id, {listingId, artist, title, label, catno,format, releaseId, status, price, listed, comments, mediaCondition, sleeveCondition, acceptOffer, externalId, weight, formatQuantity, flatShipping, location, favoritedBy, image}, {new:true})
      .then((updatedRecord) => {
        res.status(200).json(updatedRecord)
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
 
//delete a record  
router.delete('/records/:id', (req, res)=>{
    const { id } = req.params;
  
    if ( !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Record.findByIdAndRemove(id)
      .then(() => {
        res
          .status(202)  //  Accepted
          .send(`Document ${id} was removed successfully.`);
      })
      .catch( err => {
        res.status(500).json(err);
      })
  });  
 

module.exports = router;
