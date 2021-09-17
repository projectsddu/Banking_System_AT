const mongoose = require("mongoose")

const Deposit = mongoose.Schema({
    dateOfIssue: {
        type: Date,
        required: true
    },
    maturityDate: {
        type: Date,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    principleAmount: {
        type: Number,
        required: true
    }

})

const DepositModel = mongoose.model("DEPOSIT", Deposit)
module.exports = DepositModel