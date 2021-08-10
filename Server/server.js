const express = require("express")
const app = express()
const http = require('http');
const cookieParser = require("cookie-parser")
const HomeRouter = require("./Routers/HomeRouter")
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


