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

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.droneId
  try {
    const drone = await Drone.findById(droneId)
    res.render("drones/update-form", drone)
  }
  catch (err) {console.log(err)}
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const drone = req.body;
  const droneId = req.params.droneId;
  console.log('this is the IDDDD', droneId)
  try {
      const test = await Drone.findByIdAndUpdate(droneId, drone)
      console.log('this is updated DRONE', test)
      res.redirect("/drones")
  }
  catch(err){
    console.log(err)}
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.droneId
  try {
    await Book.findByIdAndDelete(droneId)
    console.log("Drone deleted!")
    res.redirect("/drones")
  }
  catch(err) {
    console.log(err)
  }
  // ... your code here
});

module.exports = router;
