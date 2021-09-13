import React from 'react'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { injectStyle } from "react-toastify/dist/inject-style";
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import './NEFT.css'

export default function NEFTComponent() {

    const [data, setData] = useState({
        beneficiaryName: "",
        beneficiaryAcNum: "",
        amount: "",
        ifscCode: "",
        reason: ""
    })
    useEffect(() => {

    }, [data])

    function handleOnSubmit(e) {
        e.preventDefault();
        saveData();
    }

    const slug = useLocation();
    console.log(slug["pathname"].split("/"));

    const saveData = async function () {

        const acNum = slug["pathname"].split("/")[2];
        console.log(acNum);

        fetch('/verifyNEFT/' + acNum, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function (response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            if (data.hasOwnProperty("Success:")) {
                // console.log(data)
                toast.success("Your payment was a success");
                // history.goBack()
            }
            else {
                toast.dark("Something went wrong!");
                // console.log(data.body)
            }
        }).catch(function (error) {
            // console.log(error.body)
            toast.dark("Something went wrong! ++");
        });
    }

    return (
        <div>

            <div >
                <h1 className="neftHeader">Transfer Via NEFT</h1>
            </div>
            <div>
                <form className="text-light neftForm mt-4">
                    <div class="row mb-3 ">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Beneficiary Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" id="inputEmail3"
                                value={data["beneficiaryName"]}
                                onChange={(e) => { setData({ ...data, beneficiaryName: e.target.value }) }}
                                // setUserDetails()
                                placeholder="Beneficiary Name" />
                        </div>
                    </div>
                    <div class="row mb-3 ">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Beneficiary A/C</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" id="inputEmail3"
                                value={data["beneficiaryAcNum"]}
                                onChange={(e) => { setData({ ...data, beneficiaryAcNum: e.target.value }) }}
                                placeholder="Beneficiary Account Number" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">ISFC code </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" placeholder="ISFC code of beneficiary" id="inputPassword3"
                                value={data["ifscCode"]}
                                onChange={(e) => { setData({ ...data, ifscCode: e.target.value }) }}
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="reason" class="col-sm-2 col-form-label">Reason </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" placeholder="Reason" id="reason"
                                value={data["reason"]}
                                onChange={(e) => { setData({ ...data, reason: e.target.value }) }}
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Amount </label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control neftInps" placeholder="Amount" id="inputPassword3"
                                value={data["amount"]}
                                onChange={(e) => { setData({ ...data, amount: e.target.value }) }}
                            />
                        </div>
                    </div>
                    <div class="row custCol mb-3">
                        <button onClick={handleOnSubmit} className="custBtn1">Transfer Amount</button>
                    </div>
                </form>
            </div>

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
    )
}
