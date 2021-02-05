const express = require('express');

// require the Drone model here

const router = express.Router();

let droneModel = require('../models/drone.model.js')

router.get('/drones', (req, res, next) => {
  droneModel.find()
  .then((drone) => {
    res.render('drones/list.hbs', {drone})
  })
  .catch((error) => {
    console.log(error)
  })
});

router.get('/drones/create', (req, res, next) => {
  droneModel.create()
  .then((drone) => {
    res.render('drones/create-form.hbs', {drone})
  })
  .catch((error) => {
    console.log(error)
  })
});

router.post('/drones/create', (req, res, next) => {
  const {myDrone, myPropeller, myMaxSpeed} = req.body
    let myNewDrone = {
        name: myDrone,
        propellers: myPropeller,
        maxSpeed: myMaxSpeed,
    }
  droneModel.create(myNewDrone)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((error) => {
    console.log(error)
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id

  droneModel.findById(id)
  .then((drone) => {
      res.render('drones/update-form.hbs', {drone})
  })
  .catch((error) => {
      console.log(error)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id
    const {myDrone, myPropeller, myMaxSpeed} = req.body

    let editedDrone = {
      name: myDrone,
      propellers: myPropeller,
      maxSpeed: myMaxSpeed,
    }
    droneModel.findByIdAndUpdate(id, editedDrone, {new: true})
    .then(() => {
        res.redirect('/drones')
    })
    .catch(() => {
        console.log('Edit failed')
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  let id = req.params.id
  droneModel.findByIdAndDelete(id)
      .then(() => {
          res.redirect('/drones')
      })
      .catch(() => {
          console.log('Delete failed')
      })
});

module.exports = router;
