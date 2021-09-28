import React from 'react'
import "./AdminLogin.css"
import img from "../Assets/218.jpg"
import { useState, useEffect } from 'react'


export default function AdminLogin() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        pinNo: ''
    });
    return (
        <>
            <div className="adminLoginWrapper">
                <div className="topNavBar">
                    <a href="/login">Bankers</a>
                </div>
                <div className="row" style={{ "margin-top": "5%" }}>
                    <div className="col-6 brdr-right">
                        <div className="adminImgDiv">
                            <img src={img} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="adminLoginDiv">

                            <form>
                                <div class="wrapper">
                                    <div className="Login_text">
                                        <h2><b>Login</b></h2>
                                    </div>
                                    <div class="input-data m-4">
                                        <input id="username"
                                            type="text"
                                            value={userDetails.username}
                                            onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                                            required
                                        />
                                        <div class="underline"></div>
                                        <label>User ID / Account Number</label>
                                    </div>
                                    <div class="input-data m-4">
                                        <input id="pinNo"
                                            type="password"
                                            value={userDetails.pinNo}
                                            onChange={e => setUserDetails({ ...userDetails, pinNo: e.target.value })}
                                            required
                                        />
                                        <div class="underline"></div>
                                        <label>IPIN / Password</label>
                                    </div>
                                    <button type="submit" class="  loginbtn">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
