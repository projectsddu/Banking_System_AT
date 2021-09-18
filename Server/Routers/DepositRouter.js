const express = require("express")
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")
const verifyDeposit = require("../Middlewares/Deposit/verifyDeposit");
const Deposit = require("../Collections/DepositModel");
const FixedDeposit = require("../Collections/FixedDepositModel")
const RecurringDeposit = require("../Collections/RecurringDepositModel")
const Transaction = require("../Collections/TransactionModel")

router.post("/fd/addNewFD", [authenticate, verifyDeposit], async (req, res) => {

    try {
        if (req.is_authenticated && req.accountAttchedWithUser) {
            console.log("from deposit router");
            const { principleAmount, maturity, acNumber, depositType, recurringAmount } = req.body;

            if (!principleAmount || !maturity || !acNumber || !depositType) {
                throw "All fields are required!!";
            }

            const curDate = new Date();
            const maturityDate = new Date(
                curDate.getFullYear() + Number(maturity),
                curDate.getMonth(),
                curDate.getDate(),
                curDate.getHours(),
                curDate.getMinutes(),
                curDate.getSeconds()
            );

            // check validation related to recurring amount
            if (depositType === "recurringDeposit") {
                if (!recurringAmount) {
                    throw "Please provide recurring amount";
                }
            }

            const depositobj = await Deposit({
                dateOfIssue: new Date(),
                maturityDate: maturityDate,
                interestRate: 8,
                principleAmount: principleAmount,
                depositOwner: req.current_user,
                referenceAccount: req.current_ac
            })

            const depositStatus = await depositobj.save();

            if (!depositStatus) {
                throw "Error while creating Deposit Object";
            }
            else {
                req.current_ac.accountBalance -= principleAmount;
                req.current_ac.save();
                const trxObj = await Transaction({
                    sender: req.current_user,
                    senderAc: req.current_ac,
                    receiverAc: req.admin_account,
                    receiver: req.admin_user,
                    amount: principleAmount,
                    transactionDateTime: Date.now(),
                    mode: "FD",
                    reason: "FD:" + String(depositobj._id).substr(21, 24),
                    isPending: false

                })

                const trxStatus = await trxObj.save();

                if (!trxStatus) {
                    throw "Error while saving data!!"
                }

            }

            if (depositType === "recurringDeposit") {

                // create RecurringDeposit object

                const recurObj = await RecurringDeposit({
                    deposit: depositobj,
                    recurringDepositAmount: recurringAmount
                })

                const recurringStatus = await recurObj.save();

                if (!recurringStatus) {
                    throw "Error while creating RecurringObject!!";
                }

            }
            else {
                // create FixedDeposit object
                const fixedObj = await FixedDeposit({
                    deposit: depositobj,
                    FixedDepositAmount: principleAmount
                })

                const fixedStatus = await fixedObj.save();

                if (!fixedStatus) {
                    throw "Error while creating FixedDeposit Object!!";
                }
            }

            return res.json({ "Success:": true });
        }
    }
    catch (e) {
        console.log(e.toString())
        return res.json({ "Error": e.toString(), "Success:": false })
    }
})

router.post("/fd/getFDDetails", [authenticate], async (req, res) => {
    try {
        // current user fid all deposit object
        // make a list of deposit objects
        const allDeposits = await Deposit.find({
            depositOwner: req.current_user
        })

        const username = {
            "firstName": req.current_user.firstName,
            "lastName": req.current_user.lastName
        }

        return res.json({"depositData": allDeposits, "username": username,"Success:": true});

        // console.log(allDeposits);

        // return res.json("Success:", true)
    }
    catch (e) {
        console.log(e.toString())
        return res.json({ "Error": e.toString(), "Success:": false })
    }
})

module.exports = router;