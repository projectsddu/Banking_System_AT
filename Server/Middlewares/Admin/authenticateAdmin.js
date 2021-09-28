const Admin = require("../../Collections/AdminModel")
const Account = require("../../Collections/AccountModel")
const jwt = require("jsonwebtoken")

const authenticateAdmin = async function (req, res, next) {
    try {
        const aid = req.cookies.LoginToken
        const admin_id = jwt.verify(aid, "SECRETKEY")
        const adminExist = await Admin.findOne({
            _id: admin_id._id
        })

        if (!adminExist) {
            throw "Admin is not authenticated!!!";
        }
        else {
            req.isAdminAuthenticated = true;
            req.current_admin = adminExist;
        }

        next();
    }
    catch (e) {
        return res.json({ "Error:": "Error authenticating user" })
    }
}
module.exports = authenticateAdmin
