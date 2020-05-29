import React from 'react';
import { Link } from 'react-router-dom';

export default () => {


    return (
        <header className="header">
            <div className="header-logo"><Link to="/">Gatsby CMS</Link></div>

            <nav className="header-navigation">
                <ul className="header-navigation-ul">
                    <li className="header-navigation-li"><Link to="/">Home</Link></li>
                    <li className="header-navigation-li"><Link to="/about/">About</Link></li>
                    <li className="header-navigation-li"><Link to="/users/">Users</Link></li>
                    <li className="header-navigation-li"><Link to="/login/">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}