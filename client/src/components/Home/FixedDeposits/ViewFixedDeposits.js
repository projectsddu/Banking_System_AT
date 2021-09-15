import React from "react";
import './ViewFixedDeposits.css'
export default function FixedDeposits() {
  return (
    <>
      <div class="row">
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
      </div>



      <div class="container1">
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
      </div >

    </>
  );
}
