import React from 'react'
import './HomeLoan1.css'
import calculatePayments from '../../Utility/Loan/HomeLoan/HomeLoanCalc'
export default function HomeLoan() {

    return (
        <>

            <div>
                <h1 className="carLoanHeader">Apply For Now</h1>
                <hr className="carLoanHeader" />
            </div>

            <div>
                <form className="text-light homeLoanForm mt-4">

                    {/* <div class="left-home-loan-form"> */}


                    <div className="row mb-3 ">
                        <label for="fullName" className="col-sm-2 col-form-label">Full Name
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-male"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="fullname"
                                placeholder="Full Name" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="email" className="col-sm-2 col-form-label">Email
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-envelope-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="email" className="form-control homeLoanInps" id="email"
                                placeholder="Email" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="occupation" className="col-sm-2 col-form-label">Occupation
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-user"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="occupation"
                                placeholder="Occupation" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="cmpname" className="col-sm-2 col-form-label">Company Name
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="far fa-building"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="cmpname"
                                placeholder="Company Name" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="monthlyincome" className="col-sm-2 col-form-label">Monthy Income
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="monthlyincome"
                                placeholder="Monthy Income" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="loanamount" className="col-sm-2 col-form-label">Loan Amount
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="loanamount"
                                placeholder="Loan Amount" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="loantenure" className="col-sm-2 col-form-label">Loan Tenure
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-info"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="loantenure"
                                placeholder="Loan Tenure" required />
                        </div>
                    </div>


                    {/* </div> */}

                    {/* <div class="right-home-loan-form"> */}

                    <div className="row mb-3 ">
                        <label for="address" className="col-sm-2 col-form-label">Address
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-location-arrow"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="address"
                                placeholder="Address" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="postal" className="col-sm-2 col-form-label">Postcode
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-map-marker"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="postal"
                                placeholder="Postcode" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="ville" className="col-sm-2 col-form-label">City
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-building-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="postal"
                                placeholder="City" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="phone" className="col-sm-2 col-form-label">Phone Number
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-phone"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="phone"
                                placeholder="Phone Number" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="subject" className="col-sm-2 col-form-label">Subject
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-comment-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="subject"
                                placeholder="Subject" required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="message" className="col-sm-2 col-form-label">Message
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-comments-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="message"
                                placeholder="Message" required />
                        </div>
                    </div>
                    {/* </div> */}

                    <button type="submit" className="homeLoancustBtn1">Send</button>

                </form>
            </div>

            <div className="col-md-12 homeLoanPaymentCalc">

                <div className="col-md-6">

                    <form id="homeLoanCalcForm">
                        <div className="col-md-10">
                            <h2>Calculate your Home Loan Payment</h2>
                            <div className="form-group">
                                <label for="homePrice">Home Price</label>
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="homePrice" placeholder="Home Price" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="downPayment">Down Payment</label>
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="downPayment" placeholder="Down Payment" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="tradeValue">Trade In Value</label>
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="tradeValue" placeholder="Trade In Value" /*value="0"*/ />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="intRate">Interest Rate</label>
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="intRate" placeholder="Interest Rate" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="loanTerm">Loan Term</label>
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="loanTerm" placeholder="Loan Term (ex: 36 Months)" />
                            </div>
                        </div>
                        <div className="homeLoanClearFix"></div>
                        <div className="col-md-12">
                            <button className="homeLoanCalcBtn" onClick={(e) => { calculatePayments(e) }} id="calculate" value="Calulate">Calculate</button>
                        </div>
                    </form>
                </div>
                <div className="homeLoanPaymentResults">
                    <div id="homeLoanPaymentResults">

                    </div>
                </div>
            </div>
        </>
    )
}