// built-in
import { useState } from 'react';

// internal
import './Login.css';
import { endpoint } from '../../Config';

// external
import axios from 'axios';

const img = { backgroundImage: `url(${process.env.PUBLIC_URL}/img/image-001.png)` };

const ColumnLeft = (props) => {
    return (
        <div className="img-login" style={img}>
            <h1>{props.title}</h1>
            <div className="subtitle-login">{props.subTitle}</div>
        </div>
    );
}

const MenuLogin = () => {
    return (
        <nav className="nav-login">
            <ul className="menu-list">
                <li><a href="#" className="active">Masuk</a></li>
                <li><a href="#">Daftar</a></li>
            </ul>
        </nav>
    );
}

const ColumnRight = () => {
    // use state toggle password
    const [togglePassword, setTogglePassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // toggle password
    const showPassword = (evt) => {
        setTogglePassword(!togglePassword);
    }

    // jika di klik 'masuk'
    const submitLogin = async (evt) => {
        try {

            evt.preventDefault();
            const data = { email, password };
            const response = await axios.post(`${endpoint}/login`, data);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    // ui form login
    return (
        <div>
            <MenuLogin />
            <form onSubmit={submitLogin}>
                <div className="wrapper-form-login">
                    <div className="text-center text-muted fweight-400">Silahkan masuk ke akun Komunitas Mea kamu!</div>
                    <div className="margin-top-5 form-login">
                        <div className='form-group'>
                            <label>Nama Lengkap</label>
                            <input type="text" className="input-form" placeholder="Masukan Nama Lengkap" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Password</label>
                            <input type={togglePassword ? "text" : "password"} className="input-form" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Nama Lengkap" />
                            <div className="show-password" onClick={showPassword}>{togglePassword ? "Hide" : "Show"}</div>
                        </div>

                        <button className="btn btn-orange btn-block">Masuk</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


const Login = () => {
    return (
        <div className="wrapper-login">
            <ColumnLeft title="KOMUNITAS MEA" subTitle="Komunitas Jago Jualan Online" />
            <ColumnRight />
        </div>
    );
}

export default Login