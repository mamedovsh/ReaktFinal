import React from "react";
// import '../styles/Navbar.css';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
            <div className='navbar'>
                <h2>Nicole's Blog.</h2>
 
                <div className='navbar__list'>
                    <ul>
                        <li>
                            <Link to="/Registration">Login</Link>
                        </li>
                        <li>
                            <Link to="/Catalog">Register</Link>
                        </li>
                        <li>
                            <Link to="/Cart">Write a Story</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
export default Navbar;