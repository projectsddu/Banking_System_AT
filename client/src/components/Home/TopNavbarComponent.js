import React from 'react'
import './TopNavbarComponent.css'

export default function TopNavbarComponent({ property_name }) {
    return (
        <div>
            <nav class="navbar ">
                <div class="container topnav">
                    <p className="navText">{property_name}</p>
                    <p className="float-left">img username</p>
                </div>

            </nav>
        </div>
    )
}
