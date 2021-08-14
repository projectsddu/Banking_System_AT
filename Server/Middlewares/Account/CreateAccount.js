const AccountType = require("../../Collections/AccountTypeModel")
const createACMiddleware = async function (req, res, next) {
    try {
        if (!(req.body.hasOwnProperty("isEcard")
            && req.body.hasOwnProperty("acInitBal")
            && req.body.hasOwnProperty("acType"))) {
            console.log(req.body.hasOwnProperty("isEcard"))
            throw "must require all account values";
        }
        else {
            const acType = await AccountType.findOne({
                accountTypeName: req.body.acType
            })
            console.log(acType)
            if (!acType) {
                throw "No account type found"
            }
            else {
                if (req.body.acInitBal >= acType.minimumAccountBalance) {
                    console.log(req.body.acInitBal)
                    req.create_account = true
                    req.acType = acType;
                }
                else {
                    throw "Minimum balance required!"
                }
            }
        }

        next()
    }
    catch (e) {
        return res.json({ "Error:": "In Create AC  middleware" + e.toString() })
    }
}
module.exports = createACMiddleware