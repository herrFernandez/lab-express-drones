const express = require('express');
const router = express.Router();

const { Drone } = require("../models/Drone.model");

/* GET drones page */
router.get('/drones', async (req, res, next) => {
  const drones = await Drone.find()
  console.log(drones);
  res.render("drones/list", { drones })
});

// router.get('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
// });

// router.post('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
// });

// router.get('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
// });

// router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
// });

// router.post('/drones/:id/delete', (req, res, next) => {
//   // Iteration #5: Delete the drone
//   // ... your code here
// });

module.exports = router;
