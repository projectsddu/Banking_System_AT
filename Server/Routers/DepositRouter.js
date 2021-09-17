const express = require("express")
const router = express.Router()
const authenticate = require("../Middlewares/Authenticate")
const verifyDeposit = require("../Middlewares/Deposit/verifyDeposit");
const Deposit = require("../Collections/DepositModel");
const FixedDeposit = require("../Collections/FixedDepositModel")
const RecurringDeposit = require("../Collections/RecurringDepositModel")

router.post("/fd/addNewFD", [authenticate, verifyDeposit], async (req, res) => {

    try{
        if(req.is_authenticated && req.accountAttchedWithUser) {
            const {principleAmount, maturity, acNumber, isRecurring} = req.body;

            if(!principleAmount || !maturity || !acNumber || !isRecurring) {
                return res.status(422).json({ Error: "All fields are required!!" });
            }

            const curDate = new Date();
            const maturityDate = new Date(
                curDate.getFullYear() + maturity,
                curDate.getMonth(),
                curDate.getDate(),
                curDate.getHours(),
                curDate.getMinutes(),
                curDate.getSeconds()
            );

            const depositobj = await Deposit({
                dateOfIssue: new Date(),
                maturityDate: maturityDate,
                interestRate: 8,
                principleAmount: principleAmount
            })

            const depositStatus = await depositobj.save();

            if(!depositStatus) {
                throw "Error while creating Deposit Object";
            }

            if(isRecurring) {

                // create RecurringDeposit object

                const recurringAmount = req.body.recurringAmount
                
                const recurObj = await RecurringDeposit({
                    deposit: depositobj,
                    recurringDepositAmount: recurringAmount
                })

                const recurringStatus = await recurObj.save();

                if(!recurringStatus) {
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

                if(!fixedStatus) {
                    throw "Error while creating FixedDeposit Object!!";
                }
            }
        }
    }
    catch(e) {
        console.log(e.toString())
        return res.json({ "Success:": false })
    }
})

module.exports = router;