const express = require("express");
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")

router.post("/home/index", [authenticate], async (req, res) => {
    try {
        if (req.is_authenticated) {
            return res.json({ "data": req.current_user, "Success:": true });
        }
        else {
            return res.json({ "Error": "Hey you are not authenticated!!", "redirect": "true" });
        }
    }
    catch (e) {
        return res.json({ "Error": e.toString() });
    }
})

module.exports = router;