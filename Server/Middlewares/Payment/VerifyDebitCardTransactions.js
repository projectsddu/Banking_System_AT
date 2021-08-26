const Account = require("../../Collections/AccountModel")
const DebitCard = require("../../Collections/DebitCardModel")

const verifyDebitCardTransaction = async function (req, res, next) {
    try {
        const acNum = req.params.acNumber;

        const accountExist = await Account.findOne({
            _id: acNum
        })

        if (accountExist) {
            req.current_ac = accountExist

            const debitCard = await DebitCard.findOne({
                accountAttached: accountExist
            })

            if (debitCard) {
                req.current_debitcard = debitCard;
            }
            else {
                throw "Debit Card with this account do not exists"
            }
        }
        else {
            throw "Account Do not exists"
        }
        // console.log("Jeinaskndkjsandjkznj")

        next();
    }
    catch (e) {
        console.log(e.toString())
        return res.json({ "Error:": e.toString(), "redirect": true })
    }
}
module.exports = verifyDebitCardTransaction