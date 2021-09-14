const express = require('express')
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")
const Account = require("../Collections/AccountModel")
const Transaction = require("../Collections/TransactionModel")
const User = require("../Collections/UserModel")
const verifyDebitCardTransaction = require('../Middlewares/Payment/VerifyDebitCardTransactions')

router.post("/payment/debit/:acNumber", [authenticate, verifyDebitCardTransaction], async (req, res) => {
    try {
        console.log(await req.body)
        if (req.is_authenticated) {
            // const acNum = req.params.acNumber;

            // verify receiver details
            const { fullName, acNumber, email, amount, reason } = req.body;

            if (!fullName || !acNumber || !email || !amount) {
                return res.status(422).json({ Error: "All fields are required!!" });
            }

            try {
                // fullname verification remaining

                const receiverAccount = await Account.findOne({
                    _id: acNumber
                })

                if (receiverAccount) {
                    if (parseInt(req.current_ac.accountBalance) < parseInt(amount)) {
                        console.log("here")
                        return res.status(422).json({ Error: "Not enough balanace to do transaction!!" });
                    }
                    else {
                        // Success code to be written
                        if (req.current_debitcard.cardNumber == acNumber) {
                            return res.status(422).json({ Error: "same card number not valid!!" });
                        }
                        else {
                            // Add data to transactions
                            const recieverUser = await User.findOne({
                                _id: receiverAccount.accountOwner
                            })

                            receiverAccount.accountBalance = receiverAccount.accountBalance + parseInt(amount)
                            req.current_ac.accountBalance = parseInt(req.current_ac.accountBalance) - parseInt(amount)


                            let st1 = await receiverAccount.save()
                            let st2 = await req.current_ac.save()

                            const trxObj = Transaction({
                                sender: req.current_user,
                                senderAc: req.current_ac,
                                receiverAc: receiverAccount,
                                receiver: recieverUser,
                                amount: amount,
                                transactionDateTime: Date.now(),
                                mode: "CARD",
                                reason: reason,
                                isPending: false
                            })

                            let st3 = await trxObj.save()
                            if (!st1 || !st2 || !st3) {
                                throw "Error saving your data"
                            }
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

router.post("/verifyLoanInquiryDetails/testing", async (req, res) => {
    res.send("Success from now")
})

//For NEFT
module.exports = router;