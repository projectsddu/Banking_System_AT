const mongoose = require("mongoose")
const Account = mongoose.Schema({
    accountOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },

    accountType: {
        type: String,
        required: true
    },

    accountBalance: {
        type: Number,
        required: true
    },

    isEcardissued: {
        type: Boolean,
        required: true
    }
})
const AccountModel = mongoose.model("ACCOUNT", Account)
module.exports = AccountModel