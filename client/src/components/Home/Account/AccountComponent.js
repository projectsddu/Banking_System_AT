import React from 'react'
// import CreditCardComponent from '../CreditCard/CreditCardComponents'
import DebitCardComponent from '../DebitCard/DebitCardComponent'
import './AccountStyles.css'


export default function AccountComponent() {
    return (
        <div className="Account-page-wrapper ">
            <div className="col bord">
                <div className="row topDetails">
                    <div className="col-7 ">
                        <DebitCardComponent cvv="588" className="col-6" type_card="credit" valid_thru="06/21" name="Mahendra Corp" cardnumber="1234-5555-2234-9900"></DebitCardComponent>
                    </div>
                    <div className="col-5 leftDetails ">
                        <div className="detailsHeader ">
                            <h1 className="name-header"><>Mahendra Corp</></h1>
                        </div>
                        <div className="acDetails">
                            <h2 className="left-money"> Balance:<span className="money"> $44453235</span></h2>

                        </div>
                        <div className="acDetails">
                            <div className="row">
                                <h2 className="left-money col-5">Holders:</h2>
                                <span className="holder col-7"> Jenil Keval Rikin </span>
                            </div>
                        </div>
                        <div className="paymentButton mt-4">
                            <button className="btn payment">Make Payment</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
