const express = require("express")
const router = express.Router()
const User = require("../Collections/UserModel")
const CreditCard = require("../Collections/CreditCardModel")
const DeditCard = require("../Collections/DebitCardModel")
const Account = require("../Collections/AccountModel")
const authenticate = require("../Middlewares/Authenticate")
// const DebitCardModel = require("../Collections/DebitCardModel")

router.post("/cards/getUserDebitCards", [authenticate], async (req, res) => {
    try {
        if (req.is_authenticated) {
            const allAc = await Account.find({
                accountOwner: req.current_user
            })
            const allDebitCard = []
            allAc.map((e) => {
                const acId = e._id
                const debitcard = DebitCard.findOne({
                    accountAttached: e
                })
                allDebitCard.push(debitcard)
            })

            return res.json({ "data": debitcard, "Success:": true })

        }
        else {
            return res.json({ "Error": "Hey you are not authenticated", "redirect": "true" })
        }
    }
    catch (e) {
        console.log(e.toString())
        return res.JSON({ "Error": "Sorry we are unable to process your request please try again later!" })
    }
})

router.post("/cards/getUserCreditCards", async (req, res) => {
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