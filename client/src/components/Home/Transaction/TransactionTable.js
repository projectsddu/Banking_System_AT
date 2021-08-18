import React, { useState, useEffect } from 'react'
import './TransactionTable.css'
import GREEN_DOWN_ARROW_LOGO from '../Asset/green_down_arrow_for_transaction.svg'
import RED_UP_ARROW_LOGO from '../Asset/red_up_arrow_for_transaction.svg'

function TransactionTable() {


    const transaction_data = [
        {
            "activity": "Coorg Trip",
            "account_no": "XXX4563",
            "date": "12 Jul 2020, 12:30 PM",
            "mode": "Card",
            "role": '',
            "amount": 23
        },
        {
            "activity": "Hotel Leela Palace",
            "account_no": "XXX1875",
            "date": "11 June 2020, 2:00 PM",
            "mode": "NEFT",
            "amount": 20
        },
        {
            "activity": "Monthly Salary",
            "account_no": "XXX1889",
            "date": "10 Jul 2020, 8:30 PM",
            "mode": "RTGS",
            "amount": 2003
        },
        {
            "activity": "Dinner Party",
            "account_no": "XXX7875",
            "date": "29 May 2020, 5:30 PM",
            "mode": "Card",
            "amount": 12.90
        },
        {
            "activity": "Kerala Trip",
            "account_no": "XXX1234",
            "date": "12 Jul 2020, 11:00 AM",
            "mode": "Card",
            "amount": 100
        },
    ];

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
        // console.log('date is clicked');
        transaction_data.sort(compDate)
        // console.log(transaction_data);
    }

    // this is an onclick method to sort the transaction by the amounts
    function sortByAmount() {
        // console.log('amount is clicked');
        transaction_data.sort(sortByProperty("amount"));
        // console.log(transaction_data);
    }

    const [transactions, setTransactions] = useState()


    return (
        <div>
            <div class="trx-wrapper rounded">
                <nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <a class="navbar-brand" href="#">Transactions <p class="text-muted pl-1">Welcome to your transactions</p> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
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
                            <p class="text-white ml-4 money">$9,758.23</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-md-end align-items-center">
                            {/* <div class="fa fa-long-arrow-up"></div> */}
                            <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} />
                            <div class="text mx-3">Expense</div>
                            <div class="text-white ml-4 money">$961.23</div>
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
                                    <button>
                                        Activity
                                    </button>
                                </th>
                                <th scope="col">
                                    <button>
                                        Account
                                    </button>
                                </th>
                                <th scope="col">
                                    <button onClick={() => sortByDate()}>
                                        Date
                                    </button>
                                </th>
                                <th scope="col">
                                    <button>
                                        Mode
                                    </button>
                                </th>
                                <th scope="col" class="text-right">
                                    <button onClick={() => sortByAmount()}>
                                        Amount
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction_data.map(e => {
                                return (
                                    <tr>
                                        <td scope="row"> <span class="fa fa-briefcase mr-1"></span> {e["activity"]} </td>
                                        <td>{e["account_no"]}</td>
                                        <td class="text-muted">{e["date"]}</td>
                                        <td class="text-muted">{e["mode"]}</td>
                                        <td class="d-flex justify-content-end align-items-center"> <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} /><img className="GREEN_DOWN_ARROW_LOGO" src={GREEN_DOWN_ARROW_LOGO} /> ${e["amount"]} </td>
                                    </tr>
                                )
                            })

                            }
                            {/* <tr>
                                <td scope="row"> <span class="fa fa-bed mr-1"></span> Hotel Leela Palace </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">11 Jul 2020, 2:00 PM</td>
                                <td class="text-muted">Card</td>
                                <td class="d-flex justify-content-end align-items-center"> <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} /> $18.9 </td>
                            </tr> */}
                            {/* <tr>
                                <td scope="row"> <span class="fa fa-exchange mr-1"></span> Monthly Salary </td>
                                <td><span class="fa fa-cc-visa"></span></td>
                                <td class="text-muted">10 Jul 2020, 8:30 PM</td>
                                <td class="text-muted">Card</td>
                                <td class="d-flex justify-content-end align-items-center"> <img className="GREEN_DOWN_ARROW_LOGO" src={GREEN_DOWN_ARROW_LOGO} /> $9,765.00 </td>
                            </tr> */}
                            {/* <tr>
                                <td scope="row"> <span class="fa fa-exchange mr-1"></span> Xbox Purchase </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">12 May 2020, 4:30 PM</td>
                                <td class="text-muted">NEFT</td>
                                <td class="d-flex justify-content-end align-items-center"> <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} /> $198.90 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-cutlery mr-1"></span> Dinner Party </td>
                                <td><span class="fa fa-cc-visa"></span></td>
                                <td class="text-muted">11 May 2020, 5:30 PM</td>
                                <td class="text-muted">Card</td>
                                <td class="d-flex justify-content-end align-items-center"> <img className="GREEN_DOWN_ARROW_LOGO" src={GREEN_DOWN_ARROW_LOGO} /> $12.90 </td>
                            </tr> */}
                            {/* <tr>
                                <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Nandini Hills Ride </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">10 May 2020, 01:30 PM</td>
                                <td class="text-muted">Cheque</td>
                                <td class="d-flex justify-content-end align-items-center"> <img className="RED_UP_ARROW_LOGO" src={RED_UP_ARROW_LOGO} /> $97.9 </td>
                            </tr> */}
                            {/* <tr>
                                <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Goa Beach Party </td>
                                <td><span class="fa fa-cc-visa"></span></td>
                                <td class="text-muted">09 May 2020, 01:30 PM</td>
                                <td class="text-muted">Card</td>
                                <td class="d-flex justify-content-end align-items-center"> <img className="GREEN_DOWN_ARROW_LOGO" src={GREEN_DOWN_ARROW_LOGO} /> $97.9 </td>
                            </tr> */}
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