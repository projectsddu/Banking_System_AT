const express = require("express")
const router = express.Router()
const User = require("../Collections/UserModel")
const CreditCard = require("../Collections/CreditCardModel")
const DeditCard = require("../Collections/DebitCardModel")
const Account = require("../Collections/AccountModel")
// const DebitCardModel = require("../Collections/DebitCardModel")

router.post("/cards/getUserDebitCards", async (req, res) => {
    try {
        // const user_id = await User.findOne({ _id: req.body["user_id"] })
        // const user_ac = await Account.find({accountAttached:})
        // const cards = await DebitCard({ accountAttached.accountOwner: user_id })

    }
    catch (e) {
        console.log(e.toString())
        return res.JSON({ "Error": "Sorry we are unable to process your request please try again later!" })
    }
})
module.exports = router;