const express = require("express");
const router = express.Router()

router.post("/admin/logout", (req, res) => {
    console.log("Hello from logout page");
    res.clearCookie("LoginToken")
    // console.log(res.cookie)
    res.status(200).send("user logout!!");
})

module.exports = router