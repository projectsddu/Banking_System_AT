const express = require("express");
const router = express.Router();
const authenticate = require("../Middlewares/Authenticate");
const verifyLoan = require("../Middlewares/Loan/verifyLoan")

router.post("/loan/addUserLoan",[authenticate,verifyLoan],async(req,res)=>{
    console.log("hello here")
    return res.json({ "grant": req.grantLoan, "loanValue": req.LoanValue, "interestRate": req.interestRate})
})

module.exports = router;