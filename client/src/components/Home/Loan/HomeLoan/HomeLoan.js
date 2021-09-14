import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import verifyLoanInquiry from '../../Utility/Loan/verifyLoanInquiry'
import calculatePayments from '../../Utility/Loan/HomeLoan/HomeLoanCalc'
import './HomeLoan1.css'


export default function HomeLoan() {

    const [userDetails, setUserDetails] = useState({
        fullName: '',
        email: '',
        occupation: '',
        companyName: '',
        monthlyIncome: '',
        loanAmount: '',
        loanTenure: '',
        address: '',
        postCode: '',
        phoneNumber: '',
        city: '',
        userQueries: '',
        loanType: ''
    });

    function handleOnSubmit(e) {

        e.preventDefault()
        const msg = verifyLoanInquiry(userDetails).then((e) => {
            if (e == "Your Details are verified please be patient while we process your request") {
                toast.info(e);
                // saveData();
            }
            else {

                toast.error(e);
            }
        })
    }

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
                                placeholder="Full Name" 
                                value={userDetails.fullName}
                                onChange={e => setUserDetails({ ...userDetails, fullName: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="email" className="col-sm-2 col-form-label">Email
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-envelope-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="email" className="form-control homeLoanInps" id="email"
                                placeholder="Email" 
                                value={userDetails.email}
                                onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="occupation" className="col-sm-2 col-form-label">Occupation
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-user"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="occupation"
                                placeholder="Occupation" 
                                value={userDetails.occupation}
                                onChange={e => setUserDetails({ ...userDetails, occupation: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="cmpname" className="col-sm-2 col-form-label">Company Name
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="far fa-building"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="cmpname"
                                placeholder="Company Name" 
                                value={userDetails.companyName}
                                onChange={e => setUserDetails({ ...userDetails, companyName: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="monthlyincome" className="col-sm-2 col-form-label">Monthy Income
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span> */}
                        <div className="col-sm-10">
                            <input type="number" className="form-control homeLoanInps" id="monthlyincome"
                                placeholder="Monthy Income" 
                                value={userDetails.monthlyIncome}
                                onChange={e => setUserDetails({ ...userDetails, monthlyIncome: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="loanamount" className="col-sm-2 col-form-label">Loan Amount
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span> */}
                        <div className="col-sm-10">
                            <input type="number" className="form-control homeLoanInps" id="loanamount"
                                placeholder="Loan Amount" 
                                value={userDetails.loanAmount}
                                onChange={e => setUserDetails({ ...userDetails, loanAmount: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="loantenure" className="col-sm-2 col-form-label">Loan Tenure
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-info"></i></span> */}
                        <div className="col-sm-10">
                            <input type="number" className="form-control homeLoanInps" id="loantenure"
                                placeholder="Loan Tenure" 
                                value={userDetails.loanTenure}
                                onChange={e => setUserDetails({ ...userDetails, loanTenure: e.target.value })}
                                required />
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
                                placeholder="Address" 
                                value={userDetails.address}
                                onChange={e => setUserDetails({ ...userDetails, address: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="postal" className="col-sm-2 col-form-label">Postcode
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-map-marker"></i></span> */}
                        <div className="col-sm-10">
                            <input type="number" className="form-control homeLoanInps" id="postal"
                                placeholder="Ex. 394160" 
                                value={userDetails.postCode}
                                onChange={e => setUserDetails({ ...userDetails, postCode: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="ville" className="col-sm-2 col-form-label">City
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-building-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="postal"
                                placeholder="City" 
                                value={userDetails.city}
                                onChange={e => setUserDetails({ ...userDetails, city: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="phone" className="col-sm-2 col-form-label">Phone Number
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-phone"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="phone"
                                placeholder="Ex. 9345289765" 
                                value={userDetails.phoneNumber}
                                onChange={e => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                                required />
                        </div>
                    </div>

                    {/* <div className="row mb-3 ">
                        <label for="subject" className="col-sm-2 col-form-label">Subject
                            <span className="home-loan-form-span"> * </span></label>
                        <span class="home-loan-form-icon-case"><i class="fa fa-comment-o"></i></span>
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="subject"
                                placeholder="Subject" required />
                        </div>
                    </div> */}

                    <div className="row mb-3 ">
                        <label for="message" className="col-sm-2 col-form-label">Your Queries
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-comments-o"></i></span> */}
                        <div className="col-sm-10">
                            <input type="text" className="form-control homeLoanInps" id="message"
                                placeholder="Put Your questions here.." 
                                value={userDetails.userQueries}
                                onChange={e => setUserDetails({ ...userDetails, userQueries: e.target.value })}
                                required />
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <label for="loanType" className="col-sm-2 col-form-label">Loan Type
                            <span className="home-loan-form-span"> * </span></label>
                        {/* <span class="home-loan-form-icon-case"><i class="fa fa-comments-o"></i></span> */}
                        <div className="col-sm-10">
                            <select class="loanTypeSelectDropDown" name="freq" required>
                                <option value="">Select</option>
                                <option value={'homeLoan'}>Home Loan</option>
                                <option value={'carLoan'}>Car Loan</option>
                                <option value={'studentLoan'}>Stduent Loan</option>
                                <option value={'goldLoan'}>Gold Loan</option>
                            </select>
                        </div>
                    </div>
                    {/* </div> */}

                    <button type="submit" onClick= {handleOnSubmit} className="homeLoancustBtn1">Send</button>

                </form>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div >
                <h1 className="loanPaymentHeader">Calculate your Home Loan Payment</h1>
                <hr className="loanPaymentHeaderHRL" />
            </div>
                <div>
                    <h2>Calculate your Home Loan Payment</h2>
                    <form className="text-light neftForm mt-4">
                        <div class="row mb-3 ">
                            <label for="homePrice">Home Price</label>
                            <div class="col-sm-10">
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="homePrice" placeholder="Home Price" />
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label for="downPayment">Down Payment</label>
                            <div class="col-sm-10">
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="downPayment" placeholder="Down Payment" />
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label for="tradeValue">Trade In Value</label>
                            <div class="col-sm-10">
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="tradeValue" placeholder="Trade In Value" /*value="0"*/ />
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label for="intRate">Interest Rate</label>
                            <div class="col-sm-10">
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="intRate" placeholder="Interest Rate" />
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label for="loanTerm">Loan Term</label>
                            <div class="col-sm-10">
                                <input className="homeLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="loanTerm" placeholder="Loan Term (ex: 36 Months)" />
                            </div>
                        </div>
                        <div className="homeLoanClearFix"></div>
                        <div class="row custCol mb-3">
                            <button className="homeLoanCalcBtn" onClick={(e) => { calculatePayments(e) }} id="calculate" value="Calulate">Calculate</button>
                        </div>
                    </form>
                </div>
                <div className="homeLoanPaymentResults">
                    <div id="homeLoanPaymentResults">

                    </div>
                </div>
        </>
    )
}