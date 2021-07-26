import React from 'react'
import './LoginComponent.css'
import img from "./Asset/login_asset.jpg"

export default function LoginComponent({ data }) {
    return (
        <>
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

                    <div className="login mb-3">
                        <div className="Login_text">
                            <h2><b>Login</b></h2>
                        </div>
                        <div class="mt-3 mb-2">
                            <label for="username" class="form-label"><b>User ID / Account Number:</b></label>
                            <input type="text" class="form-control" id="username" placeholder="Enter the username or account number" />

                        </div>
                        <div class="mt-3 mb-3">
                            <label for="pin_number" class="form-label"><b>Pin Number:</b></label>
                            <input type="password" class="form-control" id="pin_number" placeholder="Enter PIN number" />
                        </div>
                        <button type="submit" class="btn btn-primary loginbtn">Login</button>
                    </div>
                </form>
            </div>

        </>
    )
}
