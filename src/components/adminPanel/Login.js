import React from 'react';
import terpLogo from '../home/image/logoTerp.png';
import axios from 'axios';
import './login.scss';

export default function Login() {
    
    return (
        <div className='login-wrapper'>

            <form className='formContainer'>
            <img src={terpLogo} alt="Terp Logo"/>
                <section>
                    <label>
                        <h2>Username</h2>
                        <input type="text" />
                    </label>
                    <label>
                        <h2>Password</h2>
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