import React from 'react'
import CardComponent from './CardComponent'
// import Line from './Chart_test_comp'
// import ChartContainer from './Chart_test_comp'
import LineChart from './Chart_test_comp'

export default function HomeComponent() {
    const left_data = {
        "header": "Income Expense Chart",
        "quote": "Spend as much as you have!",
        "ul_header": "Insights",
        "ul_data": [
            "Your Credits are: 3000$",
            "Your Debits are: 4000$",
            "Your net Income is: -1000$",
            "Overall Profile Rating (OPR):Poor"
        ]
    }
    return (<>
        <div className="row mt-3">

            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>
            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>
            <CardComponent className="col-4" username="Jenil Gandhi"></CardComponent>

        </div>
        <div className="row">
            <LineChart data={[{ name: 'Jan', income: 400, expense: 600 },
            { name: 'Feb', income: 400, expense: 200 },
            { name: 'Mar', income: 600, expense: 700 },
            { name: 'Apr', income: 900, expense: 400 },
            { name: 'May', income: 1200, expense: 900 },
            { name: 'Jun', income: 500, expense: 700 }]} prop={left_data}
            />
        </div>
    </>
    )
}