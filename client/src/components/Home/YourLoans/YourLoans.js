// Your loans contain the details abt the loans you have taken
// This would display the collateral lented
// This would also show how many month you have completed paying
// This would show how much amount is left to pay and what interest you pay
import React from 'react'
import './YourLoans.css'
import { useLocation } from 'react-router'

export default function YourLoans() {
    const curUrl = useLocation()
    const loanId = curUrl.pathname.split("/")[2]
    return (
        <div className="yourLoans-wrapper">
            <h1 className="yourloansHeader">Your Student Loan </h1>
            <br />
            <div className="row">
                <div className="col-6">
                    <h2 className="li-heads">Loan Details</h2>
                    <div>
                        <ul>
                            <li className="li-item"><b className="leading-li">Loan-ID:</b> {loanId}</li>
                            <li className="li-item"><b className="leading-li">Lender:</b> Bankers small finance Bank Ltd.</li>
                            <li className="li-item"><b className="leading-li">Receiver:</b> Jenil J Gandhi.</li>
                            <li className="li-item"><b className="leading-li">Loan Amount:</b> $10,000</li>
                            <li className="li-item"><b className="leading-li">Remarks:</b> Loan for studying abroad for kid</li>
                            <li className="li-item"><b className="leading-li">Loan Duration:</b> 36 months</li>
                            <li className="li-item"><b className="leading-li">Months Completed:</b> 00 months</li>
                            <li className="li-item"><b className="leading-li">Amount to be paid:</b> $13500</li>
                            <li className="li-item"><b className="leading-li">Amount paid till now:</b> 00$</li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <h2 className="li-heads">Refinance Loan</h2>

                    <form class="mb-3 row">

                    </form>
                </div>
            </div>
            {/* <p>ishdjsndj</p> */}
        </div>
    )
}
