const Account = require("../../Collections/AccountModel")
const createDebitCardMiddleware = async function (req, res, next) {
    try {

        const acNum = req.params.acNum

        const ac = await Account.findOne({
            _id: acNum
        })

        if (ac && !ac.isEcardIssued) {
            ac.isEcardIssued = true
            req.ac = ac

            req.makeDebitStatus = true
        }
        else {
            if (ac.isEcardIssued) {
                throw "Ecard already issued"
            }
            else {
                throw "No account found"
            }
        }
        next()
    }
    catch (e) {
        return res.json({ "Error:": "In Create Debit Card middleware" + e.toString() })
    }
}
module.exports = createDebitCardMiddleware