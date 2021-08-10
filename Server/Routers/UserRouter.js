const express = require("express");
const router = express.Router()
const verifyDetails = require("../Middlewares/VerifyDetails")
const User = require("../Collections/UserModel")

router.post("/user/add_user", verifyDetails, async (req, res) => {
    console.log(req.create_user)
    if (req.create_user) {

        const new_user = await User(req.body).save()
        return res.send("Success")
    }
    else {
        return res.send("user already exists")
    }
})

module.exports = router;