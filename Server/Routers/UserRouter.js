const express = require("express");
const router = express.Router()
const verifyDetails = require("../Middlewares/VerifyDetails")
const authenticate = require("../Middlewares/Authenticate")
const User = require("../Collections/UserModel")
const test = require("../Middlewares/Test")

router.post("/user/add_user", verifyDetails, async (req, res) => {
    console.log(req.create_user)
    if (req.create_user) {

        const new_user = await User(req.body).save()
        return res.json({ "Success": "Success" })
    }
    else {
        return res.json({ "Error:": "user already exists" })
    }
})
router.post("/user/login_user", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        if (!username || !password) {
            return res.json({ "Error": "Fields cannot be empty!" })
        }
        else {
            // your username is firstname_middlename_lastname
            const user_names = username.split("_")
            const user = await User.findOne({
                firstName: user_names[0],
                middleName: user_names[1],
                lastName: user_names[2]
            })
            // console.log("Name:"+user_names[0] + user_names[1] + user_names[2]);
            if (!user) {
                return res.json({ "Error:": "No user found" })
            }
            else {

                console.log("Current user:" + user.firstName + " " + user.middleName + " " + user.lastName);
                const token = await user.generateAuthToken()

                // Saving current users session
                const savedCookie = await res.cookie("LoginToken", token, {
                    expires: new Date(Date.now() + 2589200000),
                    httpOnly: true,
                });
                const userCookie = await res.cookie("UserId", user._id, {
                    expires: new Date(Date.now() + 2589200000),
                    httpOnly: true,
                });
                // End of saving session.post

                res.send("Success")
            }
        }
    }
    catch (e) {
        console.log("Error:" + e.toString())
    }

})

router.post("/user/testing", [authenticate], async (req, res) => {
    if (req.is_authenticated) {
        console.log("Authenticated!")
    }
    else {
        console.log("Not authenticated")
    }
    return res.send("Jenil")
})

module.exports = router;