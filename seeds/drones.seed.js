const mongoose = require('mongoose');

const Drone = require('../models/Drone.model');

require("../db");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  .then(result => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));