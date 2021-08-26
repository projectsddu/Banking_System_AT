import React from 'react'
import './RTGS.css'
import { useState, useEffect } from 'react'

export default function NEFTComponent() {

    const [data, setData] = useState({
        name: "",
        ac: "",
        amount: "",
        ISFC: ""
    })
    useEffect(() => {

    }, [data])

    return (
        <div>

            <div >
                <h1 className="neftHeader">Transfer Via RTGS</h1>
            </div>
            <div>
                <form className="text-light neftForm mt-4">
                    <div class="row mb-3 ">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Beneficiary Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" id="inputEmail3"
                                value={data["name"]}
                                onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                                // setUserDetails()
                                placeholder="Beneficiary Name" />
                        </div>
                    </div>
                    <div class="row mb-3 ">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Beneficiary A/C</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" id="inputEmail3"
                                value={data["ac"]}
                                onChange={(e) => { setData({ ...data, ac: e.target.value }) }}
                                placeholder="Beneficiary Account Number" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">ISFC code </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control neftInps" placeholder="ISFC code of beneficiary" id="inputPassword3"
                                value={data["ISFC"]}
                                onChange={(e) => { setData({ ...data, ISFC: e.target.value }) }}
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
                        <button className="custBtn1">Transfer Amount</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
