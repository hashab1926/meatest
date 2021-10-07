import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
    render() {
        return (
            <nav className="nav-courses">
                <ul>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} width="150" />
                    </li>
                    <li className="profile">
                        <img src={`${process.env.PUBLIC_URL}/img/profile_user.jpg`} className="rounded-circle" width="40" />
                        <div>Halo, {sessionStorage.getItem('name')}</div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;