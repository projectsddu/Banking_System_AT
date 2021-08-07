import React from 'react'
import './CardComponent.css'

function CardComponent(props) {
    return (
        <div class="gen_card  illustration ">
            <div class="card-body p-0 d-flex flex-fill">
                <div class="row g-0 w-100">
                    <div class="">
                        <div class="illustration-text p-3 m-1">
                            <h4 class="illustration-text">Welcome Back,<br /> {props.username}</h4>
                            <p class="mb-0">Bankers Dashboard</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardComponent
