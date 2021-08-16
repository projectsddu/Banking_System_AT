import React from 'react'
import CardComponent from '../CardComponent'
import CardComponentBalance from './CardComponentBalance'
import ARROW_LOGO from '../Asset/arrow_logo.svg'
import TransactionTable from './TransactionTable'

export default function BalanceComponent() {
    const topjsx = <>
        <h3>Transfer your funds Quickly </h3>
    </>
    const bottomjsx = <>
        <img className="col-3  leading_icon" src={ARROW_LOGO} />
    </>
    const lg1 = "linear-gradient(270deg, #506aff, rgb(100, 245, 107) )"
    const lg2 = "linear-gradient(270deg, #506aff, rgb(100, 245, 107) )"
    const lg3 = "linear-gradient(270deg, #506aff, rgb(100, 245, 107) )"
    return (<>
        <div className="row mt-3">
            <CardComponentBalance lg={lg1} className="col-4" info="Jenil Gandhi"></CardComponentBalance>
            <CardComponentBalance lg={lg2} className="col-4" info="Your Balance: "></CardComponentBalance>
            <CardComponentBalance lg={lg3} className="col-4" iscustom={true} lowerjsx={bottomjsx} topjsx={topjsx} info="Click for Quick Transfer"></CardComponentBalance>
            {/* <img className="col-3  leading_icon" src={ARROW_LOGO} /> */}
        </div>
        <div>
            <TransactionTable></TransactionTable>
        </div>
    </>
    )
}
