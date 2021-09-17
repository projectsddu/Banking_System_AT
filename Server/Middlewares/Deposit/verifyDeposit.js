const Account = require("../../Collections/AccountModel");

const verifyDeposit = async function(req, res, next) {
    try {

        const acNum = req.body.acNumber;

        const accountExist = await Account.findOne({
            _id: acNum,
            accountOwner: req.current_user
        })


        if(accountExist) {
            // success
            req.current_ac = accountExist;
            req.accountAttchedWithUser = true;
        }
        else {
            // fail
            // req.accountAttchedWithUser = false;
            throw "This is not your A/C!!"
        }


        next();
    }

    catch(e) {
        console.log(e.toString())
        return res.json({ "Error:": e.toString() })
    }
}

module.exports = verifyDeposit