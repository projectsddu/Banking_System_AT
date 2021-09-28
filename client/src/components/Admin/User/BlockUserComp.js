import React from 'react'
import "./CreateUser.css"

export default function BlockUserComp() {
    return (
        <div>
            <div className="form-wrapper">
                <form className="mt-3" style={{ "width": "50%" }}>
                    <p>Block User</p>
                    <div>
                        <input className="ddu-input my-2" placeholder="Enter Full Name" />

                        <div>
                            {/* <h5>Result:</h5> */}
                        </div>
                        <input className="ddu-input my-2" placeholder="Enter PinNo" type="password" />

                        <button type="submit" className="btn btn-primary subBtn">Block User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
