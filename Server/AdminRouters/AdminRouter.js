const express = require("express");
const router = express.Router()
const authenticate = require("../Middlewares/Admin/authenticateAdmin")
const verifyAdminDetails = require("../Middlewares/Admin/verifyAdminDetails")
const Admin = require("../Collections/AdminModel")


router.post("/admin/create_admin", [verifyAdminDetails], async (req, res) => {

    try {

        const { firstName, middleName, lastName, pinNo } = req.body;

        // data is verified in middlewares.

        const admin = await Admin({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            pinNo: pinNo
        })

        const adminSaved = await admin.save();

        if (!adminSaved) {
            throw "Error creating admin!!!";
        }

        return res.json({ "Success:": true });
    }
    catch (e) {
        console.log(e.toString())
    }


})

router.post("/admin/loginAdmin", async (req, res) => {
    try {
        const { username, pinNo } = req.body
        if (!username || !pinNo) {
            throw "Fields cannot be empty!"
        }
        else {
            const usernames = String(username).split("_")
            console.log(usernames, pinNo)
            const admin = await Admin.findOne({
                firstName: usernames[0],
                middleName: usernames[1],
                lastName: usernames[2],
                pinNo: pinNo
            })
            // const admin = await Admin.findOne({
            //     firstName: "jenil",
            //     middleName: "j",
            //     lastName: "gandhi",
            //     pinNo: "3456"
            // })
            console.log(admin)
            if (admin) {
                const token = await admin.generateAuthToken()
                const savedCookie = res.cookie("LoginToken", token, {
                    expires: new Date(Date.now() + 2589200000),
                    httpOnly: true,
                });
                const userCookie = res.cookie("UserId", admin._id, {
                    expires: new Date(Date.now() + 2589200000),
                    httpOnly: true,
                });
                return res.send("Success")
            }
            else {
                throw "No such admin found!!"
            }
        }
    }
    catch (e) {
        return res.json({ "Error:": e.toString() })
    }
})
module.exports = router;