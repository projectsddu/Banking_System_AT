import React from 'react'
import CardComponent from '../CardComponent'
import CardComponentBalance from './CardComponentBalance'
import ARROW_LOGO from '../Asset/arrow_logo.svg'
import TransactionTable from './TransactionTable'

export default function BalanceComponent() {
    return (<>
        <div className="row mt-3">
            <CardComponentBalance className="col-4" info="Jenil Gandhi"></CardComponentBalance>
            <CardComponentBalance className="col-4" info="Your Balance: "></CardComponentBalance>
            <CardComponentBalance className="col-4" info="Click for Quick Transfer"></CardComponentBalance>
            <img className="col-3  leading_icon" src={ARROW_LOGO} />
        </div>
        <div>
            <TransactionTable></TransactionTable>
        </div>
    </>
    )
}
