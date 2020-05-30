import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Header = ({ state }) => {
    return (
        <header className="header">
            <div className="header-logo"><Link to="/">Gatsby CMS</Link></div>

            <nav className="header-navigation">
                <ul className="header-navigation-ul">

                    { state.token !== null ? (
                        <>
                            <li className="header-navigation-li"><Link to="/">Home</Link></li>
                            <li className="header-navigation-li"><Link to="/about/">About</Link></li>
                            <li className="header-navigation-li"><Link to="/users/">Users</Link></li>
                        </>
                    ) : (
                        <li className="header-navigation-li"><Link to="/login/">Login</Link></li>
                    )}

                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = ({ auth }) => ({
    state: {
        token: auth.token
    }
})

export default connect(mapStateToProps)(Header);
