import React from 'react'
import CardComponent from './CardComponent'
// import Line from './Chart_test_comp'
import ChartContainer from './Chart_test_comp'

export default function HomeComponent() {
    return (<>
        <div className="row mt-3">

            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>
            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>
            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>

        </div>
        <div className="row">
            <ChartContainer></ChartContainer>
        </div>
    </>
    )
}