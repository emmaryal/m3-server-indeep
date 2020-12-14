const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user.model");
const Record = require("../models/record.model");

//get all records
router.get("/records", (req, res, next) => {
  Record.find()
    .populate("favoritedBy")
    .then((allTheRecords) => {
      res.status(200).json(allTheRecords);
    })
    .catch((err) => {
      next(err);
    });
});

//create new record
router.post("/records", (req, res, next) => {
  const {
    title,
    artist,
    format,
    image,
    label,
    mediaCondition,
    sleeveCondition,
    weight,
    comments,
    catno,
    price,
  } = req.body;

  Record.create({
    title,
    artist,
    format,
    image,
    label,
    mediaCondition,
    sleeveCondition,
    favoritedBy: [],
    weight,
    comments,
    catno,
    price,
  })
    .then((createdRecord) => {
      res.status(201).json(createdRecord);
    })
    .catch((err) => {
      res
        .status(500) // Internal Server Error
        .json(err);
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

//update a record
router.put("/records/:id", (req, res, next) => {
  const { id } = req.params;
  const {
    listingId,
    artist,
    title,
    label,
    catno,
    format,
    releaseId,
    status,
    price,
    listed,
    comments,
    mediaCondition,
    sleeveCondition,
    acceptOffer,
    externalId,
    weight,
    formatQuantity,
    flatShipping,
    location,
    favoritedBy,
    image,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Record.findByIdAndUpdate(
    id,
    {
      listingId,
      artist,
      title,
      label,
      catno,
      format,
      releaseId,
      status,
      price,
      listed,
      comments,
      mediaCondition,
      sleeveCondition,
      acceptOffer,
      externalId,
      weight,
      formatQuantity,
      flatShipping,
      location,
      favoritedBy,
      image,
    },
    { new: true }
  )
    .then((updatedRecord) => {
      res.status(200).json(updatedRecord);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//delete a record
router.delete("/records/:id", (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Record.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202) //  Accepted
        .send(`Document ${id} was removed successfully.`);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get all users
/* router.get("/users", (req, res, next) => {
  User.find()
  
    .then((allTheUsers) => {
      res.status(200).json(allTheUsers);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}); */
//update favourites - add users to array
router.put("/users/:id/records/:recordId", (req, res, next) => {
  const { id, recordId } = req.params;

  if (
    !mongoose.Types.ObjectId.isValid(id) ||
    !mongoose.Types.ObjectId.isValid(recordId)
  ) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Record.findByIdAndUpdate(
    recordId,
    { $push: { favoritedBy: id } },
    { new: true }
  )
    .then((updatedRecord) => {
      res.status(200).json(updatedRecord);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get current user by session id
router.get("/users/:id", (req, res, next) => {
  console.log("req.params:", req.params);
  const { id } = req.params;
  console.log("id:", id);
  console.log("req.params:", req.params);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  User.findById(id)
    .then((foundUser) => {
      res.status(200).json(foundUser); // OK
    })
    .catch((err) => {
      res.status(500).json(err); // Internal Server Error
    });
});

module.exports = router;
