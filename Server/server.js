const express = require("express")
const app = express()
const http = require('http');
const cookieParser = require("cookie-parser")
const HomeRouter = require("./Routers/HomeRouter")
const AccountRouter = require("./Routers/AccountRouter")
const CardRouter = require("./Routers/CardRouter")
const PaymentRouter = require("./Routers/PaymentRouter")

require("./Database/connect")
const HOST = '127.0.0.1';
const PORT = 8000;


// Creating server 
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
})

// Test path for api
app.get("/testing", (req, res) => {
    res.send("Hello world");
})

app.use(express.json())
app.use(cookieParser())

//Routers defined here
app.use(require('./Routers/HomeRouter.js'));
app.use(require('./Routers/UserRouter.js'));
app.use(require('./Routers/AccountRouter.js'));
app.use(require('./Routers/PaymentRouter.js'));
app.use(require('./Routers/CardRouter.js'));


