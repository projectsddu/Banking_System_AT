import React from 'react'
import './ApplyFixedDeposits.css'
// import cal from '../Utility/FixedDeposit/FixedDepositCalc'
// import cal from '../Utility/FixedDeposit/FixedDepositCalc'
function cal(e) {
    if (!checkAll())
        return;

    var depositType = document.f1.depositType.value;
    if (depositType == "fd" && document.f1.freq.value.length != 0) {
        var amt = parseFloat(document.f1.amt.value);
        var rate = parseFloat(document.f1.rate.value);
        var year = parseInt(document.f1.years.value);
        var freq = parseInt(document.f1.freq.value);

        var maturity = amt * Math.pow((1 + ((rate / 100) / freq)), freq * year);
        document.getElementById("maturity").innerText = maturity;
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
        document.getElementById("maturity").innerText = maturity;
    } else {
        alert("Select all dropdowns");
    }
}

function checkAll(e) {
    if (checkType() && checkAmt() && checkYears() && checkRate() && checkFreq())
        return true;
    else
        return false;
}
function checkType(e) {
    console.log("jksndkjsndksndksndksndksndksn")
    if (document.f1.depositType.value.length == 0) {
        document.getElementById("depositTypeErr").innerText = "* Select a deposit type";
        return false;
    } else {
        document.getElementById("depositTypeErr").innerText = "";
        return true;
    }
}

function checkAmt() {
    if (isNaN(document.f1.amt.value) || document.f1.amt.value.length == 0) {
        document.getElementById("amtErr").innerText = " * Amount required and should be a number";
        return false;
    } else {
        document.getElementById("amtErr").innerText = "";
        return true;
    }
}

function checkYears() {
    if (isNaN(document.f1.years.value) || document.f1.years.value.length == 0) {
        document.getElementById("yearsErr").innerText = " * Year required and should be a number";
        return false;
    } else {
        document.getElementById("yearsErr").innerText = "";
        return true;
    }
}

function checkRate() {
    if (isNaN(document.f1.rate.value) || document.f1.rate.value.length == 0) {
        document.getElementById("rateErr").innerText = " * Interest required and should be a number";
        return false;
    } else {
        document.getElementById("rateErr").innerText = "";
        return true;
    }
}

function checkFreq() {
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
            <form name="f1">
                <table style={{ color: "white" }}>
                    <tr>
                        <td>Type of deposit</td>
                        <td>
                            <input type="radio" name="depositType" value="fd" onClick={(e) => checkType()} />Fixed deposit
                            <input type="radio" name="depositType" value="rd" onClick={(e) => checkType()} />Recurring deposit
                            <span id="depositTypeErr"> * Select a type</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Principal Amt.</td>
                        <td><input type="text" name="amt" onKeyUp="checkAmt();" onChange="checkAmt();" required />
                            <span id="amtErr"> * required</span></td>
                    </tr>
                    <tr>
                        <td>No. of Years</td>
                        <td><input type="text" name="years" onKeyUp="checkYears();" onChange="checkYears()" required /><span
                            id="yearsErr"> * required</span></td>
                    </tr>
                    <tr>
                        <td>Interest</td>
                        <td><input type="text" name="rate" onKeyUp="checkRate();" onChange="checkRate();" required /><span
                            id="rateErr"> * required</span></td>
                    </tr>
                    <tr>
                        <td>Compounding freq.</td>
                        <td>
                            <select name="freq" onKeyUp="checkFreq();" onChange="checkFreq();" required>
                                <option value="">Select</option>
                                <option value={12}>Monthly</option>
                                <option value={4}>Quarterly</option>
                                <option value={2}>Half yearly</option>
                                <option value={1}>Yearly</option>
                            </select><span id="freqErr"> * required</span>
                        </td>
                    </tr >
                    <tr>
                        <td>Maturity Amt.</td>
                        <td><b>Rs. </b><b id="maturity"></b></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" value="Calulate" onClick="cal()" />&nbsp;&nbsp;<input type="reset"
                            value="Clear" /></td>
                    </tr>
                </table>
            </form >
        </>
    )
}
