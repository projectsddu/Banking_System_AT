import React from 'react'
import HomeComponent from './HomeComponent'
import TransactionComponent from './TransactionComponent'
import TopNavbarComponent from './TopNavbarComponent'
import EcardsComponent from './EcardsComponent'
import BalanceComponent from '../Home/Transaction/BalanceComponent'

function RightComponent({ component_name }) {
    const component_mapping = {
        "home": <HomeComponent></HomeComponent>,
        "transaction": <TransactionComponent></TransactionComponent>,
        "ecards": <EcardsComponent></EcardsComponent>,
        "balance": <BalanceComponent></BalanceComponent>
    }
    return (
        <div className="col">
            <div className="row">

                <TopNavbarComponent property_name={component_name}></TopNavbarComponent>
            </div>
            <div className="row">

                {component_mapping[component_name]}

            </div>
        </div>
    )
}

export default RightComponent
