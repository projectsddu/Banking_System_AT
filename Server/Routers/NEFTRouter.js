const express = require("express");
const router = express.Router();
const authenticate = require("../Middlewares/Authenticate");
const verifyNEFTDetails = require("../Middlewares/NEFT/verifyNEFTDetails");

router.post("/verifyNEFT/:acNum", [authenticate, verifyNEFTDetails], async (req, res) => {
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
        }

    }
    catch (e) {
        console.log(e.toString())
        return res.json({ "Success:": false })
    }
})