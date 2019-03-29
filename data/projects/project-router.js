//server uses express
const express = require("express");

//Helper and Database
const projectHelper = require("./projectHelper.js");

//Router
const router = express.Router();

//PROJECTS CRUD-----------------------------------------------------------------------------------------
//POST
router.post("/", (req, res) => {
  let newProject = req.body;

  if (!newProject.description && !newProject.name) {
    res
      .status(400)
      .json({ errorMessage: "Need description and names!!!!!!!!" });
  } else {
    projectHelper.insert(newProject).then(projects => {
      res.status(201).json(projects.id);
    });
  }
});

//GET
router.get("/", (req, res) => {
  projectHelper
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Error retrieving projects" });
    });
});

//GET BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectHelper
    .get(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error getting project" });
    });
});

//Export Router
module.exports = router;
