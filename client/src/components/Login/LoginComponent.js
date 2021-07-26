import React from 'react'
import './LoginComponent.css'
import EmptyComponent from '../EmptyComponent'
import img from "./Asset/login_asset.jpg"

export default function LoginComponent({ data }) {
    return (
        <>
            <div className="col-6">
                <div className="row">
                    <img className="Login_Image col-8" src={img} />

                </div>
            </div>
            <div className="col-6">

                <form>

                    <div className="login mb-3">
                        <div className="Login_text">
                            <h2>Login</h2>
                        </div>
                        <div class="mt-3 mb-2">
                            <label for="username" class="form-label">User ID / Account Number:</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter the username or account number" />

                        </div>
                        <div class="mt-3 mb-3">
                            <label for="pin_number" class="form-label">Pin Number:</label>
                            <input type="password" class="form-control" id="pin_number" placeholder="Enter PIN number" />
                        </div>
                        <div class="mb-3">
                            <u><a className="forgot_link" href="login/password_reset">Forgot Password?</a></u>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>

        </>
    )
}
