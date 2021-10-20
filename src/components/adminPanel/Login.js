import React from 'react';
import terpLogo from '../home/image/logoTerp.png';
import './login.scss';

export default function Login() {
    return (
        <div className='login-wrapper'>

            <form className='formContainer'>
            <img src={terpLogo} alt="Terp Logo"/>
                <section>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                </section>
                <div>
                    <button type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    )
}