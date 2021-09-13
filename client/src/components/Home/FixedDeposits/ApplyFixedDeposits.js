import React from 'react'
import './ApplyFixedDeposits.css'
import cal from '../Utility/FixedDeposit/FixedDepositCalc'
export default function ApplyFixedDeposits() {
    return (
        <>
            {/* <form action="#" method="post" name="f1"> */}
            <table>
                <tr>
                    <td>Type of deposit</td>
                    <td>
                        <input type="radio" name="depositType" value="fd" onClick="checkType();" />Fixed deposit
                        <input type="radio" name="depositType" value="rd" onClick="checkType();" />Recurring deposit
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
            {/* </form > */}
        </>
    )
}
