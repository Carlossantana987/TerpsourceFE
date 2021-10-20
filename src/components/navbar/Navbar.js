import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import terpLogo from './image/logoTerp.png'
import './navbar.scss'

 const Navbar = () => {
        return (
                <nav className="nav">

                    <Link to="/"><img src={terpLogo} alt='terp logo'></img></Link>

                    <section>
                    <Link className="btn home" to='/'><FontAwesomeIcon icon="home" size="2x"/></Link>
                    <Link className="btn request" to="/requestA">ASL SIGN LANGUAGE<br/>Request Form</Link>
                  
                    <Link className="btn request" to="/requestB">FORIEGN LANGUAGE<br/>Request Form</Link>

                    <Link className="btn cancel" to="/requestC">ASSIGNMENT<br/>Cancellations</Link>
                    </section>
                    
                    <h2>PHONE : (904) 687-1022</h2>
                </nav>
        )
    }

export default Navbar;