import React, { useState, useEffect } from 'react'
import './MakePayment.css'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'


function MakePayment() {
    
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
    const parseCardnum = (data)=>{
        data = String(data)
        let str1 = ""
        str1+=data.substring(0, 4)+"-"
        str1+=data.substring(4,8)+"-"
        str1+=data.substring(8,12)+"-"
        str1+=data.substring(12,16)
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
    const expiryYear = (new Date(expiryDate)).getFullYear(); ;

    console.log(loading ? "fecthing data" : data["data"][0]);
    const spinner = <><h1>Jenil</h1></>
    return (
      <>
        <div class="make-payment-row">
          <div class="make-payment-col-75">
            <div class="make-payment-container">
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
                          <div
                            class="spinner-border text-warning"
                            role="status"
                            disabled
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
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
                          ? "spinner"
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
                              ? "spinner"
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
                              ? "spinner"
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
                      value={loading ? spinner : data["data"][0]["cvvNumber"]}
                    />
                  </div>

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
                      name="firstname"
                      placeholder="Jenil Gandhi"
                    />
                    <label class="make-payment-label" for="acnum">
                      <i class="fa fa-address-card-o"></i> Account Number
                    </label>
                    <input
                      class="make-payment-input"
                      type="text"
                      id="acnum"
                      name="acnum"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label class="make-payment-label" for="email">
                      <i class="fa fa-envelope"></i> Email
                    </label>
                    <input
                      class="make-payment-input"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="jenil@gmail.com"
                    />
                    <label class="make-payment-label" for="amount">
                      Amount
                    </label>
                    <input
                      class="make-payment-input"
                      type="text"
                      id="amount"
                      name="amount"
                      placeholder="john@example.com"
                    />
                    <label class="make-payment-label" for="reason">
                      Reason
                    </label>
                    <input
                      class="make-payment-input"
                      type="text"
                      id="reason"
                      name="reason"
                      placeholder="Health Emergency"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Make Payment"
                  class="make-payment-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
export default MakePayment
