import React from 'react'
import './LoginComponent.css'
import img from "./Asset/login_asset.jpg"
import './input_field_animation.css'
import { useState,useEffect } from 'react'
const axios = require('axios');

export default function LoginComponent({ data }) {
    const styles = {
        "background-color": "#ffffff",
        "height":"705px"
    }
    

    const [userDetails, setUserDetails] = useState({
        username: '',
        pinNo: ''
    });
    const saveData = async function(e)
    {
        e.preventDefault()
        // Backend API call to login the user
        // console.log(e);
        console.log(userDetails);
        // const res = fetch("")
        var data = JSON.stringify(userDetails)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       

        var raw = data
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log("before fetch");
        fetch("/user/login_user", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <>
        <div className="row" style={styles}>
            <div>
                <h2 className="login_header">Bankers</h2>
            </div>
            <div className="col-6">
                <div className="row">
                    <img className="Login_Image col-8" src={img} />

                </div>
            </div>
            <div className="col-6">
                <form>
                    <div class="wrapper">
                        <div className="Login_text">
                            <h2><b>Login</b></h2>
                        </div>
                        <div class="input-data m-4">
                            <input id="username" 
                                type="text" 
                                value={userDetails.username} 
                                // onChange = {e=>setUserDetails(userDetails[id]=)}
                                onChange={e => setUserDetails({...userDetails , username: e.target.value })} 
                                required 
                            />
                            <div class="underline"></div>
                            <label>User ID / Account Number</label>
                        </div>
                        <div class="input-data m-4">
                            <input id="pinNo" 
                                type="password" 
                                value={userDetails.pinNo} 
                                onChange={e => setUserDetails({...userDetails , pinNo: e.target.value })}  
                                required 
                            />
                            <div class="underline"></div>
                            <label>IPIN / Password</label>
                        </div>
                        <button type="submit" class="btn btn-primary loginbtn" onClick={(e) => saveData(e)}>Login</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}
