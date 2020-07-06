import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <div className='wrapper'>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
            </div>
        </nav>
        </div>
    )

}

export default Navbar