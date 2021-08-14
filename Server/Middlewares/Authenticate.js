const User = require("../Collections/UserModel")
const jwt = require("jsonwebtoken")
const authenticate = async function (req, res, next) {
    try {
        const uid = req.cookies.LoginToken
        const user_id = jwt.verify(uid, "SECRETKEY")
        // console.log(user_id._id)
        const user = await User.findOne({
            _id: user_id._id
        })
        if (!user) {
            req.is_authenticated = false;
        }
        else {
            req.is_authenticated = true;
            // console.log(user.firstName)
            // return res.send("User found")
        }
        next()

    }
    catch (e) {
        return res.json({ "Error:": "Error authenticating user" })
    }

}
module.exports = authenticate