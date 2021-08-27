import React from 'react'
import './HomeLoan.css'
import calculatePayments from '../../Utility/Loan/HomeLoan/HomeLoanCalc'
export default function HomeLoan() {

    return (
        <>
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


            <div>
                <form class="home-loan-form">
                    <h1 class="home-loan-form-h1">If you have any questions, please do not hesitate to contact us : 1860 6161 6161
                    </h1>

                    <div class="car-loan-contact-form">
                        {/* <!-- <div id="sendmessage"> Your message has been sent successfully. Thank you. </div> --> */}

                        <div class="left-home-loan-form">
                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Full Name<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-male"></i></span>
                                <input class="home-loan-form-input" type="text" name="nom" id="nom" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>


                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">E-mail <span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-envelope-o"></i></span>
                                <input class="home-loan-form-input" type="email" name="email" id="email" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Occupation<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-user"></i></span>
                                <input class="home-loan-form-input" type="text" name="occupation" id="occupation" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Company Name<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="far fa-building"></i></span>
                                <input class="home-loan-form-input" type="text" name="cmpname" id="cmpname" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Monthy Income<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span>
                                <input class="home-loan-form-input" type="text" name="monthlyincome" id="monthlyincome" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Loan Amount<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fas fa-rupee-sign"></i></span>
                                <input class="home-loan-form-input" type="text" name="loanamount" id="loanamount" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Loan Tenure<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-info"></i></span>
                                <input class="home-loan-form-input" type="text" name="loantenure" id="loantenure" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                        </div>

                        <div class="right-home-loan-form">

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Address<span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-location-arrow"></i></span>
                                <input class="home-loan-form-input" type="text" name="address" id="address" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Postcode <span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-map-marker"></i></span>
                                <input class="home-loan-form-input" type="text" name="postal" id="postal" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">City <span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-building-o"></i></span>
                                <input class="home-loan-form-input" type="text" name="ville" id="ville" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Phone number <span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-phone"></i></span>
                                <input class="home-loan-form-input" type="text" name="phone" id="phone" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>


                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Subject <span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-comment-o"></i></span>
                                <input class="home-loan-form-input" type="text" name="sujet" id="sujet" required />
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>

                            <div class="home-loan-form-group">
                                <p class="home-loan-form-p">Message <span class="home-loan-form-span">*</span></p>
                                <span class="home-loan-form-icon-case"><i class="fa fa-comments-o"></i></span>
                                <textarea class="home-loan-form-textarea" name="message" rows="14" required></textarea>
                                {/* <!-- <div class="validation"></div> --> */}
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="home-loan-form-btn">Send</button>

                </form>
            </div>
        </>
    )
}