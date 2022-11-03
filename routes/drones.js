const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const dbDrones = await Drone.find({})
    console.log(dbDrones)
    res.render("drones/list", {dbDrones})
  }
  catch(err) {
    console.log(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    res.render("drones/create-form")
  }
  catch(err){console.log(err)}
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const newDrone = await Drone.create(req.body)
    console.log("drone created!🚀")
    res.redirect("/drones")
  }
  catch(err){console.log(err)}
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
