import React from 'react'
import './MakePayment.css'


function MakePayment() {
    return (<>

        <div class="make-payment-row">
            <div class="make-payment-col-75">
                <div class="make-payment-container">
                    <form action="#">
                        <div class="make-payment-row">
                            <div class="make-payment-col-50">
                                <h3 class="make-payment-sender-details"><b>Sender Details</b></h3><br />
                                <label class="make-payment-label" for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input class="make-payment-input" type="text" id="fname" name="firstname" placeholder="Rikin Chauhan" />
                                <label class="make-payment-label" for="ccnum"><i class="fa fa-address-card-o"></i> Credit card number </label>
                                <input class="make-payment-input" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                <label class="make-payment-label" for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input class="make-payment-input" type="text" id="email" name="email" placeholder="rikin@gmail.com" />
                                <div class="make-payment-row">
                                    <div class="make-payment-col-50">
                                        <label class="make-payment-label" for="expmonth">Expiry Month</label>
                                        <input class="make-payment-input" type="text" id="expmonth" name="expmonth" placeholder="September" />
                                    </div>
                                    <div class="make-payment-col-50">
                                        <label class="make-payment-label" for="expyear">Expiry Year</label>
                                        <input class="make-payment-input" type="text" id="expyear" name="expyear" placeholder="2018" />
                                    </div>
                                </div>
                                <label class="make-payment-label" for="cvv">CVV</label>
                                <input class="make-payment-input" type="text" id="cvv" name="cvv" placeholder="352" />
                            </div>

                            <div class="make-payment-col-50">
                                <h3 class="make-payment-receiver-details">Receiver Details</h3><br />
                                <label class="make-payment-label" for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input class="make-payment-input" type="text" id="fname" name="firstname" placeholder="Jenil Gandhi" />
                                <label class="make-payment-label" for="acnum"><i class="fa fa-address-card-o"></i> Account Number</label>
                                <input class="make-payment-input" type="text" id="acnum" name="acnum" placeholder="1111-2222-3333-4444" />
                                <label class="make-payment-label" for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input class="make-payment-input" type="text" id="email" name="email" placeholder="jenil@gmail.com" />
                                <label class="make-payment-label" for="amount">Amount</label>
                                <input class="make-payment-input" type="text" id="amount" name="amount" placeholder="john@example.com" />
                                <label class="make-payment-label" for="reason">Reason</label>
                                <input class="make-payment-input" type="text" id="reason" name="reason" placeholder="Health Emergency" />
                            </div>
                        </div>
                        <input type="submit" value="Make Payment" class="make-payment-btn" />
                    </form>
                </div>
            </div>
        </div>

    </>
    )
}
export default MakePayment
