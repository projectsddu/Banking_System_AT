import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNavbar() {
    return (
        <div className="fill temp">
            <h4>Bankers</h4>
            <h3 className="fill"><NavLink to="/home">Home</NavLink></h3>
            <h3 className="fill"><NavLink to="/transaction">Transactions</NavLink></h3>
            
        </div>
    )
}

export default SideNavbar
