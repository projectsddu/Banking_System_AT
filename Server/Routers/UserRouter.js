const express = require("express");
const router = express.Router()
const verifyDetails = require("../Middlewares/VerifyDetails")
const User = require("../Collections/UserModel")

router.post("/user/add_user", verifyDetails, async (req, res) => {
    console.log(req.create_user)
    if (req.create_user) {

        const new_user = await User({
            firstName: "keval",
            middleName: "Jignesh",
            lastName: "Gandhi",
            address: "101 Adhiraj Appt opp core house",
            aadharNo: "585644646646",
            panCardNo: "GJ01iwejriwejio",
            DOB: new Date(),
            mobileNo: "+91 9879540038",
            nodeName: "ABCD212sanikn"
        }).save()
        res.send("Success")
    }
    else {
        res.send("user already exists")
    }
})

module.exports = router;