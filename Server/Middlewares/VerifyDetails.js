const User = require("../Collections/UserModel")
const verifyDetails = async function (req, res, next) {
    try {

        console.log(req.body["DOB"])
        let firstName = req.body["firstName"].toLowerCase()
        let middleName = req.body["middleName"].toLowerCase()
        let lastName = req.body["lastName"].toLowerCase()
        let aadharNo = req.body["aadharNo"]
        let panCardNo = req.body["panCardNo"]
        req.body["firstName"] = req.body["firstName"].toLowerCase()
        req.body["middleName"] = req.body["middleName"].toLowerCase()
        req.body["lastName"] = req.body["lastName"].toLowerCase()
        const userno = await User.find({
            //here
            firstName,
            middleName,
            lastName,
            aadharNo,
            panCardNo

        }).count()
        console.log(userno)
        if (userno == 0) {
            req.create_user = true;
        }
        else {
            req.create_user = false;
        }
        next()
    }
    catch (e) {
        console.log(e.toString())
    }
}
module.exports = verifyDetails