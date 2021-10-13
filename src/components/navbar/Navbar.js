import React from 'react';
import {
    BrowserRouter as
        Router,
        Link
} from "react-router-dom";
import terpLogo from './image/logoTerp.png'
import './navbar.scss'

export default class Navbar extends React.Component {
    render() {
        return (
                <div className="nav">
                    <Link to="/"><img src={terpLogo}></img></Link>
                    <section>
                    <Link className="btn request" to="/requestA">ASL SIGN LANGUAGE<br/>Request Form</Link>
                    <Link className="btn request" to="/requestB">FORIEGN LANGUAGE<br/>Request Form</Link>
                    <Link className="btn cancel" to="/requestC">ASSIGNMENT<br/>Cancellations</Link>
                    </section>
                    <h2>(904) 687-1022</h2>
                </div>
        )
    }
}