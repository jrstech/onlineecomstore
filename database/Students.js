const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullname: String,
    fathername: String,
    mothername: String,
    mobilenumber: Number,
    // dob: Date,
    gender: Boolean,
    state: String,
    district: String,
    block: String,
    town: String,
    pin: Number
    // profilephoto: String,
    // highschoolmarksheet: String,
    // intermediatemarksheet : String,
    // check: Boolean
});

module.exports = mongoose.model("student", studentSchema);