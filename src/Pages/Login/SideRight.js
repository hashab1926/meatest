// built-in
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// internal
import { Navigation, Item } from '../../Components/NavigationLogin/NavigationLogin';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import ControllerLogin from './ContollerLogin';
import { eventBindings } from '../../Helpers/Events';
import Validator from '../../Helpers/Validator';

// only for lifecycle methods
class SideRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        // rules form
        this.rules = {
            email: 'required|email',
            password: 'required|min:6'
        }
        // configuration validator
        this.validator = Validator({
            autoForceUpdate: this,
        });

        // event binding methods
        eventBindings(this, ['handleSubmit', 'handleChange']);

    }


    render() {
        return (
            <section className="right">
                {/* Navigation */}
                <Navigation>
                    <Item itemName="Masuk" />
                    <Item itemName="Daftar" />
                </Navigation>
                {/* /Navigation */}

                {/* Form Login */}
                <section className="wrapper-form-login">
                    <p>Silahkan masuk ke akun Komunitas Mea kamu</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <Input type="text" name="email" onChange={this.handleChange} value={this.state.email} label="Nama Lengkap" placeholder="Masukan Nama Lengkap" />
                            {this.validator.message('email', this.state.email, this.rules.email)}
                        </div>

                        <div className="form-group">
                            <Input type="password" name="password" label="Password" placeholder="Masukan Password" onChange={this.handleChange} value={this.state.password} />
                            {this.validator.message('password', this.state.password, this.rules.password)}
                        </div>

                        <p className='forgot-password'>Lupa kata sandi</p>

                        <Button text="Masuk" className="btn-primary btn-block" />
                    </form>
                </section>
                {/* /Form Login */}
            </section>
        );
    }
}

Object.assign(SideRight.prototype, ControllerLogin);
export default withRouter(SideRight);
