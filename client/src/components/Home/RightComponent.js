import React from 'react'
import HomeComponent from './HomeComponent'
import TopNavbarComponent from './TopNavbarComponent'
import EcardsComponent from './EcardsComponent'
import DebitCardComponent from '../Home/DebitCard/DebitCardComponent'
import CreditCardComponent from '../Home/CreditCard/CreditCardComponents'
import BalanceComponent from '../Home/Transaction/BalanceComponent'
import AccountComponent from '../Home/Account/AccountComponent'


function RightComponent({ component_name }) {
    const component_mapping = {
        "home": <HomeComponent></HomeComponent>,
        "ecards": <EcardsComponent></EcardsComponent>,
        "ecards/debitcards": <DebitCardComponent></DebitCardComponent>,
        "ecards/creditcards": <CreditCardComponent></CreditCardComponent>,
        "balance": <BalanceComponent></BalanceComponent>,
        "account": <AccountComponent></AccountComponent>
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
