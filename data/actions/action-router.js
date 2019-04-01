//server uses express
const express = require("express");

//Helper and Database
const actionHelper = require("./actionHelper.js");

//Router
const router = express.Router();

//ACTIONS CRUD---------------------------------------------
//POST
router.post("/", (req, res) => {
  let newAction = req.body;

  if (!newAction.description && !newAction.notes) {
    res
      .status(400)
      .json({ err: "Error, you need description and notes, please" });
  } else {
    actionHelper.insert(newAction).then(actions => {
      res.status(201).json(actions.id);
    });
  }
});

//Export Router
module.exports = router;
