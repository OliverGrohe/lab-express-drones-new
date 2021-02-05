// Iteration #1

const mongoose = require('mongoose')

require('../configs/db.config.js')

let droneModel = require('../models/drone.model.js')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

droneModel.insertMany(drones)
.then(() => {
    console.log('Data seeded')
    mongoose.connection.close()
})
.catch((error) => {
    console.log(error)
}) 