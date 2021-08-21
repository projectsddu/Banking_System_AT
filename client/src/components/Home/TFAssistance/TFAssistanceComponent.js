import React from 'react'
import './TFAssistance.css'

export default function TFAssistanceComponent() {
    return (
        <>
            <div className="row allCardsWrapper">
                <div class="card">
                    <img src="https://source.unsplash.com/1600x900/?money,help" class="card-img-top " alt="..." />
                    <div class="card-body">
                        <h2 class="card-title">Get 24 X 7 Assistance</h2>
                        <p class="card-text">We value our customers and strive for perfection in service.You could talk to a customer reperentative at</p>
                        <br />
                        <p className="cardp"><b>+91 1800-800-800</b></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://source.unsplash.com/1600x900/?mail,mail" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title">Email us</h2><br />
                        <p class="card-text">Having some security issue or need some assistance on loan you could mail us or even contact us. Mail us at</p>
                        <br />
                        <p className="cardp"><b>offical@bankers.com</b></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://source.unsplash.com/1600x900/?india,map" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title">Visit us</h2><br />
                        <p class="card-text">Well this may be little tiring but our staff would be very happy to solve your problems. Find a store</p>
                        <br />
                        <p className="cardp"><b>Maps.google.com</b></p>
                    </div>
                </div>
            </div>
            <div className="normals">
                <div className="">
                    <div className="chatAbove col">


                    </div>
                </div>
            </div>
        </>
    )
}
