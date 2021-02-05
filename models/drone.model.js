const mongoose = require("mongoose");

let droneSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    propellers:{ 
        type: Number,
        min: 1
    },
    maxSpeed:{
        type: Number
    }
})

let droneModel = mongoose.model('drone', droneSchema)

module.exports = droneModel
