import React from 'react';
import { NavLink } from 'react-router-dom';
import './Errors.scss';
const Errors = () => {
    return (
        <div className ="error-container">
            <h1> Oops 404 Page Not Found !</h1>
            <div className = 'optional-route'>
                <label> Try going back to <NavLink to ='/' >Home</NavLink> ? </label>
            </div>
        </div>
    )
}

export default Errors
