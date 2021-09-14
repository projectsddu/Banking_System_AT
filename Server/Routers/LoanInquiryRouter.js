const express = require("express");
const router = express.Router();
const authenticate = require("../Middlewares/Authenticate");

router.post = ("/verifyLoanInquiryDetails", [authenticate], async (req, res) => {
    try {
        // 
    }
    catch (e) {
        console.log(e.toString())
        return res.json({ "Success:": false })
    }
})

module.exports = router;