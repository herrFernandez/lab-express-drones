// Iteration #1
const { default: mongoose } = require("mongoose");
const { Drone } = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

require("../db");

// const createDrones = Drone.create(drones);

// console.log(createDrones);

// const createDrones = Drone.create(drones);
// try {
//   console.log("Successfully inserted", createDrones);
//   mongoose.connection.close();
// } catch (err) {
//   handleError(err);
// }

Drone.create(drones)
  .then((done) => {
    console.log("Successfully inserted", done);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });

// const createDrones = Drone.create([
//   { name: "Creeper XL 500" },
//   { name: "Racer 57" },
//   { name: "Courier 3000i" },
// ])

//   .then((done) => {
//     console.log("Successfully inserted", done);
//     console.log(createDrones);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.error(err);
//   });
