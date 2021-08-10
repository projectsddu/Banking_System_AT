const mongoose = require("mongoose")
const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    aadharNo: {
        type: String,
        required: true
    },
    panCardNo: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    nodeName: {
        type: String,
        required: true
    }

})
const UserModel = mongoose.model("USER", User)
module.exports = UserModel