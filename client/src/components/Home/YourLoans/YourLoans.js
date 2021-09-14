// Your loans contain the details abt the loans you have taken
// This would display the collateral lented
// This would also show how many month you have completed paying
// This would show how much amount is left to pay and what interest you pay
import React from "react";
import { useState } from "react";
import "./YourLoans.css";
import { useLocation } from "react-router";

export default function YourLoans() {
  const [refinance, setRefinance] = useState({
    email: "",
    sponsor: "",
    reason: "",
  });
  const curUrl = useLocation();
  const loanId = curUrl.pathname.split("/")[2];
  return (
    <div className="yourLoans-wrapper">
      <h1 className="yourloansHeader">Your Student Loan </h1>
      <hr />
      <div className="row mt-4">
        <div className="col-6">
          <h2 className="li-heads">Loan Details</h2>
          <div>
            <ul>
              <li className="li-item">
                <b className="leading-li">Loan-ID:</b> {loanId}
              </li>
              <li className="li-item">
                <b className="leading-li">Lender:</b> Bankers small finance Bank
                Ltd.
              </li>
              <li className="li-item">
                <b className="leading-li">Receiver:</b> Jenil J Gandhi.
              </li>
              <li className="li-item">
                <b className="leading-li">Receiver A/C:</b>{" "}
                611e8dd6fb5f5152fc2c5860.
              </li>
              <li className="li-item">
                <b className="leading-li">Loan Amount:</b> $10,000
              </li>
              <li className="li-item">
                <b className="leading-li">Remarks:</b> Loan for studying abroad
                for kid
              </li>
              <li className="li-item">
                <b className="leading-li">Loan Duration:</b> 36 months
              </li>
              <li className="li-item">
                <b className="leading-li">Months Completed:</b> 00 months
              </li>
              <li className="li-item">
                <b className="leading-li">Amount to be paid:</b> $13500
              </li>
              <li className="li-item">
                <b className="leading-li">Amount paid till now:</b> 00$
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <h2 className="li-heads">Refinance Loan</h2>

          <form className="refinance-form">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  placeholder="Enter your email"
                  value={refinance["email"]}
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Sponsor
              </label>
              <div class="col-sm-10">
                <input
                  placeholder="Sponsoring Bank"
                  onChange={(e) =>
                    setRefinance({ ...refinance, sponsor: e.target.value })
                  }
                  value={refinance["sponsor"]}
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Reason
              </label>
              <div class="col-sm-10">
                <textarea
                  placeholder="Reason for responsoring the loan"
                  onChange={(e) =>
                    setRefinance({ ...refinance, reason: e.target.value })
                  }
                  value={refinance["reason"]}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="btnWrapper">
              <button type="submit" class="refinanceLoan btn">
                Confirm Refinancing
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="row margin-left-50 mt-0">
        <h2 className="li-heads mt-4">Update Loan Terms</h2>

        <div class="card mb-3 col-5 m-3">
          <img
            src="https://source.unsplash.com/1600x900/?money,help"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Change Loan Term</h5>
            <p class="card-text">
              To change the loan terms visit your nearest branch to change the
              terms. but note that the terms can only change if you have enough
              balance in your account or are willing to lend a new collateral
            </p>
            <button
              style={{
                "background-color": "#03fc6b",
                border: "1px solid #03fc6b",
                "border-radius": "3px",
                padding: "10px",
                "font-weight": "bold",
              }}
              classname="Assistancebtn"
            >
              1800 69 6969
            </button>
          </div>
        </div>

        <div class="card mb-3 col-5 m-3">
          <img
            src="https://source.unsplash.com/1600x900/?money,money"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Update your interest rate</h5>
            <p class="card-text">
              to update your interest rate please visit our bank with your
              improved credit score to reduce your rate of interest on your
              remaining amount of the loan.Also a new collateral would update
              the ROI.
            </p>
            <button
              style={{
                "background-color": "#03fc6b",
                border: "1px solid #03fc6b",
                "border-radius": "3px",
                padding: "10px",
                "font-weight": "bold",
              }}
              classname="Assistancebtn"
            >
              1800 69 6969
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
