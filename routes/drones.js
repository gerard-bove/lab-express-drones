const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(result => {
    res.render('drones/list', {drones: result})
  })
  .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(() =>{
    res.redirect('/drones')
  })
  .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
  .then(result => {
    console.log('DRONE NAME: ', result.name)
    res.render('drones/update-form', {drone: result})
  })
  .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
  .then(() => {
    res.redirect('/drones')
  })
  .catch(err => console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(err => console.log(err))
});

module.exports = router;
