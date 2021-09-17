const express = require("express");
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")
const getAllTransaction = require("../Utilies/Transactions/getAllTransactions")
// const 

router.post("/home/getDetails", [authenticate], async (req, res) => {
    try {

        if (req.is_authenticated) {

            // console.log("Getting details")
            return res.json({ "Success": true, "data": req.current_user })
        }
        else {
            return res.json({ "Error:": "You must be authenticated", "redirect": true })
        }
    }
    catch (e) {
        return res.json({ "Error:": e.toString() })
    }
})

router.post("/home/index", [authenticate], async (req, res) => {
    try {
        if (req.is_authenticated) {
            console.log()
            console.log("jenil")
            const data = await getAllTransaction(req.current_user)
            return res.json({ "Success": true, "data": req.current_user, "userData": data })
        }
        else {
            console.log("jenil1")
            return res.json({ "Error:": "You must be authenticated" })
        }
    }
    catch (e) {
        console.log(e.toString())
        console.log("jenil2")
        return res.json({ "Error:": e.toString() })
    }
})

module.exports = router;