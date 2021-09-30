const express = require("express");
const router = express.Router()

router.post("/logout", (req, res) => {
    console.log("Hello from logout page");
    res.clearCookie("LoginToken")
    // res.cookies.set('LoginToken', {expires: Date.now()})
    res.status(200).send("user logout!!");
})

module.exports = router