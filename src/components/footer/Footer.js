import React from 'react'
import {
    BrowserRouter as
        Router, Link
} from 'react-router-dom'
import terpLogo from '../home/image/logoTerp.png'
import './footer.scss';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="footerContainer">

                <div className="footerContent">
                <Link to="/"><img src={terpLogo}/></Link>
                    <ul>
                        <li><Link className="btn" to='/requestA'>Sign Language Request</Link></li>
                        <li><Link className="btn" to="/requestB">Foreign Language Request</Link></li>
                        <li><Link className="btn" to="/requestC">Assignment Cancellation</Link></li>
                        <li><Link className="btn" to="#">Interpreter</Link></li>
                    </ul>
                </div>

                <div className="footerContent">
                    <h2>OUR MISSION</h2>
                    <p>
                        Interpreter Source LLC is dedicated to delivering the highest quality communication to the
                        communities we serve and providing the most transparent interpreting services to meet the
                        uniuqe needs of each Deaf and Hard-of-Hearing individual
            </p>
                </div>

                <div className="footerContent">
                    <h2>CONTACT</h2>
                    <h3>P.O. Box 860157 <br /> St. Augustine, FL 32164</h3>
                </div>

                <div className="footerContent">
                    <h2>SERVICES</h2>
                    <h4>American Sign Language</h4>
                    <p>On-Site Interpreting <br />
               8am - 5pm: 904-687-1022 Ext.1 <br />
               After Hours: 904-540-2123
            </p>

                    <h4>Foreign Language</h4>
                    <p>On-Site Interpreting <br />
               8am - 5pm: 904-687-1022 Ext.2 <br />
               After Hours: 904-540-2123
            </p>
                </div>

            </div>
        )
    }
}