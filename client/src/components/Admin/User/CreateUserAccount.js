import React, { useState, useEffect } from 'react'
import './CreateUserAccount.css'
import { NavLink } from 'react-router-dom';
import "./CreateuserController"
import $ from "jquery"


function CreateUserAccount() {

    const [accountDetails, setAccountDetails] = useState({ username: "", balance: 0 })
    const [results, setResults] = useState([])
    useEffect(() => {

    })

    useEffect(() => {
        console.log("jenil gandhi")
        const username = accountDetails.username.toString()
        $.ajax({
            type: "post",
            url: "/admin/get_all_users/" + username,
            success: function (response) {
                const data = response["allUsers"]
                setResults(data)
            }
        })
    }, [accountDetails])
    function handleClickOnLi(e) {
        // console.log(e.target.innerHTML)
        setAccountDetails({ ...accountDetails, username: e.target.innerHTML })
    }
    return (
        <div className="create-user-account-form-wrapper container">
            <form className="mt-3">
                <p>Make new user account</p>
                <div>

                    <input type="text"
                        value={accountDetails.username}
                        onChange={e => setAccountDetails({ ...accountDetails, username: e.target.value })}
                        className="create-user-account-input searchUsers my-2" placeholder="Search Users Here.." />
                    <div className="showSearchResults">
                        {results.length == 0 || accountDetails.username.length == 0 ? (results.length == 0 ? <h5>Sorry No Results Found</h5> : "") : <>

                            <ul className="showsUserData">
                                <h5>Search Results</h5>
                                {results.map((e) => {
                                    return <>
                                        <li onClick={(e) => handleClickOnLi(e)} className="showUsersLi">{e["firstName"] + " " + e["middleName"] + " " + e["lastName"]}</li>
                                    </>

                                })}
                            </ul>
                        </>}
                    </div>
                    <input type="Number"
                        value={accountDetails.balance}
                        onChange={e => setAccountDetails({ ...accountDetails, balance: e.target.value })}
                        className="create-user-account-input my-2" placeholder="Enter Account Balance" />

                    <button type="submit" className="btn btn-primary craete-user-account-subBtn">Add User Account</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUserAccount
