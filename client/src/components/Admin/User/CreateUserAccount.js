import React, { useState, useEffect } from 'react'
import './CreateUserAccount.css'
import { NavLink } from 'react-router-dom';


function CreateUserAccount() {

    const [accountDetails, setAccountDetails] = useState()

    return (
        <div className="create-user-account-form-wrapper container">
            <form className="mt-3">
                <p>Make new user account</p>
                <div>

                    <ul style={{ "margin-bottom": "0px", "listStyle": "none" }}>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle choosers" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Users
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink class="dropdown-item" to="/admin/createUser">Create User</NavLink></li>
                                <li><NavLink class="dropdown-item" to="/admin/createUserAccount">Create User Account</NavLink></li>

                                <li><NavLink class="dropdown-item" to="/admin/blockUserAccount">Block User Account</NavLink></li>

                            </ul>
                        </li>
                    </ul>

                    <input type="Number" className="create-user-account-input my-2" placeholder="Enter Account Balance" />

                    <button type="submit" className="btn btn-primary craete-user-account-subBtn">Add User Account</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUserAccount
