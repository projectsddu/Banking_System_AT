import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import './SideNavbar.css'

function SideNavbar() {

    const [loading, setLoading] = useState(true);
    const [navlist, setNavlist] = useState([])
    useEffect(() => {
        const navbar_json = [
            {
                "text": "Transactions",
                "vector-asset": "link to it",
                "vector-asset-color": "#ccff00",
                "background-color": "purple",
                "text-color": "purpleText",
                "is_drop": true,
                "href":"/home",
                "dropdown_menu": [
                    {
                        "text": "RTGS",
                        "vector-asset": "link",
                        "text-color": "green",
                        "background-color": "purple",
                        "href": "link to the page"
                    },
                    {
                        "text": "NEFT",
                        "vector-asset": "link",
                        "text-color": "green",
                        "background-color": "purple",
                        "href": "link to the page"
                    }
                ]
            },
            {
                "text": "Account Details",
                "vector-asset": "link to it",
                "vector-asset-color": "#ccff00",
                "background-color": "blue",
                "text-color": "blueText",
                "href": "/home",
            },
            {
                "text": "Your E-cards",
                "vector-asset": "link to it",
                "vector-asset-color": "#ccff00",
                "background-color": "purple",
                "text-color": "purpleText",
                "href": "/home",
            },
            {
                "text": "Quick Transfer",
                "vector-asset": "link to it",
                "vector-asset-color": "#ccff00",
                "background-color": "blue",
                "text-color": "blueText",
                "href": "/home",
            },
            {
                "text": "24 X 7 Assistance",
                "vector-asset": "link to it",
                "vector-asset-color": "#ccff00",
                "background-color": "purple",
                "text-color": "purpleText",
                "href": "/login",
            }

        ]
        setNavlist(navbar_json);
        setLoading(false);

    }, [])
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" >
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use href="#home"></use></svg>
                <span class="fs-4">Bankers</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                {loading ? <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : navlist.map((e) => {
                    return (

                        e["is_drop"] ? <>


                            <li class="mb-1">
                                <button className={"nav-item btn btn-toggle align-items-center  " + e["background-color"]} data-bs-toggle="collapse" data-bs-target="#home-collapse" >{e["text"]}</button>
                                <div class="collapse show" id="home-collapse">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        {e["dropdown_menu"].map((e1)=>{
                                            return(
                                                <>
                                                    <li><a href="#" class="link-dark rounded">{e1["text"]}</a></li>
                                                </>
                                            )
                                        })}
                                        
                                       
                                    </ul>
                                </div>
                            </li>

                        </> :

                            <li class={"nav-item " + e["background-color"]}>
                                <NavLink to={e["href"]} className={"nav-link " + e["text-color"]} aria-current="page">
                                    <svg class="bi me-2" width="16" height="16"><use href="#home"></use></svg>
                                    {e["text"]}
                                </NavLink>
                            </li>


                    )
                })}

            </ul >
            <hr />

        </div >
    )
}

export default SideNavbar
