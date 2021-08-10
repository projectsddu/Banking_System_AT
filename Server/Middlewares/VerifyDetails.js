const User = require("../Collections/UserModel")
const verifyDetails = async function (req, res, next) {
    const userno = await User.findOne({
        firstName: "dfgsdfsdffdsfsd"
    }).estimatedDocumentCount()
    console.log(userno)
    if (userno == 0) {
        req.create_user = true;
    }
    else {
        req.create_user = false;
    }



    next()
}
module.exports = verifyDetails