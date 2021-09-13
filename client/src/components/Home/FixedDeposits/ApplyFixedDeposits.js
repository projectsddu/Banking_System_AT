import React from 'react'
import './ApplyFixedDeposits.css'
// import cal from '../Utility/FixedDeposit/FixedDepositCalc'
// import checkAll from '../Utility/FixedDeposit/FixedDepositCalc'
// import checkType from '../Utility/FixedDeposit/FixedDepositCalc'
// import checkAmt from '../Utility/FixedDeposit/FixedDepositCalc'
// import checkYears from '../Utility/FixedDeposit/FixedDepositCalc'
// import checkRate from '../Utility/FixedDeposit/FixedDepositCalc'
// import checkFreq from '../Utility/FixedDeposit/FixedDepositCalc'

function cal(e) {
    if (!checkAll(e))
        return;

    var depositType = document.f1.depositType.value;
    if (depositType == "fd" && document.f1.freq.value.length != 0) {
        var amt = parseFloat(document.f1.amt.value);
        var rate = parseFloat(document.f1.rate.value);
        var year = parseInt(document.f1.years.value);
        var freq = parseInt(document.f1.freq.value);

        var maturity = amt * Math.pow((1 + ((rate / 100) / freq)), freq * year);
        document.getElementById("maturity").innerText = maturity.toFixed(2);
    } else if (depositType == "rd" && document.f1.freq.value.length != 0) {
        var amt = parseFloat(document.f1.amt.value);
        var rate = parseFloat(document.f1.rate.value);
        var year = parseInt(document.f1.years.value);
        var freq = parseInt(document.f1.freq.value);

        var months = year * 12;
        var maturity = 0;
        console.log(amt);
        amt = amt / months;
        console.log(amt);
        for (var i = 1; i <= months; i++) {
            maturity += amt * Math.pow((1 + ((rate / 100) / freq)), freq * ((months - i + 1) / 12));
            console.log(((months - i + 1) / 12));
            console.log(maturity);
        }
        document.getElementById("maturity").innerText = (maturity).toFixed(2);
    } else {
        alert("Select all dropdowns");
    }
}

function checkAll(e) {
    if (checkType(e) && checkAmt(e) && checkYears(e) && checkRate(e) && checkFreq(e))
        return true;
    else
        return false;
}
function checkType(e) {
    if (document.f1.depositType.value.length == 0) {
        document.getElementById("depositTypeErr").innerText = "* Select a deposit type";
        return false;
    } else {
        document.getElementById("depositTypeErr").innerText = "";
        return true;
    }
}

function checkAmt(e) {
    if (isNaN(document.f1.amt.value) || document.f1.amt.value.length == 0) {
        document.getElementById("amtErr").innerText = " * Amount required and should be a number";
        return false;
    } else {
        document.getElementById("amtErr").innerText = "";
        return true;
    }
}

function checkYears(e) {
    if (isNaN(document.f1.years.value) || document.f1.years.value.length == 0) {
        document.getElementById("yearsErr").innerText = " * Year required and should be a number";
        return false;
    } else {
        document.getElementById("yearsErr").innerText = "";
        return true;
    }
}

function checkRate(e) {
    if (isNaN(document.f1.rate.value) || document.f1.rate.value.length == 0) {
        document.getElementById("rateErr").innerText = " * Interest required and should be a number";
        return false;
    } else {
        document.getElementById("rateErr").innerText = "";
        return true;
    }
}

function checkFreq(e) {
    if (document.f1.freq.value.length == 0) {
        document.getElementById("freqErr").innerText = " * Select a compounding freq.";
        return false;
    } else {
        document.getElementById("freqErr").innerText = "";
        return true;
    }
}
export default function ApplyFixedDeposits() {
    return (
        <>
            <div >
                <h1 className="fixedDepositHeader">Fixed Deposit Calculator</h1>
                <hr className="fixedDepositHeaderHRL" />
            </div>
            <form className="text-light fixedDepositForm mt-4" name="f1">
                <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label">Type of deposit</label>
                    <div class="col-sm-10">
                        <label class="fixedDepositLabel"><input class="fixedDepositCalcRadioBtns" type="radio" name="depositType" value="fd" onClick={(e) => checkType()} />Fixed deposit</label>
                        <label class="fixedDepositLabel"><input class="fixedDepositCalcRadioBtns" type="radio" name="depositType" value="rd" onClick={(e) => checkType()} />Recurring deposit</label>
                        <span id="depositTypeErr"> * Select a type</span>
                    </div>
                </div>
                <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label">Principal Amount</label>
                    <div class="col-sm-10">
                        <input class="form-control fixedDepositInps" type="text" name="amt" placeholder="Principal Amount" onKeyUp={(e) => checkAmt()} onChange={(e) => checkAmt()} required />
                        <span id="amtErr"> * required</span>
                    </div>
                </div>
                <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label">Number of Years</label>
                    <div class="col-sm-10">
                        <input class="form-control fixedDepositInps" type="text" name="years" placeholder="Number of Years" onKeyUp={(e) => checkYears()} onChange={(e) => checkYears()} required />
                        <span id="yearsErr"> * required</span>
                    </div>
                </div>
                <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label">Rate of Interest</label>
                    <div class="col-sm-10">
                        <input class="form-control fixedDepositInps" type="text" name="rate" placeholder="Rate of Interest" onKeyUp={(e) => checkRate()} onChange={(e) => checkRate()} required />
                        <span id="rateErr"> * required</span>
                    </div>
                </div>
                <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label">Compounding frequency</label>
                    <div class="col-sm-10">
                        <select class="selectTagFixedDeposit" name="freq" onKeyUp={(e) => checkFreq()} onChange={(e) => checkFreq()} required>
                            <option value="">Select</option>
                            <option value={12}>Monthly</option>
                            <option value={4}>Quarterly</option>
                            <option value={2}>Half yearly</option>
                            <option value={1}>Yearly</option>
                        </select>
                        <span id="freqErr"> * required</span>
                    </div>
                </div >
                <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label">Maturity Amount</label>
                    <div class="col-sm-10">
                        <b>Rs. </b><b id="maturity"></b>
                    </div>
                </div>
                <div class="row custCol mb-3">
                    <div class="col-sm-15">
                        <input className="fixedDepositCustBtn1" type="button" value="Calulate" onClick={(e) => cal()} />&nbsp;&nbsp;
                        <input className="fixedDepositCustBtn1" type="reset"
                            value="Clear" />
                    </div>
                </div>
            </form >
        </>
    )
}
