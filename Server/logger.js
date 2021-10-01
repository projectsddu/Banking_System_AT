const fs = require('fs')
const curDate = new Date().toString()
const serverFile = curDate+"_log.txt"

const getCurTime()
{
    const curTime = new Date()
    return curTime.getHours()+":"+curTime.getMinutes()+":"+curTime.getSeconds()    
}

const add_log(type="info",data)
