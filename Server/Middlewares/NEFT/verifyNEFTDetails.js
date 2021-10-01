const Account = require("../../Collections/AccountModel");
const logger = require("../../logger")
const verifyNEFTDetails = async function (req, res, next) {
    try {
        const acNumber = req.params.acNum;

        const accountExist = await Account.findOne({
            _id: acNumber
        })

        if (accountExist) {
            req.current_ac = accountExist

            const beniAcExist = await Account.findOne({
                _id: req.body.beneficiaryAcNum
            })

            if (beniAcExist) {
                req.beneficiaryAc = beniAcExist;
            }
            else {
                throw "Beneficiary account does not exist!!!"
            }
        }
        else {
            throw "Account do not exists!!!"
        }

        next();
    }

    catch (e) {
        logger.add_log("Problem in verifyDebitCardTransaction middleware " + e.toString(), "ERROR")
        console.log(e.toString())
        return res.json({ "Error:": e.toString() })
    }
}

module.exports = verifyNEFTDetails