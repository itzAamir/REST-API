const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});


module.exports = mongoose.model("Cats", schoolSchema)
