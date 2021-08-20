const verifyDetails = function (data) {




    // Check for name
    const name = data["name"]
    if (name == "") {
        return "Name cannot be empty"
    }
    // Account Number must be of 24 length
    const acNum = data["acNum"]
    if (acNum.length != 24) {
        return "Account Number must be 24 Digits long"
    }
    else {
        // Now check to backend if the account exists or not

    }
    // Check for email
    // const email = data["email"]

    // Amount < Your Balance
    const accountBalance = data["accountBalance"]
    if (amount > balance) {
        return "Amount to be transfer must be less than available balance";
    }
    else {
        // need to transfer money from one account to another
    }

    // Reason is optional
    const acNum1 = "c5860";
    const acNum2 = "89747";
    let defaultReason = `Transfer from ${acNum1} to ${acNum2}`;
    const reason = data["reason"]
    if (reason == "") {

    }
    else {
        return defaultReason;
    }
}