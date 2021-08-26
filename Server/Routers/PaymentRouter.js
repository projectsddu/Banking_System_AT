const express = require('express')
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")
const Account = require("../Collections/AccountModel")
const verifyDebitCardTransaction = require('../Middlewares/Payment/VerifyDebitCardTransactions')

router.post("/payment/debit/:acNumber", [authenticate, verifyDebitCardTransaction], async (req, res) => {
    try {
        if (req.is_authenticated) {
            // const acNum = req.params.acNumber;

            // verify receiver details
            const { fullName, accountNumber, email, amount, reason } = req.body;

            if (!fullName || !accountNumber || !email || !amount || !reason) {
                return res.status(422).json({ Error: "All fields are required!!" });
            }

            try {
                // fullname verification remaining

                const receiverAccount = await Account.findOne({
                    _id: accountNumber
                })

                if (receiverAccount) {
                    if (req.current_ac.accountBalance < amount) {
                        return res.status(422).json({ Error: "NO sufficient amount" });
                    }
                    else {
                        // Success code to be written
                        if (req.current_debitcard.cardNumber == accountNumber) {
                            return res.status(422).json({ Error: "same card number not valid!!" });
                        }
                        else {
                            return res.json({ "Success:": true });
                        }
                    }
                }
                else {
                    return res.status(422).json({ Error: "Receiver has no account.." });
                }
            }

            catch (e) {
                console.log(e.toString());
            }

        }
    }
    catch (e) {
        console.log(e.toString())
        return res.json({ "Success:": false })
    }
})
module.exports = router;