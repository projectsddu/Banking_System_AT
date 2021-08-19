import React, { useState, useEffect } from 'react'
import './TransactionTable.css'
import GREEN_DOWN_ARROW_LOGO from '../Asset/green_down_arrow_for_transaction.svg'
import RED_UP_ARROW_LOGO from '../Asset/red_up_arrow_for_transaction.svg'

function TransactionTable(props) {

    const [transactions, setTransactions] = useState(props.trxdata);
    const [income, setIncome] = useState({ "credit": 0, "debit": 0 })

    // function used for sorting the transactions by amount
    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] < b[property]) {
                return 1;
            }
            else if (a[property] > b[property]) {
                return -1;
            }
            return 0;
        }
    }

    // used to sort the transaction according to date
    function compDate(a, b) {
        return new Date(b["date"]).getTime() - new Date(a["date"]).getTime();
    }

    // this is an onclick method to sort the transaction by the date
    function sortByDate() {
        transactions.sort(compDate)
        setTransactions(transactions.map((e) => { return e }));
        console.log(transactions);
    }

    // this is an onclick method to sort the transaction by the amounts
    function sortByAmount() {
        transactions.sort(sortByProperty("amount"))
        setTransactions(transactions.map((e) => { return e }));
        console.log(transactions);
    }

    function getTotalByAmount() {
        // transactions must be initialized
        var credit = 0
        var debit = 0
        transactions.map((e) => {
            e["type"] == "debit" ? debit += e["amount"] : credit += e["amount"]
        })
        setIncome({ "credit": credit, "debit": debit })
    }

    useEffect(() => {
    }, [transactions]);

    useEffect(() => {
        getTotalByAmount()
    }, [])
    return (
        <div>
            <div class="trx-wrapper rounded">
                <nav class="navbar topnavigation navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <a class="navbar-brand" href="#">{props.heading}<p class="text-muted pl-1">{props.lowerheading}</p> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item "> <a href="#"><span class="fa fa-search"></span></a> <input type="search" class="dark" placeholder="Search" /></li>
                        </ul>
                    </div>
                </nav>
                <br />
                <div class="row mt-2 pt-2">
                    <div class="col-md-6" id="income">
                        <div class="d-flex justify-content-start align-items-center">
                            {/* <p class="fa fa-long-arrow-down"></p> */}
                            <img className="GREEN_DOWN_ARROW_LOGO" src={GREEN_DOWN_ARROW_LOGO} />
                            <p class="text mx-3">Income</p>
                            <p class="text-white ml-4 money">${income["credit"]}</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-md-end align-items-center">
                            {/* <div class="fa fa-long-arrow-up"></div> */}
                            <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} />
                            <div class="text mx-3">Expense</div>
                            <div class="text-white ml-4 money">${income["debit"]}</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <ul class="nav nav-tabs w-75">
                        <li class="nav-item"> <a class="nav-link active" href="#history">History</a> </li>
                    </ul>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table table-dark table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <button class="sort-btns">
                                        Activity
                                    </button>
                                </th>
                                <th scope="col">
                                    <button class="sort-btns">
                                        Account
                                    </button>
                                </th>
                                <th scope="col">
                                    <button class="sort-btns" onClick={() => sortByDate()}>
                                        Date <i class="fas fa-sort"></i>
                                    </button>
                                </th>
                                <th scope="col">
                                    <button class="sort-btns">
                                        Mode
                                    </button>
                                </th>
                                <th scope="col" class="text-right">
                                    <button class="sort-btns" onClick={() => sortByAmount()}>
                                        Amount <i class="fas fa-sort"></i>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(e => {
                                return (
                                    <tr>
                                        <td scope="row"> <span class="fa fa-briefcase mr-1"></span> {e["activity"]} </td>
                                        <td>{e["account_no"]}</td>
                                        <td class="text-muted">{e["date"]}</td>
                                        <td class="text-muted">{e["mode"]}</td>
                                        <td class="d-flex justify-content-end align-items-center"> {e["type"] == "debit" ? <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} /> : <img className="GREEN_DOWN_ARROW_LOGO" src={GREEN_DOWN_ARROW_LOGO} />} ${e["amount"]} </td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-between align-items-center results"> <span class="pl-md-3">Showing<b class="text-white"> 1-7 0f 200 </b> trasactions</span>
                    <div class="pt-3">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item disabled"> <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&lt;</span> </a> </li>
                                <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&gt;</span> </a> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionTable