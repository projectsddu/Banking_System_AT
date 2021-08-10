/*********************************************
 * getAccountDetails:{
    "account_id",
    "pin"
},cookie->Imp 
  
 * craeteAccount:{
    "ac_type","user_id","ac_bal"
 }
********************************************/

const express = require("express");
const router = express.Router()
const Account = require("../Collections/AccountModel")
const User = require("../Collections/UserModel")
// const AccountType = require("../Collections/AccountTypeModel")

router.post("/account/getAccountDetails", async (req, res) => {

    //Fetch Data from DB
    try {
        // pin check middlewares
        const ac_details = await Account.findOne({ _id: req.body["account_id"] })
        return res.JSON(ac_details)
    }
    catch (e) {
        console.log(e.toString())
        return res.JSON({ "Error:": "Sorry we don't have any account with this A/C id" })
    }

})

router.post("/account/createAccount", async (req, res) => {
    try {
        const user_obj = await User.findOne({ _id: req.body["user_id"] })
        const accountType = req.body["ac_type"]
        const accountBalance = req.body["ac_bal"]
        const account = await Account({
            accountOwner: user_obj,
            accountType,
            accountBalance,
            isEcardissued: false,
        })
    }
    catch (e) {
        console.log(e.toString())
        return res.JSON({ "Error:": "Sorry We could not create your account at this time" })
    }
})
module.exports = router;