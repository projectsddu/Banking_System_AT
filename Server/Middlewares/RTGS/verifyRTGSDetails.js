const Account = require("../../Collections/AccountModel");

const verifyRTGSDetails = async function (req, res, next) {
    try {
        console.log(req.body)
        console.log("in middleware");
        const acNum = req.params.acNum;

        const accountExist = await Account.findOne({
            _id: acNum
        })

        if (accountExist) {
            req.current_ac = accountExist;

            // const beneficiaryAc = req.body.acNumber;

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
        console.log(e.toString())
        return res.json({ "Error:": e.toString() })
    }
}
module.exports = verifyRTGSDetails