const test = async function (req, res, next) {

    console.log("Testing")
    next()
}
module.exports = test;