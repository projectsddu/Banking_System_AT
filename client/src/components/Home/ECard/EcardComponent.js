import React from 'react'
import './Ecard.css'

export default function EcardComponent(props) {
    var card_class = props.type_card
    var class_card
    card_class == "debit" ? class_card = "card" : class_card = "card1"
    class_card = "card"
    return (
        <>
            <div className="card-wrappers">
                <div class={class_card}>
                    <div class="upper">
                        <h4>Bankers</h4>
                        <h5>American Express</h5>
                    </div>
                    <div className="middle">
                        <h5>CVV <b type="password">{props.cvv}</b></h5>
                        <h6>Valid Thru:<b>{props.valid_thru}</b></h6>
                    </div>
                    <div class="lower">
                        <h4><b>{props.cardnumber}</b></h4>
                        <h5>{props.name}</h5>
                    </div>
                </div>
            </div>

        </>




    )
}
