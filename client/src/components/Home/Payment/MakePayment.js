import React, { useState, useEffect } from 'react'
import './MakePayment.css'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
// import verifyPayment from '../Utility/VerifyPayment'

function MakePayment() {

    const [userDetails, setUserDetails] = useState({
        fullName: '',
        acNumber: '',
        email:'',
        amount:'',
        reason:''        
    });
    const verifyDetails = async function (data) {
        if(data["accountBalance"]==-1)
        {
            return "please wait while details loads"
        }

        // Check for name
        const name = data["fullName"]
        if (name == "") {
            return "Name cannot be empty"
        }


        // Account Number must be of 24 length
        const acNum = data["acNumber"]
        if (acNum.length != 24) {
            return "Account Number must be 24 Digits long"
        }
        else {
            // Now check to backend if the account exists or not
            const url = "/user/checkExists/" + acNum
            const response = fetch(url, { method: "POST" }).then((e) => {
                if(e.PromiseState=="fulfilled")
                {
                    console.log(e);
                }
                // return e
            });
        }


        // Check for email
        const email = data["email"];
        // if()
        
        // Amount < Your Balance
        const amount = data["amount"]
        const accountBalance = data["accountBalance"]
        if (amount > accountBalance) {
            return "Amount to be transfer must be less than available balance";
        }
        else {
            // need to transfer money from one account to another
        }

        // Reason is optional
        const acNum1 = "c5860";
        const acNum2 = "89747";
        let defaultReason = `Transfer from ${acNum1} to ${acNum2}`;
        const reason = data["reason"]
        if (reason != "") {
            return defaultReason;
        }
        else {

        }
    }

    function handleOnSubmit(e) {

        e.preventDefault()
        userDetails["accountBalance"] = loading?-1:data["acDetails"][0]["accountBalance"]
        const msg = verifyDetails(userDetails).then((e)=>{
            toast.dark(e);
        })
        
    }
    // function that used to display string in formatted method
    const capitalize = (str) => {
        const names = str.split(" ")
        let str1 = ""
        names.map((e) => {
            str1 += e[0].toUpperCase() + e.slice(1, e.lengh) + " "
        })
        return str1
    }

    // display card in some manner
    const parseCardnum = (data) => {
        data = String(data)
        let str1 = ""
        str1 += data.substring(0, 4) + "-"
        str1 += data.substring(4, 8) + "-"
        str1 += data.substring(8, 12) + "-"
        str1 += data.substring(12, 16)
        return str1
    }
    let slug = useLocation()
    let make_payement_req = "/cards/getUserDebitCards/" + slug["pathname"].split("/")[2];

    const useFetch = url => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);

        // Similar to componentDidMount and componentDidUpdate:
        useEffect(async () => {
            const response = await fetch(url, { method: "POST" });
            const data = await response.json();
            setData(data);
            console.log(data)
            setLoading(false);
        }, []);

        return { data, loading };
    };

    const { data, loading } = useFetch(make_payement_req);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const expiryDate = loading ? "cancel" : data["data"][0]["expiryDate"];
    const expiryMonth = monthNames[(new Date(expiryDate)).getMonth()];
    const expiryYear = (new Date(expiryDate)).getFullYear();;

    

    // const Loading... = <><h1>Jenil</h1></>
    return (
        <>
            <div class="make-payment-row">
                <div class="make-payment-col-75 ">
                    <div class="make-payment-container make-payment-wrapper">
                        <form action="#">
                            <div class="make-payment-row">
                                <div class="make-payment-col-50">
                                    <h3 class="make-payment-sender-details">
                                        <b>Sender Details</b>
                                    </h3>
                                    <br />
                                    <label class="make-payment-label" for="fname">
                                        <i class="fa fa-user"></i> Full Name
                                    </label>
                                    <input
                                        disabled
                                        class="make-payment-input"
                                        type="text"
                                        id="fname"
                                        name="firstname"
                                        placeholder="Rikin Chauhan"
                                        value={
                                            loading ? (
                                                "Loading..."
                                            ) : (
                                                capitalize(data["ulist"][0])
                                            )
                                        }
                                    />
                                    <label class="make-payment-label" for="ccnum">
                                        <i class="fa fa-address-card-o"></i> Credit card number{" "}
                                    </label>
                                    <input
                                        disabled
                                        class="make-payment-input"
                                        type="text"
                                        id="ccnum"
                                        name="cardnumber"
                                        placeholder="1111-2222-3333-4444"
                                        value={
                                            loading
                                                ? "Loading...."
                                                : parseCardnum(data["data"][0]["cardNumber"])
                                        }
                                    />

                                    <div class="make-payment-row">
                                        <div class="make-payment-col-50">
                                            <label class="make-payment-label" for="expmonth">
                                                Expiry Month
                                            </label>
                                            <input
                                                disabled
                                                class="make-payment-input"
                                                type="text"
                                                id="expmonth"
                                                name="expmonth"
                                                placeholder="September"
                                                value={
                                                    loading
                                                        ? "Loading..."
                                                        : expiryMonth
                                                }
                                            />
                                        </div>
                                        <div class="make-payment-col-50">
                                            <label class="make-payment-label" for="expyear">
                                                Expiry Year
                                            </label>
                                            <input
                                                disabled
                                                class="make-payment-input"
                                                type="text"
                                                id="expyear"
                                                name="expyear"
                                                placeholder="2018"
                                                value={
                                                    loading
                                                        ? "Loading..."
                                                        : expiryYear
                                                }
                                            />
                                        </div>
                                    </div>
                                    <label class="make-payment-label" for="cvv">
                                        CVV
                                    </label>
                                    <input
                                        disabled
                                        class="make-payment-input"
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        placeholder="352"
                                        value={loading ? "Loading..." : data["data"][0]["cvvNumber"]}
                                    />
                                    <label class="make-payment-label" for="acnum">
                                        Your Balance:
                                    </label>
                                    <input
                                        disabled
                                        class="make-payment-input"
                                        type="text"
                                        id="acnum"
                                        name="acnum"
                                        value={loading ? "Loading..." : data["acDetails"][0]["accountBalance"]}
                                    />
                                </div>

{/* Reciever's part */}

                                <div class="make-payment-col-50">
                                    <h3 class="make-payment-receiver-details">
                                        Receiver Details
                                    </h3>
                                    <br />
                                    <label class="make-payment-label" for="fname">
                                        <i class="fa fa-user"></i> Full Name
                                    </label>
                                    <input
                                        class="make-payment-input"
                                        type="text"
                                        id="fname"
                                        value={userDetails.fullName}
                                        name="fullname"
                                        placeholder="Jenil Gandhi"
                                        onChange={e => setUserDetails({ ...userDetails, fullName: e.target.value })}
                                    />
                                    <label class="make-payment-label" for="acnum">
                                        <i class="fa fa-address-card-o"></i> Account Number
                                    </label>
                                    <input
                                        class="make-payment-input"
                                        type="text"
                                        id="acnum"
                                        name="acnum"
                                        minlength="24"
                                        maxLength="24"
                                        value={userDetails.acNumber}
                                        placeholder="1111-2222-3333-4444"
                                        onChange={(e) => {
                                            setUserDetails({ ...userDetails, acNumber: e.target.value })}
                                        }
                                                
                                            
                                    />
                                    <label class="make-payment-label" for="email">
                                        <i class="fa fa-envelope"></i> Email
                                    </label>
                                    <input
                                        class="make-payment-input"
                                        type="email"
                                        pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                        id="email"
                                        name="email"
                                        value={userDetails.email}
                                        placeholder="jenil@gmail.com"
                                        onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                                    />
                                    <label class="make-payment-label" for="amount">
                                        Amount
                                    </label>
                                    <input
                                        class="make-payment-input"
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        value={userDetails.amount}
                                        placeholder="1000"
                                        onChange={e => setUserDetails({ ...userDetails, amount: e.target.value })}
                                    />
                                    <label class="make-payment-label" for="reason">
                                        Reason
                                    </label>
                                    <input
                                        class="make-payment-input"
                                        type="text"
                                        id="reason"
                                        name="reason"
                                        value={userDetails.reason}
                                        placeholder="For car insurance"
                                        onChange={e => setUserDetails({ ...userDetails, reason: e.target.value })}
                                    />
                                </div>
                            </div>
                            <button onClick={handleOnSubmit} type="button" class="make-payment-btn">Send Money</button>
                            {/* <input

                                type="submit"
                                value="Make Payment"
                                class="make-payment-btn"
                            /> */}
                        </form>
                    </div>
                </div>
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
        </>
    );
}
export default MakePayment
