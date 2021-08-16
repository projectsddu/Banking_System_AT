const Account = require("../../Collections/AccountModel");
const createCreditCardMiddleware = async function (req, res, next) {
    try {
        const acNum = req.params.acNum
        const ac = await Account({
            _id: acNum
        })

        if (ac && !ac.isEcardIssued) {

            req.ac = ac;
            req.makeCreditStatus = true;
        }
        else {
            console.log("insakansdknaskndkasnd")
            throw "No account found"
        }
        next()
    } catch (error) {
        return res.json({ "Error:": "In Create Credit Card middleware" + error.toString() })
    }
}

module.exports = createCreditCardMiddleware