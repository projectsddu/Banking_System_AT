import React from 'react'
import "./CreateUser.css"

export default function CreateUser() {
    return (
        <div className="form-wrapper container">
            <form className="mt-3">
                <p>Make New User</p>
                <div>
                    <input className="ddu-input my-2" placeholder="Enter First Name" />
                    <input className="ddu-input my-2" placeholder="Enter Middle Name" />
                    <input className="ddu-input my-2" placeholder="Enter Last Name" />
                    <input className="ddu-input my-2" placeholder="Enter Pan card number" />
                    <input className="ddu-input my-2" placeholder="Enter Aadhar card number" />
                    <input className="ddu-input my-2" placeholder="Enter Mobile Number" />
                    <input className="ddu-input my-2" placeholder="Enter Pin Number" type="number" maxlength="4" />
                    <input className="ddu-input my-2" placeholder="Enter DOB" type="date" /><br />
                    <button type="submit" className="btn btn-primary subBtn">Add User</button>
                </div>
            </form>
        </div>
    )
}
