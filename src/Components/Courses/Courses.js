// built-in
import { useState } from 'react';

// internal
import './Courses.css';
import { endpoint } from '../../Config';

// external
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="nav-courses">
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
                </li>
                <li className="profile">
                    <img src={`${process.env.PUBLIC_URL}/img/profile_user.jpg`} className="rounded-circle" width="50" />
                    <div>Halo, Shotaro Osaki</div>
                </li>
            </ul>
        </nav>
    );
}

const Courses = () => {
    return (
        <Nav />
    );
}

export default Courses;