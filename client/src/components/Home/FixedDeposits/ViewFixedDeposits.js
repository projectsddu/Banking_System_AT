import React from "react";
import './ViewFixedDeposits.css'
import useFetch from '../Utility/General/Usefetch'
export default function FixedDeposits() {

  const capitalize = function (str) {
    var str1 = str[0].toUpperCase()
    str1 += str.slice(1, str.length);
    return str1
  }

  const parseDate = function (dateStr) {
    const curDate = new Date(dateStr)
    return curDate.getDate() + "/" + curDate.getMonth() + "/" + curDate.getFullYear()
  }
  const getFinalAmount = function (metaData, depositData, idx) {
    console.log(depositData["depositData"])
    var principle = depositData["depositData"][idx]["principleAmount"]
    var interest = depositData["depositData"][idx]["interestRate"]
    var maturityDate = depositData["depositData"][idx]["maturityDate"]
    var dateOfIssue = depositData["depositData"][idx]["dateOfIssue"]
    var maturityMonths = 12 * ((new Date(maturityDate)).getFullYear() - (new Date(dateOfIssue)).getFullYear())
    // console.log(principle, interest, maturityDate, dateOfIssue)
    console.log("meta", metaData)
    if (metaData === false) {
      // it is a fixed deposit
      maturityMonths += ((new Date(maturityDate)).getMonth() - (new Date(dateOfIssue)).getMonth())
      // maturity months denotes no of months remaining
      var monthlyInterest = interest / 12
      var totalInterest = (monthlyInterest * maturityMonths) / 100;
      var finalAmount = principle + (principle * totalInterest);
      return finalAmount.toFixed(2);
    }
    else {
      var recurringAmount = metaData["recurringDepositAmount"]
      var total = principle
      var years = maturityMonths / 12;
      for (let i = 0; i < years; i++) {
        if (i == 0) {
          total += (total * (interest / 100))
        }
        else {
          total += (total + recurringAmount) * (interest / 100)
        }
        console.log(total)
      }
      console.log("total", total)
      return total.toFixed(2)

    }
  }
  const { data, loading } = useFetch("/fd/getFDDetails");

  // console.log(data["depositData"][0]["principleAmount"]);

  const setDepositDetails = function (depositData) {
    // console.log(depositData)
    if (depositData) {
      const deposits = depositData["depositData"];
      const recurData = depositData["recurringData"]
      console.log(recurData)
      const allJsx = []
      const userFirstName = capitalize(depositData["username"]["firstName"])
      const userLastName = capitalize(depositData["username"]["lastName"])
      // console.log(deposits);
      for (let deposit in deposits) {
        let counter = deposit
        console.log(counter)
        deposit = deposits[deposit];
        console.log(deposit);
        let depositJsx = <>
          <div class="col-sm-6 mb-3">
            <div class="card" style={{ width: "103%" }}>
              <div class="card-body">
                <h3 class="card-title">{userFirstName} {userLastName}</h3>
                <label>Deposit Number: {deposit._id}</label><br />
                <label>Deposit Amount: ${deposit.principleAmount} {recurData[counter] ?
                  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recurring Amount: ${recurData[counter]["recurringDepositAmount"]}</> : ""}</label><br />

                <label>Interest Rate: {deposit.interestRate} pa</label><br />
                <label>Maturity Date: {loading ? "Loading..." : parseDate(deposit.maturityDate)}</label><br />
                <label>Maturity Amount:{loading ? "Loading..." : " $" + getFinalAmount(recurData[counter], depositData, counter)}</label><br />
                <button type="button" style={{ "width": "97%" }} className="applyDepositBtn">View Full FD</button>
              </div>
            </div>
          </div>
        </>

        allJsx.push(depositJsx);

      }

      return allJsx;
    }
  }

  // setDepositDetails(data);

  return (
    <>

      <div class="row">
        {loading ? "loading..." :
          (setDepositDetails(data)).map((e) => { return e })
        }

      </div>

      {/* <div class="row">
        <div class="col-sm-6">
          <div class="card" style={{ width: "103%" }}>
            <div class="card-body">
              <h5 class="card-title">Jenil J Gandhi</h5>
              <label>Deposit Number: FD12345</label><br />
              <label>Deposit Amount: 100000</label><br />
              <label>Interest Rate: 6</label><br />
              <label>Maturity Date: 16-MAR-2025</label><br />
              <label>Maturity Amount: 106000.00</label><br />
              <a href="#" class="btn btn-primary" style={{ width: "50%", marginLeft: "25%", padding: "2%" }}>
                View Full FD
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{ width: "103%" }}>
            <div class="card-body">
              <h5 class="card-title">Jenil J Gandhi</h5>
              <label>Deposit Number: FD12345</label><br />
              <label>Deposit Amount: 100000</label><br />
              <label>Interest Rate: 6</label><br />
              <label>Maturity Date: 16-MAR-2025</label><br />
              <label>Maturity Amount: 106000.00</label><br />
              <a href="#" class="btn btn-primary" style={{ width: "50%", marginLeft: "25%", padding: "2%" }}>
                View Full FD
              </a>
            </div>
          </div>
        </div>
      </div> */}



      {/* <div class="container1">
        <div class="container2">
          <div class="row">
            <div class="col-sm-6">
              <div class="card" style={{
                width: "95%", height: "95%", margin: "2%", border: "1px solid #00d2f7"
              }}>
                < div class="card-body" >
                  <label>Received with thanks from</label>
                  <h5>Jenil J Gandhi</h5>
                  <label>A-124, VRAJDHAM SOCIETY</label><br />
                  <label>B/H PAVANDHAM and RAJSHREE SOCIETY</label><br />
                  <label>B/H MANINAGAR SOCIETY RD, MANJALPUR</label><br />
                  <label>VADODARA-390011</label><br />
                  <h5>FD-12345</h5>
                  <label>Cust No : 6654557</label> <label>Mob : 8787989814</label><br />
                  <label>Pan : FFAB4565T</label> <label>Email: jenil@gmail.com</label>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style={{ width: "95%", height: "95%", margin: "2%", border: "1px solid #00d2f7" }}>
                <div class="card-body">
                  <h5 class="card-title" style={{ display: "inline" }}>Date : </h5> <label>14-JUN-2022</label>
                  <br />
                  <h5 class="card-title" style={{ display: "inline" }}>Branch : </h5> <label>VADODARA</label>
                  <br />
                  <label>HDFC HOUSE</label><br />
                  <label>TRIDENT</label><br />
                  <label>NR RACE COURSE CIRCLE</label><br />
                  <label>VADODARA-390005</label><br />
                  <label>TEL. 2345788</label><br />
                  <label>Email: hdfc@deposit.com</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card" style={{ width: "95%", height: "100%", margin: "2%", border: "1px solid #00d2f7" }}>
              <div class="card-body">
                <label>Interest is compounded annually</label>
                <label>Bank Account No : 611e8dd6fb5f5152fc2c5860</label><br />
                <label>MICR Code : 1245789322</label><br />
                <label>IFSC Code : HDFC789922</label><br />
                <label>Bank/Branch Name : HDFC BANK LTD, MANJALPUR</label><br />
                <label>Deposit Repayable to : FIRST DEPOSITOR OR SURVIVOR</label><br />
                <label>+ MATURITY VALUE (Subject to TDS) WILL BE REPAID AUTOMATICALLY ON MATURITY*.</label><br />
                <label>* Depositor has the option to revise this instruction before the maturity date.</label><br />
                <br />
                <a href="#" class="btn btn-primary" style={{ width: "30%", marginLeft: "35%", padding: "1%" }}>
                  Print
                </a>
              </div>
            </div>
          </div>
        </div>
      </div > */}

    </>
  );
}
