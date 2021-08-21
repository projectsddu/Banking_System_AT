const express = require("express");
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")
// const 

router.post("/home/getDetails", [authenticate], async (req, res) => {
    try {

        if (req.is_authenticated) {
            // console.log("Getting details")s
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
            return res.json({ "Success": true, "data": req.current_user })
        }
        else {
            return res.json({ "Error:": "You must be authenticated" })
        }
    }
    catch (e) {
        return res.json({ "Error:": e.toString() })
    }
})

module.exports = router;