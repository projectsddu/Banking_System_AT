const fs = require('fs')
// const curDate = new Date().toString()
// const serverFile = curDate + "_log.txt"

function getCurTime() {
    const curTime = new Date()
    return curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds()
}

function add_log(data, type = "SUCCESS") {
    const curDate = new Date().toString()
    const serverFile = "server" + "_log.txt"
    const writer = type + " " + getCurTime() + " : " + data + "\n"
    console.log(writer)
    fs.appendFile("./Logs/" + serverFile, writer, (err) => {
        console.log(err)
    })
}

module.exports = {
    add_log
}