const express = require("express");
const router = express.Router();
const authenticate = require("../Middlewares/Admin/authenticateAdmin");
const verifyAdminDetails = require("../Middlewares/Admin/verifyAdminDetails");
const Admin = require("../Collections/AdminModel");
const User = require("../Collections/UserModel");
const Account = require("../Collections/AccountModel");
const Transaction = require("../Collections/TransactionModel");
const AccountType = require("../Collections/AccountTypeModel")

router.post("/admin/create_admin", [verifyAdminDetails], async (req, res) => {
  try {
    const { firstName, middleName, lastName, pinNo } = req.body;

    // data is verified in middlewares.

    const admin = await Admin({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      pinNo: pinNo,
    });

    const adminSaved = await admin.save();

    if (!adminSaved) {
      throw "Error creating admin!!!";
    }

    return res.json({ "Success:": true });
  } catch (e) {
    console.log(e.toString());
  }
});

router.post("/admin/loginAdmin", async (req, res) => {
  try {
    const { username, pinNo } = req.body;
    if (!username || !pinNo) {
      throw "Fields cannot be empty!";
    } else {
      const usernames = String(username).split("_");
      console.log(usernames, pinNo);
      const admin = await Admin.findOne({
        firstName: usernames[0],
        middleName: usernames[1],
        lastName: usernames[2],
        pinNo: pinNo,
      });
      // const admin = await Admin.findOne({
      //     firstName: "jenil",
      //     middleName: "j",
      //     lastName: "gandhi",
      //     pinNo: "3456"
      // })
      console.log(admin);
      if (admin) {
        const token = await admin.generateAuthToken();
        const savedCookie = res.cookie("LoginToken", token, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        });
        const userCookie = res.cookie("UserId", admin._id, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        });
        return res.send("Success");
      } else {
        throw "No such admin found!!";
      }
    }
  } catch (e) {
    return res.json({ "Error:": e.toString() });
  }
});

router.post(
  "/admin/get_all_users/:search_string",
  [authenticate],
  async (req, res) => {
    try {
      const search_string = String(req.params.search_string).toLowerCase();
      const allUsers = await User.find({
        $or: [
          { middleName: { $regex: search_string } },
          { firstName: { $regex: search_string } },
          { lastName: { $regex: search_string } },
        ],
      });
      // console.log(search_string)
      // console.log(allUsers)
      if (allUsers) {
        return res.json({
          allUsers: allUsers.length > 5 ? allUsers.slice(0, 5) : allUsers,
        });
      } else {
        throw "Error Connecting!";
      }
    } catch (e) {
      console.log(e);
      return res.json({ "Error:": e.toString() });
    }
  }
);

router.post("/admin/block_user", [authenticate], async (req, res) => {
  try {
    const { username, pinNo } = req.body;

    const fullName = String(username).split("_");
    let firstName = fullName[0].toLowerCase();
    let middleName = fullName[1].toLowerCase();
    let lastName = fullName[2].toLowerCase();
    // console.log("11111111")

    const userExist = await User.findOne({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
    });
    if (!userExist) {
      return res.json({ "Error:": "User not Exist!!!" });
    }
    // console.log("32222222")
    if (req.current_admin.pinNo == pinNo) {
      const sts = await User.deleteOne({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
      });
      // console.log("3333333333")
      if (!sts) {
        return res.json({ "Error:": "Error while blocking User!!!" });
      }

      return res.json({ "Success": "Success" });
    } else {
      return res.json({ "Error:": "Wrong Pin Number of Admin!!!" });
    }
  } catch (e) {
    console.log(e);
    return res.json({ "Error:": e.toString() });
  }
});

// TEST ME
router.post("/admin/createUserAccount", [authenticate], async (req, res) => {
  try {
    // console.log(req.body);
    const { username, balance } = req.body;
    const usernames = String(username).split(" ");
    const firstName = usernames[0];
    const middleName = usernames[1];
    const lastName = usernames[2];
    console.log(firstName, middleName, lastName);
    const user = await User.findOne({ firstName, middleName, lastName });
    // console.log("User", user);
    if (!user) {
      throw "user does not exists!!";
    } else {
      const acType = await AccountType.findOne({
        accountTypeName: "joint",
      });
      const ac = await Account({
          accountOwner: user,
          accountType: acType,
          accountBalance: balance,
          isEcardIssued: false
      }).save()
      if(!ac)
      {
        throw "Error saving user!"
      }
      return res.json({"Success:":true,"message":"account would be now visible in users dashboard!"})
    }
  } catch (e) {
    return res.json({"Error:":e.toString()})
  }
});

router.post("/admin/addCashToUser", [authenticate], async (req, res) => {
  try {
    const { acNum, amount, pinNo } = req.body;

    // check account is exist or not
    const accountExist = await Account.findOne({
      _id: acNum,
    });

    if (!accountExist) {
      throw "Account does not exist!!";
    }

    if (req.current_admin.pinNo == pinNo) {
      accountExist.accountBalance =
        accountExist.accountBalance + parseInt(amount);
      req.admin_account.accountBalance =
        req.admin_account.accountBalance - parseInt(amount);
      let st1 = await accountExist.save();
      let st2 = await req.admin_account.save();

      const trxObj = await Transaction({
        sender: req.admin_user,
        senderAc: req.admin_account,
        receiverAc: accountExist,
        receiver: accountExist.accountOwner,
        amount: amount,
        transactionDateTime: Date.now(),
        mode: "CASH",
        reason: "Cash Transfer",
        isPending: false,
      });

      const st3 = await trxObj.save();

      if (!st1 || !st2 || !st3) {
        throw "Error saving your data";
      }
      return res.json({ "Success": true });
    }
  } catch (e) {
    console.log(e);
    return res.json({ "Error:": e.toString() });
  }
});

router.post("/admin/addAnotherAdmin", [authenticate], async (req, res) => {
    try{
        const {firstName, middleName, lastName, pinNo} = req.body;

        const obj = await Admin({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            pinNo: pinNo
        })

        let sts = await obj.save();

        if(!sts) {
            throw "Error while saving data!!!"
        }

        return res.json({ "Success": true }); 
    }
    catch(e) {
        console.log(e);
        return res.json({ "Error:": e.toString() });
    }
})

router.post("/admin/viewProfile", [authenticate], async (req, res) => {
    try {
        
        return res.json({ "Success": true, "userData": req.current_admin })

    }
    catch(e) {
        console.log(e);
        return res.json({ "Error:": e.toString() });
    }
})

module.exports = router;
