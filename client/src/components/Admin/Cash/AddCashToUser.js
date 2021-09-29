import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import "./AddCashToUser.css"


function AddCash() {
    return (
        <div>
            <div className="add-cash-form-wrapper container">
                <form className="mt-3">
                    <p>Add Cash to User</p>
                    <div>
                        <input className="add-cash-input my-2" placeholder="Enter User Account Number" />
                        <input className="add-cash-input my-2" placeholder="Enter Amount" />
                        <input className="ddu-input my-2" placeholder="Enter Admin PinNo" type="password"
                            required
                        />
                        <button type="submit" className="btn btn-primary add-cash-subBtn">Add Cash</button>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>

        </div>
    )
}

export default AddCash
