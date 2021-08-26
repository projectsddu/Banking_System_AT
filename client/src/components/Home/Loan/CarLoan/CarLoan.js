import React from 'react'
import './CarLoan.css'
export default function CarLoan() {

    function calculatePayments(e) {
        console.log("kjeni")
        e.preventDefault()
        // console.log(e)
        var vehiclePrice = document.getElementById('vehiclePrice').value
        var loanTerm = document.getElementById('loanTerm').value
        var intRate = document.getElementById('intRate').value
        var downPayment = document.getElementById('downPayment').value
        var tradeValue = document.getElementById('tradeValue').value
        var amount = parseInt(vehiclePrice)
        var months = parseInt(loanTerm)
        var down = parseInt(downPayment)
        var trade = parseInt(tradeValue)
        var totalDown = down + trade
        var annInterest = parseFloat(intRate)
        var monInt = annInterest / 1200;

        if (!amount) {
            alert('Please add a loan amount');
            return;
        }

        if (!months) {
            months = 60;
            loanTerm = document.getElementById('loanTerm').value = '60';
        }

        if (!downPayment) {
            down = 0;
            downPayment = document.getElementById('downPayment').value = '0';
        }

        if (!trade) {
            trade = 0;
            tradeValue = document.getElementById('tradeValue').value = '0';
        }

        if (!annInterest) {
            annInterest = 3.25;
            intRate = document.getElementById('intRate').value = '3.25';
        }


        var calc = ((monInt + (monInt / (Math.pow((1 + monInt), months) - 1))) * (amount - (totalDown || 0))).toFixed(2);

        var carLoanPaymentResults = document.getElementById('carLoanPaymentResults');
        carLoanPaymentResults.style.display = 'block';
        carLoanPaymentResults.innerHTML = '';
        var results = document.createElement('div');
        results.innerHTML = '<h1 style="text-align:center">Estimated Monthly Payment is:<br/></h1>' + '<h3 style="text-align:center">₹ ' + calc + '/Month</h3>';

        carLoanPaymentResults.append(results);
    }


    return (
        <div class="col-md-12 carLoanPaymentCalc">

            <div class="col-md-6">

                <form id="carLoanCalcForm">
                    <div class="col-md-10">
                        <h2>Calculate Your Auto Loan Payment</h2>
                        <div class="form-group">
                            <label for="vehiclePrice">Vehicle Price</label>
                            <input class="carLoanInput" type="text"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control"
                                id="vehiclePrice" placeholder="Vehicle Price" />
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="form-group">
                            <label for="downPayment">Down Payment</label>
                            <input class="carLoanInput" type="text"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control"
                                id="downPayment" placeholder="Down Payment" />
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="form-group">
                            <label for="tradeValue">Trade In Value</label>
                            <input class="carLoanInput" type="text"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control"
                                id="tradeValue" placeholder="Trade In Value" /*value="0"*/ />
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="form-group">
                            <label for="intRate">Interest Rate</label>
                            <input class="carLoanInput" type="text"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control"
                                id="intRate" placeholder="Interest Rate" /*value="3.25"*/ />
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="form-group">
                            <label for="loanTerm">Loan Term</label>
                            <input class="carLoanInput" type="text"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control"
                                id="loanTerm" placeholder="Loan Term (ex: 36 Months)" />
                        </div>
                    </div>
                    <div class="carLoanClearFix"></div>
                    <div class="col-md-12">
                        <button class="carLoanCalcBtn" onClick={(e) => { calculatePayments(e) }} id="calculate" value="Calulate">Calculate</button>
                    </div>
                </form>
            </div>
            <div class="carLoanPaymentResults">
                <div id="carLoanPaymentResults">

                </div>
            </div>
        </div>
    )
}
