import React from 'react'
import './CarouselComponent.css'

export default function CarouselComponent() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel main_carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item carousel_item active">
                        <div className="bg">
                            <h1>jenil</h1>
                            <h1>jenil</h1>
                            <h1>jenil</h1>
                            <h1>jenil</h1>
                        </div>
                    </div>
                    <div class="carousel-item carousel_item">
                        <div className="bg">
                            <h1>jenil</h1>
                        </div>
                    </div>
                    <div class="carousel-item carousel_item">
                        <div className="bg">
                            <h1>jenil</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}



