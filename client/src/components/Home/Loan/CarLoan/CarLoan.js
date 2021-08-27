import React from 'react'
import './CarLoan.css'
import calculatePayments from '../../Utility/Loan/CarLoan/CarLoanCalc'
export default function CarLoan() {

    return (
        <>
            <div className="col-md-12 carLoanPaymentCalc">

                <div className="col-md-6">

                    <form id="carLoanCalcForm">
                        <div className="col-md-10">
                            <h2>Calculate your Auto Loan Payment</h2>
                            <div className="form-group">
                                <label for="vehiclePrice">Vehicle Price</label>
                                <input className="carLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="vehiclePrice" placeholder="Vehicle Price" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="downPayment">Down Payment</label>
                                <input className="carLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="downPayment" placeholder="Down Payment" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="tradeValue">Trade In Value</label>
                                <input className="carLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="tradeValue" placeholder="Trade In Value" /*value="0"*/ />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="intRate">Interest Rate</label>
                                <input className="carLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="intRate" placeholder="Interest Rate" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <label for="loanTerm">Loan Term</label>
                                <input className="carLoanInput" type="text"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" className="form-control"
                                    id="loanTerm" placeholder="Loan Term (ex: 36 Months)" />
                            </div>
                        </div>
                        <div className="carLoanClearFix"></div>
                        <div className="col-md-12">
                            <button className="carLoanCalcBtn" onClick={(e) => { calculatePayments(e) }} id="calculate" value="Calulate">Calculate</button>
                        </div>
                    </form>
                </div>
                <div className="carLoanPaymentResults">
                    <div id="carLoanPaymentResults">

                    </div>
                </div>
            </div>


            <div>
                <form class="car-loan-form">
                    <h1 class="car-loan-form-h1">If you have any questions, please do not hesitate to contact us : 1860 6161 6161
                    </h1>

                    <div class="car-loan-contact-form">
                        {/* <!-- <div id="sendmessage"> Your message has been sent successfully. Thank you. </div> --> */}

                        <div class="left-car-loan-form">
                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Full Name<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-male"></i></span>
                                <input class="car-loan-form-input" type="text" name="nom" id="nom" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>


                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">E-mail <span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-envelope-o"></i></span>
                                <input class="car-loan-form-input" type="email" name="email" id="email" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Occupation<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-user"></i></span>
                                <input class="car-loan-form-input" type="text" name="occupation" id="occupation" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Company Name<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="far fa-building"></i></span>
                                <input class="car-loan-form-input" type="text" name="cmpname" id="cmpname" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Monthy Income<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span>
                                <input class="car-loan-form-input" type="text" name="monthlyincome" id="monthlyincome" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Loan Amount<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span>
                                <input class="car-loan-form-input" type="text" name="loanamount" id="loanamount" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Loan Tenure<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-info"></i></span>
                                <input class="car-loan-form-input" type="text" name="loantenure" id="loantenure" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                        </div>

                        <div class="right-car-loan-form">

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Address<span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-location-arrow"></i></span>
                                <input class="car-loan-form-input" type="text" name="address" id="address" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Postcode <span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-map-marker"></i></span>
                                <input class="car-loan-form-input" type="text" name="postal" id="postal" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">City <span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-building-o"></i></span>
                                <input class="car-loan-form-input" type="text" name="ville" id="ville" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Phone number <span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-phone"></i></span>
                                <input class="car-loan-form-input" type="text" name="phone" id="phone" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>


                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Subject <span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-comment-o"></i></span>
                                <input class="car-loan-form-input" type="text" name="sujet" id="sujet" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="car-loan-form-group">
                                <p class="car-loan-form-p">Message <span class="car-loan-form-span">*</span></p>
                                <span class="car-loan-form-icon-case"><i class="fa fa-comments-o"></i></span>
                                <textarea class="car-loan-form-textarea" name="message" rows="14" required></textarea>
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="car-loan-form-btn">Send</button>

                </form>
            </div>
        </>
    )
}
