const verifyLoanInquiry = async function (data) {
    
    // Check for name
    const name = data["fullName"]
    console.log(data);
    if (name == "") {
        console.log("hereeeeeeeeeeee", name);
        return "Name cannot be empty!!"
    }

    // Check for email
    const email = data["email"];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
        return "You have entered an invalid email address!!";
    }

    // check for phone number
    const phoneNumber = data["phoneNumber"];
    let isNum = /^\d+$/.test(phoneNumber);
    if(!isNum) {
        return "Please enter valid phone number!!"
    }

}

module.exports = verifyLoanInquiry