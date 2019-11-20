import React from 'react'
import { NavLink } from 'react-router-dom'
import './User.css'

export default function User() {
    return (
        <div>
            <NavLink to="/authentication"> 
            <div className="userIcon"> <i className="fa fa-user" aria-hidden="true"/> </div>
            </NavLink>
        </div>
    )
}