import React from 'react'
import CardComponent from './CardComponent'

export default function HomeComponent() {
    return (
        <div className="row mt-3">

            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>
            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>
            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>

        </div>
    )
}