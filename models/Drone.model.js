// Iteration #1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dronesSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    propellers: {
        type: Number,
    },
    maxSpeed: {
        type: Number,
    },

});

const Drone = mongoose.model("drone", dronesSchema);

module.exports = { Drone };