import React from 'react'
import './CardComponentBalance.css'

function CardComponentBalance(props) {
    return (
        <div class="main_card  balance_card ">
            <div class="card-body p-0 d-flex flex-fill">
                <div class="row g-0 w-100">
                    <div class="">
                        <div class="balance_card-text p-3 m-1">
                            <h4 class="balance_card-text">{props.info}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponentBalance
