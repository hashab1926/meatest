import React, { Component } from 'react';

import './styles.scss';
import SideLeft from './SideLeft';
import SideRight from './SideRight';


class Login extends Component {

    render() {
        return (
            <div className="wrapper-login">
                <SideLeft title="KOMUNITAS MEA" subtitle="Komunitas Jago Jualan Online" />

                <SideRight title="KOMUNITAS MEA" subtitle="Komunitas Jago Jualan Online" />
            </div>
        );
    }
}


export default Login;