const express = require("express")
const app = express()
const http = require('http');
const cookieParser = require("cookie-parser")
const logger = require("./logger")
// const HomeRouter = require("./Routers/HomeRouter")
// const AccountRouter = require("./Routers/AccountRouter")
// const CardRouter = require("./Routers/CardRouter")
// const PaymentRouter = require("./Routers/PaymentRouter")
// const RTGSRouter = require("./Routers/RTGSRouter")
// const NEFTRouter = require("./Routers/NEFTRouter")
// const LoanInquiryRouter = require("./Routers/LoanInquiryRouter")
// const DepositRouter = require("./Routers/DepositRouter")
// const DepositModel = require("./Collections/DepositModel")
// const LoanInquiryRouter = require("./Routers/LoanInquiryRouter_1")

require("./Database/connect")
const HOST = '127.0.0.1';
const PORT = 8000;


// Creating server 
app.listen(PORT, () => {
    logger.add_log("Server running at port 8000")
    console.log(`Server running at http://${HOST}:${PORT}/`);
})

// Test path for api
app.get("/testing", (req, res) => {
    res.send("Hello world");
})


app.use(express.json())
app.use(cookieParser())
//Routers defined here
app.use(require('./Routers/LoanInquiryRouter.js'));
// app.use(require('./Routers/LoanInquiryRouter_1.js'));
app.use(require('./Routers/HomeRouter.js'));
app.use(require('./Routers/UserRouter.js'));
app.use(require('./Routers/AccountRouter.js'));
app.use(require('./Routers/PaymentRouter.js'));
app.use(require('./Routers/CardRouter.js'));
app.use(require('./Routers/RTGSRouter.js'));
app.use(require('./Routers/NEFTRouter.js'));
app.use(require('./Routers/LoanRouter.js'));
app.use(require('./Routers/LogoutRouter.js'));
app.use(require('./Routers/DepositRouter.js'));
app.use(require("./AdminRouters/AdminRouter.js"))
app.use(require("./AdminRouters/LogoutRouter.js"))


