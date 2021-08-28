const express = require("express");
const router = express.Router();
const verifyRTGSDetails = require("../Middlewares/RTGS/verifyRTGSDetails");
const authenticate = require("../Middlewares/Authenticate")
const Transaction = require("../Collections/TransactionModel")
const User = require("../Collections/UserModel")

router.post("/verifyRTGS/:acNum", [authenticate, verifyRTGSDetails], async (req, res) => {
    try {
        const { beneficiaryName, beneficiaryAcNum, ifscCode, amount, reason } = req.body;

        if (!beneficiaryName || !beneficiaryAcNum || !ifscCode || !amount || !reason) {
            return res.status(200).json({ Error: "All fields are required!!" });
        }

        if (req.current_ac.accountBalance < amount) {
            return res.status(200).json({ Error: "Not enough amount to do RTGS!!" });
        }
        else {

            const beneficiaryUser = await User.findOne({
                _id: req.beneficiaryAc.accountOwner
            })



            req.beneficiaryAc.accountBalance = req.beneficiaryAc.accountBalance + parseInt(amount);
            req.current_ac.accountBalance = req.current_ac.accountBalance - parseInt(amount);

            let st1 = await req.beneficiaryAc.save();
            let st2 = await req.current_ac.save();

            const trxObj = await Transaction({
                sender: req.current_user,
                senderAc: req.current_ac,
                receiverAc: req.beneficiaryAc,
                receiver: beneficiaryUser,
                amount: amount,
                transactionDateTime: Date.now(),
                mode: "RTGS",
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
    catch (e) {
        console.log(e.toString())
        return res.json({ "Success:": false })
    }
})

module.exports = router;