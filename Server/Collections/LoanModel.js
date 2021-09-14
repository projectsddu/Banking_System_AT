const mongoose = require("mongoose");
const LoanInquiry = mongoose.Schema({
  userAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountModel",
    required: true,
  },
    receiverAc : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AccountModel",
      required: true
  },
  amount:{
      type:Number,
      required:true
  },
  sanctionedDateTime:{
      type:Date,
      required:true
  },
  endingDateTime:{
      type:Date,
      required:true
  },
  interestRate:{
      type:Number,
      required:true
  },
  paymentDone:{
      type:Number,
      required:true
  },
  remarks:{
      type:String,
      required:true
  },
  // Defines the collateral mortgaged by the user
  // This may also be stored in a model
  collateral:{
      type:String,
      required:true
  }

});